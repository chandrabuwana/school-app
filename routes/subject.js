const express=require('express')
const router=express.Router()
const model=require('../models')

router.get('/',(req,res)=>{
  model.Subject.findAll()
  .then(dataSubject=>{
    // res.send(dataSubject)
    res.render('subject',{dataSubject:dataSubject})
  })
  .catch(err=>{
    res.send(err)
  })
})

module.exports = router;
