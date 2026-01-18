const auth = (req,res,next)=>{
    console.log('auth middlewhere')
const token = '123'
const admineAuthorize = token === '123e'
    if(!admineAuthorize){
     return   res.status(401).send('unauthorize')
    }else{
        next()
    }
}


const userauth = (req,res,next)=>{
    console.log('auth middlewhere')
const token = '123'
const admineAuthorize = token === '123'
    if(!admineAuthorize){
     return   res.status(401).send('unauthorize')
    }else{
        next()
    }
}

module.exports = {auth,userauth}