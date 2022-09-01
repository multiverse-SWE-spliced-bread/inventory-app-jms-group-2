const express = require("express")
const itemsRt = express.Router()
const { Items } = require("../database/db.js")

// GET /items
itemsRt.get("/", async (req, res) => {
    const items = await Items.findAll();
    res.send(items)
})

// GET /items/:itemID
itemsRt.get("/:id", async (req, res) => {
    const item = await Items.findByPK(req.params.id)
    res.send(item)
    })

module.exports = {itemsRt}