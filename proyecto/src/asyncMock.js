const products = [
    {
        id: 1,
        name: "Anillo Cartier",
        category: "anillo",
        img: "https://t2.gstatic.com/images?q=tbn:ANd9GcTw8XGgEnWpEzv4wSv9ETpa8jvLfOOJKDbFoGa5Ss4hG5-V_3QU",
        stock: 5,
        description: 'Anillo escultórico geométrico de 18 quilates en dos tonos de oro de Cartier, diseñado por Dinh Van en 1969.'

    },
    {
        id: 2,
        name: "Pendientes John Donald",
        category: "pendiente",
        img: "https://t1.gstatic.com/images?q=tbn:ANd9GcQYVdiou1dnD6Sn33lYMQ3VXE8BKYOqMgwrbbzajIDRRj6Ck-YR",
        stock: 2,
        description: 'Pendientes vintage de John Donalds en oro de 18 quilates con forma de ojo orgánico de ágata'

    },
    {
        id: 3,
        name: "Pulsera Serpiente",
        category: "pulsera",
        img: "https://static.antiquejewellerycompany.com/2022/05/a770c5b8-dsc07983-scaled.jpg",
        stock: 1,
        description: 'Pulsera de serpiente de oro de 9 quilates de la década de 1960 con ojos engastados de rubí'

    },
    {
        id: 4,
        name: "Broche Camelia Chanel",
        category: "broche",
        img: "https://dsfantiquejewelry.com/cdn/shop/products/CHANEL_1960_s_Camellia_Pearl_Brooch_Pendant.jpg?v=1561085247&width=1400",
        stock: 4,
        description: 'Broche de Camelia de Chanel de la década de 1960'
    },
    {
        id: 5,
        name: "Lentes Dior",
        category: "lentes",
        img: "https://i.etsystatic.com/19072979/r/il/f30d0e/3628622954/il_fullxfull.3628622954_sydk.jpg",
        stock: 10,
        description: 'Lentes de sol 1960 Christian Dior con esmalte y joyas de Tura'
    },

]



export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
};

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId));
        }, 500);
    });
};

export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filteredProducts = products.filter(prod => prod.category === productCategory);
            resolve(filteredProducts);
        }, 500);
    });
};
