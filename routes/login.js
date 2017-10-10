const express= require('express')
const router=express.Router()
const model=require('../models')


router.get('/',(req,res)=>{
  model.User.findAll()
  .then(dataLogin=>{
    // res.send(dataLogin)
    res.render('login')
  })
})

router.post('/',(req,res)=>{
  model.User.findAll({
    where: {
      username: req.body.user,
      password: req.body.pass
    }
  })
  .then(datalogin=>{
    // res.send(datalogin)
    if(datalogin){
      req.session.username= datalogin[0].username
      req.session.role=datalogin[0].role
      res.redirect('/')
    }else{
      res.send('Salah Masuk!!')
    }
  })
})






module.exports = router;
