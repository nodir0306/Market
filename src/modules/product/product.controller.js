import { imageConfig } from "../../config/image.config.js";
import { fetchData } from "../../postgres/postgres.js";
import { form } from "../../utils/formidable.js";

export async function getAllProducts(req, res) {

    const products = await fetchData('SELECT * FROM products ORDER BY rating DESC LIMIT 5')

    res.status(200).send({
        message: 'Ok',
        data: products
    })
}



export async function addProduct(req, res) {

    const [fields, files] = await form.parse(req)
    const productImage = imageConfig.currentImagePath + files.image_url[0].newFilename;
    console.log(fields)
    await fetchData('INSERT INTO products(name, price, image_url,rating,category_id, count) VALUES ($1,$2,$3,$4,$5,$6);',
        fields.name[0],
        fields.price[0],
        productImage,
        fields.rating[0],
        fields.category_id[0],
        fields.count[0]
    )

    res.status(201).send({
        message: 'Product successfully created'
    })

}

export async function updateProductById(req, res) {

    const productId = req.params?.productId

    const [fields, files] = await form.parse(req)

    if (productId) {

        await fetchData('UPDATE products SET name = $1, price = $2, image_url =$3, rating = $4 , category_id = $5, count = $6 WHERE id = $7;',
            fields.name[0],
            fields.price[0],
            files.image_url[0].newFilename,
            fields.rating[0],
            fields.category_id[0],
            fields.count[0],
            productId
        )

        res.status(201).send({
            message: 'Product successfully updated'
        })

        return;
    }

    res.status(404).send({
        message: 'product not found'
    })
}

export async function deleteProduct(req, res) {
    const productId = req.params?.productId

    if (productId) {
        await fetchData('DELETE FROM products WHERE id = $1', productId)

        res.status(200).send({
            message: "Product successfully deleted"
        })

        return;
    }

    res.status(404).send({
        message: "Product not found"
    })

}