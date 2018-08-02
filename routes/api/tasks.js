const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Tasks = mongoose.model("Tasks");

//Tasks
router.post('/task/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { errors, isValid } = validatePostsInput(req.body);

  if(!isValid) {
    return res.status(400).json(errors);
  }
  Task.findById(req.params.id).then(task => {
    const newTask = {
      category: req.body.category,
      task: req.body.task,
      user: req.user.id
    }

    post.tasks.unshift(newTask);

    post.save().then(task => res.json(task))
  })
  .catch(err => res.status(404).json({ notaskfound: 'Task is not found' }))
});

// @route          GET api/task
// @description     tasks
// @access type     Private
app.get('/task', function(res, req) {
  res.send('Task for `{}`: ');
})
// @route           PUT api/task
// @description     tasks
// @access type     Private
app.get('/task', function(res, req) {
  res.send('Task for `{}`: ');
})
// @route           DELETE api/task/:id/:task_id
// @description     delete tasks
// @access type     Private
router.delete('/task/:id/:task_id', passport.authenticate('jwt', { session: false }), (req, res) => {

  Post.findById(req.params.id).then(post => {
    if(post.tasks.filter(task => task._id.toString() === req.params.task_id).length === 0) {
      return res.status(404).json({ notask: 'Task does not exist.' })
    }

    const removeIndex = task.tasks
    .map(item => item._id.toString())
    .indexOf(req.params.task_id);

    task.tasks.splice(removeIndex, 1);

    task.save().then(task => res.json(task));
  })
  .catch(err => res.status(404).json({ notaskfound: 'Task is not found' }))
});

module.exports = router;
