const orderFunc = async (image_url, name, price, count, rating) => {
    console.log(image_url)
    // Create a product object
    const product = { image_url, name, price, count, rating };

    // Get existing products from localStorage
    let products = JSON.parse(localStorage.getItem('products')) || [];

    // Add the new product to the products array
    products.push(product);

    // Save the updated products array back to localStorage
    localStorage.setItem('products', JSON.stringify(products));
};