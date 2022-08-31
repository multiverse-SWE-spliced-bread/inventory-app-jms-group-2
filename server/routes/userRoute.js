const express = require('express')
router = express.Router()
userRoute = require('../controllers/userController')

router.get('/', userRouter.userController)

module.exports = router;