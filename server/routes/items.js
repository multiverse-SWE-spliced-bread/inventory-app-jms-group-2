const express = require("express")
const itemsRouter = express.Router()
const Items = require("../database/Items.js")

// GET /items
itemsRouter.get("/", async (req, res) => {
    const items = await Items.findAll();
    res.send(items)
})

// GET /items/:id
itemsRouter.get("/:id", async (req, res) => {
    const item = await Items.findByPK(req.params.id)
    res.send(item)
    })

module.exports = itemsRouter



