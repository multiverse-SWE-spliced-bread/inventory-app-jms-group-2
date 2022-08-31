const express = require("express")
const router = express.Router()
const { Items } = require("../database/db.js")

// GET /items
router.get("/", async (req, res) => {
    const items = await Items.findAll();
    res.send(items)
})

// GET /items/:itemID
router.get("/:itemID", async (req, res) => {
    const item = await Items.findByPK(req.params.itemID)
    res.send(item)
    })

module.exports = router