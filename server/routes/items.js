const express = require("express")
<<<<<<< HEAD
const itemsRouter = express.Router()
const Items = require("../database/Items.js")

// GET /items
itemsRouter.get("/", async (req, res) => {
=======
const itemsRt = express.Router()
const { Items } = require("../database/db.js")

// GET /items
itemsRt.get("/", async (req, res) => {
>>>>>>> master
    const items = await Items.findAll();
    res.send(items)
})

// GET /items/:itemID
<<<<<<< HEAD
itemsRouter.get("/:id", async (req, res) => {
    const item = await Items.findByPK(req.params.id)
    res.send(item)
    })

module.exports = itemsRouter
=======
itemsRt.get("/:itemID", async (req, res) => {
    const item = await Items.findByPK(req.params.itemID)
    res.send(item)
    })

module.exports = {itemsRt}
>>>>>>> master
