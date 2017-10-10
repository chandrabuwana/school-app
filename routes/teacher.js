const express= require('express')
const router=express.Router()
const model=require('../models')

router.get('/',(req,res)=>{
  // res.send('teacher')
  model.Teacher.findAll()
    .then(dataTeacher=>{
      let promise = dataTeacher.map(teacher => {
        return new Promise((resolve,reject) => {
          teacher.getSubject()
           .then(dataSubject => {
             if(dataSubject){
               teacher.subject_name = dataSubject.subject_name
             }else{
               teacher.subject_name = 'unassigned'
             }
             resolve(teacher)
           })
        })
      })

      Promise.all(promise)
       .then(teachers => {
         res.render('teacher', {dataTeacher:teachers,error:null})
       })
      // res.send(dataTeacher)
      // res.render('teacher',{dataTeacher:dataTeacher,dataSubject:dataSubject})
    })
  .catch(err=>{
    model.Teacher.findAll()
      .then(dataTeacher=>{
        let promise = dataTeacher.map(teacher => {
          return new Promise((resolve,reject) => {
            teacher.getSubject()
             .then(dataSubject => {
               if(dataSubject){
                 teacher.subject_name = dataSubject.subject_name
               }else{
                 teacher.subject_name = 'unassigned'
               }
               resolve(teacher)
             })
          })
        })
        Promise.all(promise)
         .then(teachers => {
           res.render('teacher', {dataTeacher:teachers,error:err})
         })
        // res.send(dataTeacher)
        // res.render('teacher',{dataTeacher:dataTeacher,dataSubject:dataSubject})
      })
  })
})

router.get('/add',(req,res)=>{
  res.render('addteacher',{error:null})
})
//bkin kondisi validasi res send unassign
router.post('/add',(req,res)=>{
  model.Teacher.create({
    first_name:req.body.first_name,
    last_name:req.body.last_name,
    email:req.body.email
  })
  .then(()=>{
    // if(subject_name== null){
      res.redirect('/teacher')
    // }
    // res.redirect('/teacher')
  })
  .catch(err=>{
    // res.send(err.errors[0])
    res.render('addteacher',{error:err.errors[0]})
  })
})

router.get('/edit/:id',(req,res)=>{
  model.Teacher.findById(req.params.id)
  .then(dataTeacher=>{
    model.Subject.findAll()
    .then(dataSubject=>{
      res.render('editteacher',{dataTeacher:dataTeacher,dataSubject:dataSubject})
      // res.send(dataSubject)
    })
  })
})
// router.get('/edit/:id',(req,res)=>{
//   model.Subject.findAll({
//     where:{id:req.params.id}
//   })
//
//   //pertama findbyid teacher,trus findall
//   .then(dataSubject=>{
//     res.render('editteacher',{dataTeacher:dataTeacher[0]})
//   })
// })

router.post('/edit/:id',(req,res)=>{
  model.Teacher.update({
    first_name:req.body.first_name,
    last_name:req.body.last_name,
    email:req.body.email,
    SubjectId:req.body.SubjectId
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
