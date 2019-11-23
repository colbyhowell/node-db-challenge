const db = require('../data/db-config')

function addResource(data) {
    return db('resources').insert(data)
        .then(res => {
            return db('resources').where({ res_id: res[0] })
        })
}

function getResources() {
    return db('resources')
}

function getResourcesById(id) {
    return db('resources').where({ project_id: id })
}

function addProject(data) {
    return db('projects').insert(data)
        .then(res => {
            return db('projects').where({ id: res[0] })
        })
}

function getProjects() {
    return db("projects").then(res =>
        res.map(r => ({ ...r, completed: r.completed ? true : false }))
    )
}

function getProjectById(id) {
    return db('projects').where({ id })
}
function addTask(data) {
    return db('tasks').insert(data)
        .then(res => {
            return db('tasks').where({ id: res[0] })
        })
}

function getTasks() {
    return db('tasks as t')
        .join('projects as p', 't.project_id', '=', 'p.id')
        .select('t.task_id', 't.description as task_desc', 't.notes', 't.completed', 'p.name', 'p.description')
        .then(res =>
            res.map(r => ({ ...r, completed: r.completed ? true : false }))
        )
}

function getTasksById(id) {
    return db('tasks').where({ project_id: id })
}

module.exports = {
    addResource,
    getResources,
    addProject,
    getProjects,
    addTask,
    getTasks,
    getResourcesById,
    getProjectById,
    getTasksById
}