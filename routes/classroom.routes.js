// import router
const router = require("express").Router();

// import DB dependencies
const mongoose = require("mongoose");

// import authentication dependencies
const passport = require("passport"); // strategy
const jwt = require("jsonwebtoken");  // token

const { ObjectId } = require("mongoose").Types;

const Classroom = require("../models/Classroom.model");

// REST

// REpresentational State Transfer

// Uma API é considerada RESTful quando ela adere às regras do REST
// APIs RESTful precisam ser Stateless (Não guarda nenhum state no servidor)

// Classrooms CRUD

/**
 * Create
 * ****** */
router.post('/classroom',
  passport.authenticate('jwt', {session: false}),
  async (req, res) => {
    console.log('CREATE: classroom =>', req.body);
    const user_id = req.user._id;
    const newClassroom = { ...req.body, user_id };
    try {
      const result = await Classroom.create(newClassroom);
      console.log('created:', result);
      return res.status(201).json({ created: result });
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }
)

/**
 * Read
 * **** */
router.get('/classroom/all',
  passport.authenticate('jwt', {session: false}),
  async (req, res) => {
    try {
      const user_id = req.user._id;
      const result = await Classroom.find({ user_id });
      console.log('READ: classroom =>', result);
      if (result) {
        return res.status(200).json(result);
      }
      return res.status(404).json({ message: 'document not found' });
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }
)

router.get('/classroom/:_id',
  passport.authenticate('jwt', {session: false}),
  async (req, res) => {
    try {
      const { _id } = req.params;
      const result = await Classroom.findOne({ _id });
      console.log('UPDATE 1/2: classroom', result);
      if (result){
        return res.status(200).json(result);
      }
      return res.status(404).json({ message: 'document not found' });
    }catch (err) {
      return res.status(500).json({ error: err });
    }
  }
)

/**
 * Update
 * ****** */
router.patch('/classroom/:_id',
  passport.authenticate('jwt', {session: false}),
  async (req, res) => {
    try {
      const { _id } = req.params;
      const result = await Classroom.findOneAndUpdate({ _id }, req.body, {new: true});
      console.log('UPDATE 2/2: classroom', result);
      if (result){
        return res.status(200).json(result);
      }
      return res.status(404).json({ message: 'document not found' });
    } catch (err) {
      return res.status(500).json({ error: err })
    }
  }
)

/**
 * Delete
 * ****** */
router.delete('/classroom/:_id',
  passport.authenticate('jwt', {session: false}),
  async (req, res) => {
    try {
      const { _id } = req.params;
      // TODO: delete repos related to this classroom _id (deleteMany)
      const result = await Classroom.deleteOne({ _id });
      console.log('DELETE: classroom', result);
      return res.status(200).json({});
    } catch (err) {
      return res.status(500).json({ error: err })
    }
  }
)

module.exports = router;
