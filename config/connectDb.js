const mongoose = require("mongoose");

const connectDb = async () => {
  mongoose
    .connect(
      "mongodb+srv://skander:<password>@cluster0.tzyiy.mongodb.net/?retryWrites=true&w=majority"
    )
    .then((res) => console.log("coonect to DataBase"))
    .catch((err) => console.error(err));

    try {
        await mongoose.connect('mongodb+srv://skander:<password>@cluster0.tzyiy.mongodb.net/?retryWrites=true&w=majority')
        console.log('connect to DataBase');
    } catch (error) {
        console.error(error)
    }
};
