const Todo = require("../models/Todo");

exports.getTodos = async (rq, res) => {
    const todos = await Todo.find();
    res.json(todos);
};

exports.addTodo = async (req, res) => {
    const newTodo = new Todo({ title: req.body.title });
    await newTodo.save();
    res.status(201).json(newTodo);
};

exports.updateTodo = async (req, res) => {
    const updated = await Todo.findByIdAndUpdate(req.params.id, { new: true });
    res.json(updated);
};

exports.deleteTodo = async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: "Todo deleted" });
};