const express = require('express');

const Projects = require('./projects-model');

const router = express.Router();

// PROJECTS
router.get('/all', async (req, res) => {
    try {
        const data = await Projects.getProjects()
        res.status(200).json(data)
    } catch{
        res.status(500).json({ message: "The server was not reached" })
    }
})

router.get('/all/:id', async (req, res) => {
    const { id } = req.params
    try {
        const data = await Projects.getProjectById(id)
        res.status(200).json(data)
    } catch{
        res.status(500).json({ message: "The server was not reached" })
    }
})

router.post('/all', async (req, res) => {
    const newPro = req.body
    try {
        const proRes = await Projects.addProject(newPro)
        res.status(201).json(proRes)
    } catch{
        res.status(500).json({ Message: "The server was not reached" })
    }
})


// RESOURCES
router.get('/resources', async (req, res) => {
    try {
        const resources = await Projects.getResources()
        res.status(200).json(resources)
    } catch{
        res.status(500).json({ Message: "The server was not reached" })
    }
})

router.get('/resources/:id', async (req, res) => {
    const { id } = req.params
    try {
        const resources = await Projects.getResourcesById(id)
        res.status(200).json(resources)
    } catch{
        res.status(500).json({ Message: "The server was not reached" })
    }
})

router.post('/resources', async (req, res) => {
    const newRes = req.body
    try {
        const addedRes = await Projects.addResource(newRes)
        res.status(201).json(addedRes)
    } catch{
        res.status(500).json({ Message: "The server was not reached" })
    }
})


// TASKS
router.get('/tasks', async (req, res) => {
    try {
        const data = await Projects.getTasks()
        res.status(200).json(data)
    } catch{
        res.status(500).json({ Message: "The server was not reached" })
    }
})

router.get('/tasks/:id', async (req, res) => {
    const { id } = req.params
    try {
        const data = await Projects.getTasksById(id)
        res.status(200).json(data)
    } catch{
        res.status(500).json({ Message: "The server was not reached" })
    }
})

router.post('/tasks', async (req, res) => {
    const newData = req.body
    try {
        const addedTask = await Projects.addTask(newData)
        res.status(201).json(addedTask)
    } catch{
        res.status(500).json({ Message: "The server was not reached" })

    }
})



module.exports = router