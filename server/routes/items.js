const express = require("express")
const router = express.Router()
const { Item } = require("../models")

// GET /items
router.get("/", async (req, res) => {
    const items = await Item.findAll();
    res.send(items)
})

// GET /items/:itemID
router.get("/:itemID", async (req, res) => {
    const item = await Item.findByPK(req.params.itemID)
    res.send(item)
    })

