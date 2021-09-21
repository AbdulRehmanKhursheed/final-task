const jwt = require("jsonwebtoken");

module.exports= function (req:any,res:any,next:any){
    console.log('in auth');
    const newtoken=req.header('Authorization');
    const token = newtoken && newtoken.split(' ')[1];
    if(!token) return res.send(401);
    try{
        const decoded=jwt.verify(token,'[jwtPrivateKey]');
        res.locals.dataa=decoded;
        next();
    }
    catch(ex){
        res.status(400).send("Invalid token.");
    }
}