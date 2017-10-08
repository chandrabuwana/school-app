const express=require('express')
const router=express.Router()
const model=require('../models')

router.get('/',(req,res)=>{
  model.Subject.findAll({
    include:[{model:model.Teacher}]
  })
  .then(dataSubject=>{
// res.render('subject',{dataSubject:dataSubject})
    res.send(dataSubject[0].Teachers)
  })
  .catch(err=>{
    res.send(err)
  })
})

module.exports = router;
