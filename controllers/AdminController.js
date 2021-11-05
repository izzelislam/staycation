const fs = require('fs-extra')
const path = require('path')
const validate = require('validate.js')

// modal
const category = require('../models/Category')
const Bank     = require('../models/Bank')
const { async } = require('validate.js')

module.exports = {
  viewDashboard: (req, res) => {
    res.render('admin/dashboard/dashboard')
  },

  // category
  viewCategory: async (req, res) => {
    const resCategory = await category.find()

    const alertMessage = req.flash('alertMessage')
    const alertStatus  = req.flash('alertStatus')
    const alert ={
      message: alertMessage,
      status: alertStatus
    }

    res.render('admin/category/view_category', {
      resCategory, alert   
    })
    
  },

  storeCategory: async (req, res) => {
    try {
      const { name } = req.body
      await category.create({name})
      
      req.flash('alertMessage', 'berhasil create data')
      req.flash('alertStatus', 'success')

      res.redirect('/admin/category')
    } catch (err) {
      req.flash('alertMessage', `$err.message`)
      req.flash('alertStatus', 'danger')
      res.redirect('/admin/category')
    }
  },

  updateCategory: async (req, res) => {
    try {
      const { id, name } = req.body
      const resCategory  = await category.findOne({_id: id})
      resCategory.name = name
      await resCategory.save()

      req.flash('alertMessage','berhasil update category')
      req.flash('alertStatus', 'success')

      res.redirect('/admin/category')
    } catch (error) {
      req.flash('alertMessage', `$error.message`)
      req.flash('alertStatus', 'danger')

      res.redirect('/admin/category')
    }
  },

  deleteCategor: async (req, res) => {
    try {
      let {id} = req.params
      const resCategory = await category.findOne({_id: id})
      await resCategory.remove()
      
      req.flash('alertMessage','berhasil hapus category')
      req.flash('alertStatus', 'success')

      res.redirect('/admin/category')
    } catch (error) {
      req.flash('alertMessage',`$error.message`)
      req.flash('alertStatus', 'danger')

      res.redirect('/admin/category')
    }
  },

  // bank
  viewBank: async (req, res) => {
    const bank = await Bank.find()
    const alertMessage = req.flash('alertMessage')
    const alertStatus = req.flash('alertStatus')
    const alert       = {message: alertMessage, status: alertStatus}
    res.render('admin/bank/view_bank', {
      alert, bank
    })
  },

  storeBank: async (req, res) => {
    try {
        console.log(req.body)
        const { name, nameBank, nomorRekening } = req.body
        await Bank.create({
          name,
          nameBank, 
          nomorRekening,
          imageUrl: `images/${req.file.filename}`
        })
        req.flash('alertMessage', 'success create bank')
        req.flash('alertStatus', 'success')
        res.redirect('/admin/bank')
    } catch (error) {
        req.flash('alertMessage', `${error}`)
        req.flash('alertStatus', 'danger')
        res.redirect('/admin/bank')
    }
  },

  updateBank: async (req, res) => {
    try {
      const { id, name, nameBank, nomorRekening } = req.body
      let bank = await Bank.findOne({_id: id})

      if (validate.isEmpty(req.file)){
        var image = bank.filename
      }else {
        fs.unlink(path.join(`public/${bank.imageUrl}`))
        var image = 'images/'+req.file.filename
      }

      console.log('asasas',image)

      bank.name = name
      bank.nameBank = nameBank
      bank.nomorRekening = nomorRekening
      bank.imageUrl = image

      await bank.save()
      req.flash('alertMessage', 'sukses update data')
      req.flash('alertStatus', 'success')
      
      res.redirect('/admin/bank')

    } catch (error) {
      req.flash('alertMessage', `${error}`)
      req.flash('alertStatus', 'danger')
      res.redirect('/admin/bank')
    }
  },

  deleteBank: async (req, res) => {
    try {
      const { id } = req.params
      let bank = await Bank.findOne({_id: id})

      if (fs.existsSync(`public/${bank.imageUrl}`)){
        await fs.unlink(path.join(`public/${bank.imageUrl}`))
      }

      await bank.remove()

      req.flash('alertMessage', 'Berhasil hapus data')
      req.flash('alertStatus', 'success')
      res.redirect('/admin/bank')

    } catch (error) {
      req.flash('alertMessage', `${error}`)
      req.flash('alertStatus', 'danger')
      res.redirect('/admin/bank')
    }
  },

  // item
  viewItem: async (req, res) => {
    const resCategory = await category.find()
    res.render('admin/item/view_item',{
      resCategory
    })
  },

  // order
  viewOrder: (req, res) => {
    res.render('admin/order/view_order')
  }
}