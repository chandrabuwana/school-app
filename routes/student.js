const express=require('express')
const router=express.Router()
const model=require('../models')

router.get('/',(req,res)=>{
  model.Student.findAll()
  .then(dataStudent=>{
    // res.send(dataStudent[0].fullname())
    res.render('student',{dataStudent:dataStudent})
  })
  .catch(err=>{
    res.send(err)
  })
})

router.get('/add',(req,res)=>{
  res.render('addstudent',{error:null})
})

router.post('/add',(req,res)=>{
  model.Student.create({
    first_name:req.body.first_name,
    last_name:req.body.last_name,
    email:req.body.email
  })
  .then(()=>{
    res.redirect('/student')
  })
  .catch(err=>{
    res.render('addteacher',{error:err})
  })
})

router.get('/edit/:id',(req,res)=>{
  model.Student.findAll({
    where:{id:req.params.id}
  })
  .then(dataStudent=>{
    res.render('editstudent',{dataStudent:dataStudent[0]})
  })
})

router.post('/edit/:id',(req,res)=>{
  model.Student.update({
    first_name:req.body.first_name,
    last_name:req.body.last_name,
    email:req.body.email
  },{where:{id:req.params.id}
    })
    .then(()=>{
      res.redirect('/student')
    })
})

router.get('/delete/:id',(req,res)=>{
  model.Student.destroy({
    where:{id:req.params.id}
  })
  .then(dataStudent=>{
    res.redirect('/student')
  })
})
module.exports = router;
