const express= require('express')
const router=express.Router()
const model=require('../models')

function cekSession(req, res, next){
  if(req.session && req.session.hasOwnProperty('username') && req.session.hasOwnProperty('role')){
    next()
  }else{
    res.redirect('/login')
  }
}

router.get('/', cekSession, function (req, res) {
  // res.send('Hello World!')
  // res.render('index')
  model.User.findAll()
  .then(dataUser=>{
    // console.log(dataUser);
    let sess = req.session
    res.render('index',{dataMenu:`${sess.role}`,dataUser:dataUser})
  })
})

router.get('/logout',(req,res)=>{
  req.session.destroy(err => {
    if(!err){
      res.redirect('/login')
    }else{res.send(err)}
  })
})


module.exports = router;
