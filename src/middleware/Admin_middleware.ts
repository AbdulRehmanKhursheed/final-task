const jwtt = require("jsonwebtoken");

module.exports= function (req:any,res:any,next:any){
    console.log('in auth');
    const newtoken=req.header('Authorization');
    const token = newtoken && newtoken.split(' ')[1];
    if(!token) return res.send(401);
    try{
        const decoded=jwtt.verify(token,'[jwtPrivateKey]');
        req.user=decoded;
        if(req.user.admin){
            next();
        }
        else{
            return res.send(401);
        }
        
    }
    catch(ex){
        res.status(400).send("Invalid token.");
    }
}