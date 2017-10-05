const express= require('express')
const router=express.Router()
const model=require('../models')

router.get('/',(req,res)=>{
  // res.send('teacher')
  model.Teacher.findAll()
    .then(dataTeacher=>{
      // res.send(dataTeacher)
      res.render('teacher',{dataTeacher:dataTeacher})
    })
  .catch(err=>{
    res.send(err)
  })
})

router.get('/add',(req,res)=>{
  res.render('addteacher',{error:null})
})

router.post('/add',(req,res)=>{
  model.Teacher.create({
    first_name:req.body.first_name,
    last_name:req.body.last_name,
    email:req.body.email
  })
  .then(()=>{
    res.redirect('/teacher')
  })
  .catch(err=>{
    // res.send(err.errors[0])
    res.render('addteacher',{error:err})
  })
})

router.get('/edit/:id',(req,res)=>{
  model.Teacher.findAll({
    where:{id:req.params.id
    }
  })
  .then(dataTeacher=>{
    res.render('editteacher',{dataTeacher:dataTeacher[0]})
    // res.send(dataTeacher)
  })
    })

router.post('/edit/:id',(req,res)=>{
  model.Teacher.update({
    first_name:req.body.first_name,
    last_name:req.body.last_name,
    email:req.body.email
  },{where:{id:req.params.id}
    })
  .then(()=>{
    res.redirect('/teacher')

  })
})

router.get('/delete/:id',(req,res)=>{
  model.Teacher.destroy({
    where:{id:req.params.id}
  })
  .then(dataTeacher=>{
    res.redirect('/teacher')
  })
})

module.exports = router;
