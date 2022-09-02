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
    const item = await Items.findByPk(req.params.id)
    res.send(item)
    })
// POST /items

itemsRouter.post("/", async (req, res) => {
    await Items.create(req.body)
    res.send("Item created")
})

// DESTROY /items/:id
itemsRouter.delete("/:id", async (req, res) => {
    await Items.destroy({
        where: {
            id: req.params.id
        }
    })
    res.send("item deleted")
})
// UPDATE / items/:id
itemsRouter.put("/:id", async (req, res) => {
    await Items.put(req.body,{
        where: {
            id: req.params.id
        }
    })
    res.send("item updated")
})
module.exports = itemsRouter



