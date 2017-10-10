const express=require('express')
const router=express.Router()
const model=require('../models')

router.get('/',(req,res)=>{
  model.Subject.findAll({
    include:[{model:model.Teacher}]
  })
  .then(dataSubject=>{
    res.render('subject',{dataSubject:dataSubject})
    // res.send(dataSubject.Teachers)
  })
  .catch(err=>{
    res.send(err)
  })
})

router.get('/:id/enrolled/',(req,res)=>{
  model.StudentSubject.findAll({
    include:[
      { model:model.Student},
      {model:model.Subject}],
    where:{SubjectId:req.params.id}
  })
  .then(dataStudentSubject=>{
    // console.log(',asuk');
    // console.log(dataSubject[0]);
    // res.send(dataStudentSubject)
    res.render('enrolled',{dataStudentSubject:dataStudentSubject})
  })
})

router.get('/:SubjectId/:StudentId/score',(req,res)=>{
  model.StudentSubject.findAll({
    include:[
      {model:model.Student},
      {model:model.Subject}],
      where:{
        SubjectId:req.params.SubjectId,
        StudentId:req.params.StudentId
      }
  })
  .then(dataStudentSubject=>{
    // res.send(dataStudentSubject)
    res.render('score',{dataStudentSubject:dataStudentSubject})
  })
})

router.post('/:SubjectId/:StudentId/score',(req,res)=>{
  let subId=req.params.SubjectId
  model.StudentSubject.update({
    score:req.body.score
  },
    {where:{
      StudentId:req.params.StudentId,
      SubjectId:req.params.SubjectId
    }})
  .then(dataStudentSubject=>{
    // res.send('masuk')
    res.redirect(`/subject/${subId}/enrolled`)
  })
})
module.exports = router;
