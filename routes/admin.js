const router = require('express').Router()
const { upload } = require('../middlewares/multer')

const adminController = require('../controllers/AdminController')

// dashboard
router.get('/dashboard', adminController.viewDashboard)

// category
router.get('/category', adminController.viewCategory)
router.post('/category', adminController.storeCategory)
router.put('/category', adminController.updateCategory)
router.delete('/category/:id', adminController.deleteCategor)

// bank
router.get('/bank', adminController.viewBank)
router.post('/bank', upload ,adminController.storeBank)
router.put('/bank', upload ,adminController.updateBank)
router.delete('/bank/:id', adminController.deleteBank)

// item
router.get('/item', adminController.viewItem)

// order
router.get('/booking', adminController.viewOrder)

module.exports = router
