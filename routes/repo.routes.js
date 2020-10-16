// import router
const router = require("express").Router();

// import DB dependencies
const mongoose = require("mongoose");

// import authentication dependencies
const passport = require("passport"); // strategy
const jwt = require("jsonwebtoken");  // token

const { ObjectId } = require("mongoose").Types;

const Repo = require("../models/Repo.model");

/**
 * Create
 * ****** */
// Create do repo é feito no Create do classroom
 
/**
 * Read
 * **** */
router.get('/repo/all/:classroom_id',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    try {
      const { classroom_id } = req.params;
      const result = await Repo.find({ classroom_id });
      if (result) {
        return res.status(200).json(result)
      }
      return res.status(404).json({ message: 'Document not found'});
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }
)

router.get('/repo/:_id',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    try {
      const { _id } = req.params;
      const result = await Repo.findOne({ _id });
      if (result) {
        return res.status(200).json(result);
      }
      return res.status(404).json(result);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }
)
/**
 * Update
 * ****** */
router.patch('/repo/:_id',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    try {
      const { _id } = req.params;
      const scoresArr = req.body
      console.log('UPDATE: scores =>', scoresArr);
      const result = await Repo.findOneAndUpdate({ _id }, { scores: scoresArr }, {new: true})
      return res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }
);
 
/**
 * Delete
 * ****** */
router.delete('/repo/:_id',
  passport.authenticate('jwt', {session: false }),
  async (req, res) => {
    try {
      const { _id } = req.params;
      const result = await Repo.findOneAndDelete({ _id });
      console.log('DELETE: repo =>', result);
      return res.status(200).json(result);
    } catch (arr) {
      return res.status(500).json({ error: err });
    }
  }
)

module.exports = router;
