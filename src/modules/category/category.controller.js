import { form } from "../../utils/formidable.js";
import { fetchData } from "../../postgres/postgres.js";
import { imageConfig } from "../../config/image.config.js";
export async function addCategory(req, res) {

    const [fields, files] = await form.parse(req);
    const categoryImage = imageConfig.currentImagePath+files.image_url[0].newFilename
    await fetchData(
        "INSERT INTO categories (name, image_url) VALUES ($1, $2)",
        fields.name[0],
        categoryImage,
    );

    res.status(201).send({
        message: "Category successfully created",
    });
}


export async function getAllCategories(req, res) {

    const products = await fetchData('SELECT * FROM products ORDER BY rating DESC LIMIT 5')

    const categories = await fetchData(
        "SELECT * FROM categories;"
    );

    for( let c of categories){
        c.products = await fetchData(`select * from products where category_id = ${c.id}`)
    }

    

    res.render("index",{categories: categories, products: products})
}

export async function getCategoryById(req, res) {
    const { id } = req.params;
    const category = await fetchData(`SELECT * FROM categories WHERE id = ${id}`);
    if (category.length === 0) {
        return res.status(404).send('Category not found');
    }

 
    category[0].products = await fetchData(`SELECT * FROM products WHERE category_id = ${id}`);
    res.render('view-category.hbs', { category: category[0] });
}





export async function updateCategoryById(req, res) {

    const categoryId = req.params?.categoryId

    const [fields, files] = await form.parse(req)

    if (categoryId) {

        await fetchData("UPDATE categories SET name = $1 , image_url = $2  WHERE id = $3",
            fields.name[0],
            files.image_url[0].newFilename,
            categoryId
        )

        res.status(200).send({
            message: "Category successfully updated",
        });

        return;
    }

    res.status(404).send({
        message: 'category not found'
    })
}

export async function deleteCategory(req, res) {

    const categoryId = req.params?.categoryId

    if (categoryId) {
        await fetchData('DELETE FROM categories WHERE id = $1', categoryId)

        res.status(200).send({
            message: "Category successfully deleted"
        })

        return;
    }

    res.status(404).send({
        message: 'category not found'
    })
}