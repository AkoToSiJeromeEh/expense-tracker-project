const express = require('express');
const router = express.Router();
const {
    getReminders,
    createReminder,
    updateReminder,
    deleteReminder
} = require('../controllers/reminderController')

// get all reminders
router.route('/').get(getReminders)

// post reminder
router.route('/createReminder').post(createReminder)


// update reminder
router.route('/updateReminder/:id').patch(updateReminder)
//@desc update reminder
//@route GET /api/reminders/updateReminder/:id
//@access public


// delete reminder
router.route('/deleteReminder/:id').delete(deleteReminder)

module.exports = router;

