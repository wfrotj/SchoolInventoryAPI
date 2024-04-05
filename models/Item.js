import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
});

itemSchema.set("toJSON", {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Item = mongoose.model("Item", itemSchema);

export default Item;
