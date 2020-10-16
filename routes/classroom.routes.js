// import router
const router = require("express").Router();

// import DB dependencies
const mongoose = require("mongoose");

// import authentication dependencies
const passport = require("passport"); // strategy
const jwt = require("jsonwebtoken");  // token

const { ObjectId } = require("mongoose").Types;

const Classroom = require("../models/Classroom.model");
const Repo = require('../models/Repo.model');

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
    const user_id = req.user._id;
    console.log('CREATE: classroom =>', req.body);
    const newClassroom = { ...req.body, user_id };
    try {
      const result = await Classroom.create(newClassroom);
      console.log('created:', result);
      
      // TODO: creação dos repos
      const { repo_urls, students } = req.body
      const classroomId = result._id;
      console.log('CREATE: repos =>', repo_urls);

      // cria um array das notas de todos os alunos, para UM repositório
      const scoresArr = students.map(student => {
        return {
          git_user: student,
          score: 0,
          done: false,
        }
      })

      // cria cada repositório como uma nova entidade
      repo_urls.forEach(async (url) => {
        const repo = {
          classroom_id: classroomId,
          scores: scoresArr,
          repo_url: url,
        }
        const resultRepo = await Repo.create(repo);
        console.log('created:', resultRepo);
      })


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
      // TODO: pegar os _ids dos repositórios para que não sejam criados outros
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
      // TODO: usando os _ids dos repositórios, garantir que não recrie os mesmos repositórios com _ids diferentes
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
