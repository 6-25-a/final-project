const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Post = require('../../models/Posts');

const Profile = require('../../models/Profile');

const validatePostsInput = require('../../validate/posts');

// @route           GET api/posts/test
// @description     posts route test
// @access type     Public
router.get('/test', (req, res) => res.json({ message: 'Posts works'}));

// @route           GET api/post
// @description     Get posts 
// @access type     Public
router.get('/', (req, res) => {
  Post.find()
  .sort({ date: -1 })
  .then(posts => res.json(posts))
  .catch(err => res.status(404).json({nopostsfound: 'No posts found'}));
});

// @route           GET api/post/:id
// @description     Get posts by id
// @access type     Public
router.get('/:id', (req, res) => {
  Post.findById(req.params.id)
  .then(post => res.json(post))
  .catch(err => res.status(404).json({nopostfound: 'No post found for ID'}));
});

// @route           POST api/post
// @description     posts 
// @access type     Private
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { errors, isValid } = validatePostsInput(req.body);

if(!isValid) {
  return res.status(400).json(errors);
}

  const newPost = new Post({
    text: req.body.text,
    name: req.body.name,
    avatar: req.body.avatar,
    user: req.user.id
  });

  newPost.save().then(post => res.json(post))
});

// @route          DELETE api/posts/:id
// @description     Remove posts 
// @access type     Private
router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Profile.findOne({ user: req.user.id })
  .then(profile => {
    Post.findById(req.params.id)
      .then(post => {
       if(post.user.toString() !== req.user.id) {
         return res.status(401).json({ notauthorized: 'User is not authorized' })
       } 

       post.remove().then(() => res.json({ success: true }))
      })
      .catch(err => res.status(404).json({ postnotfound: 'No post found' }));
  })
})

// @route         POST api/posts/like/:id
// @description     Like posts 
// @access type     Private
router.post('/like/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Profile.findOne({ user: req.user.id })
  .then(profile => {
    Post.findById(req.params.id)
      .then(post => {
       if(post.likes.filter(like => like.user.toString()  === req.user.id).length > 0) {
        return res.status(400).json({ likerecorded: 'User liked this post already'})
       }

       post.likes.push({ user: req.user.id });

       post.save().then(post => res.json(post));
      })
      .catch(err => res.status(404).json({ postnotfound: 'No post found' }));
  })
})

// @route         POST api/posts/unlike/:id
// @description     unlike posts 
// @access type     Private
router.post('/unlike/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Profile.findOne({ user: req.user.id })
  .then(profile => {
    Post.findById(req.params.id)
      .then(post => {
       if(post.likes.filter(like => like.user.toString()  === req.user.id).length === 0) {
        return res.status(400).json({ likenotecorded: 'Post has not been liked' })
       }

      const removeIndex = post.likes 
       .map(item => item.user.toString())
       .indexOf(req.user.id)

       post.likes.splice(removeIndex, 1);

       post.save().then(post => res.json(post));
      })
      .catch(err => res.status(404).json({ postnotfound: 'No post found' }));
  })
})

// @route           POST api/posts/comment/:id
// @description     add comment a post 
// @access type     Private
router.post('/comment/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { errors, isValid } = validatePostsInput(req.body);

  if(!isValid) {
    return res.status(400).json(errors);
  }
  Post.findById(req.params.id).then(post => {
    const newComment = {
      text: req.body.text,
      name: req.body.name,
      avatar: req.body.avatar,
      user: req.user.id
    }

    post.comments.unshift(newComment);

    post.save().then(post => res.json(post))
  })
  .catch(err => res.status(404).json({ nopostfound: 'Post is not found' }))
});

// @route          GET api/posts/comment
// @description     posts 
// @access type     Private

// @route           PUT api/posts/comment
// @description     posts 
// @access type     Private

// @route           DELETE api/posts/comment/:id/:comment_id
// @description     delete comments 
// @access type     Private
router.delete('/comment/:id/:comment_id', passport.authenticate('jwt', { session: false }), (req, res) => {

  Post.findById(req.params.id).then(post => {
    if(post.comments.filter(comment => comment._id.toString() === req.params.comment_id).length === 0) {
      return res.status(404).json({ nocomment: 'Comment does not exist' })
    }

    const removeIndex = post.comments
    .map(item => item._id.toString())
    .indexOf(req.params.comment_id);

    post.comments.splice(removeIndex, 1);

    post.save().then(post => res.json(post));
  })
  .catch(err => res.status(404).json({ nopostfound: 'Post is not found' }))
});
module.exports = router;