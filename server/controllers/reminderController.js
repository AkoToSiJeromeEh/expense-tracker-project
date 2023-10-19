const asyncHandler = require('express-async-handler')
const Reminder = require('../model/reminderModel')

//@desc Get all reminders
//@route GET /api/reminders
//@access public
const getReminders = asyncHandler(async(req, res)=>{
    const reminder = await Reminder.find()
    res.status(200).json(reminder)
})



//@desc create reminder
//@route GET /api/reminders/createReminder/:id
//@access public
const createReminder = asyncHandler(async(req, res)=>{
    console.log(req.body);
    const {title, price, date, content} = req.body;
    if(!title || !content){
        res.status(400);
        throw new Error("All fields are required")
    }

    const reminder = await Reminder.create({
        title,
        price,
        date,
        content
    })
    res.status(201).json({reminder})
})



//@desc update reminder
//@route GET /api/reminders/updateReminder/:id
//@access public
const updateReminder = asyncHandler(async(req, res)=>{
    res.status(200).json({message: `update reminder for id:${req.params.id}`})

})



//@desc delete reminder
//@route GET /api/reminders/deleteReminder
//@access public
const deleteReminder = asyncHandler(async(req, res)=>{
    res.status(200).json({message: `delete reminder for id:${req.params.id}`})

})




module.exports = { 
    getReminders,
    createReminder,
    updateReminder,
    deleteReminder
}


