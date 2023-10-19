const mongoose = require('mongoose');

const expenseSchema = mongoose.Schema({
    expense: {
        type: Number,
        required: [true, 'Add the amount for expense']
    },
    category: {
        type: String,
        required: [true, 'Add the category for expense']
    },
    content: {
        type: String,
        required: [true, 'Add the content for expense']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Expense', expenseSchema)