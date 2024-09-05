CREATE TABLE categories (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	image_url VARCHAR(200) NOT NULL
);


CREATE TABLE products (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	price DECIMAL(20, 2) NOT NULL,
	image_url VARCHAR(200) NOT NULL,
	category_id INT,
	count INT,
    rating INT,
	FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE 
);