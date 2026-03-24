const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

dotenv.config();

const products = [
    { name: 'Teddy Bear', price: 20, image: 'https://images.unsplash.com/photo-1559458925-5e608660882e?w=400', description: 'A cute soft teddy bear', category: 'Toys' },
    { name: 'Smart Watch', price: 150, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400', description: 'A modern smart watch', category: 'Electronics' },
    { name: 'Perfume Set', price: 60, image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400', description: 'Luxury perfume set', category: 'Fashion' },
    { name: 'Photo Frame', price: 15, image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400', description: 'Wooden photo frame', category: 'Decor' },
    { name: 'Bluetooth Speaker', price: 45, image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400', description: 'Portable bluetooth speaker', category: 'Electronics' },
    { name: 'Coffee Mug', price: 10, image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400', description: 'Ceramic coffee mug', category: 'Kitchen' },
    { name: 'Gift Hamper', price: 100, image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400', description: 'Assorted gift hamper', category: 'Miscellaneous' },
    { name: 'Chocolate Box', price: 25, image: 'https://images.unsplash.com/photo-1548888998-3caebc301289?w=400', description: 'Premium chocolates', category: 'Food' },
    { name: 'Handbag', price: 80, image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=400', description: 'Leather handbag', category: 'Fashion' },
    { name: 'Wallet', price: 30, image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400', description: "Men's leather wallet", category: 'Fashion' },
    { name: 'Jewelry Set', price: 120, image: 'https://images.unsplash.com/photo-1599643478524-fb66f7f2b1d6?w=400', description: 'Elegant jewelry set', category: 'Fashion' },
    { name: 'Soft Toy', price: 18, image: 'https://images.unsplash.com/photo-1534346800720-302efafb0aed?w=400', description: 'Plush soft toy', category: 'Toys' },
    { name: 'LED Lamp', price: 35, image: 'https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?w=400', description: 'Smart LED desk lamp', category: 'Decor' },
    { name: 'Greeting Cards', price: 5, image: 'https://images.unsplash.com/photo-1621600411688-4be93cd68504?w=400', description: 'Pack of greeting cards', category: 'Stationery' },
    { name: 'Personalized Gifts', price: 50, image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=400', description: 'Customized gift item', category: 'Miscellaneous' }
];

mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
        console.log('MongoDB connected for seeding...');
        await Product.deleteMany();
        await Product.insertMany(products);
        console.log('Database seeded with 15 products!');
        process.exit();
    })
    .catch(err => {
         console.error(err);
         process.exit(1);
    });