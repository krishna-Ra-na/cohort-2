const mongoose = require("mongoose");
// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://krishna:krishna123@cluster0.lfi2z.mongodb.net/todos"
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
