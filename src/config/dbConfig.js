import mongoose from "mongoose";

function db() {
    mongoose
    .connect("mongodb://localhost:27017/expedicoes")
    .then(() => console.log("Conectado ao MongoDB"))
    .catch(err => console.log(err))
}

export default db;