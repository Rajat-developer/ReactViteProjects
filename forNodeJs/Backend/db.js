const mongoose = require('mongoose');
const mongoUri = 'mongodb+srv://fzdsharmarajat:foodapp@cluster0.whwjrhf.mongodb.net/foodapp?';

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(mongoUri);
        console.log('Connected to MongoDB successfully');
        
        const fetched_data = await mongoose.connection.db.collection("food_items").find({}).toArray();
        const food_category = await mongoose.connection.db.collection("food_category").find({}).toArray();
        
        // Assign data to global variables after fetching both collections
        global.food_items = fetched_data;
        global.food_category = food_category;
        
        // Uncomment the following line if you want to log fetched data to the console
        // console.log('Fetched Data:', fetched_data);
        
    } catch (error) {
       console.error('Error:', error);
    }
}

module.exports = connectToMongoDB;
