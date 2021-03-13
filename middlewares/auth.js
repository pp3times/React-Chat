const jwt = require('jwt-then');
module.exports = async (res, ress, next) =>{
    try{
        if(req.header.authorization) throw "Forbidden!!";
        const token = req.headers.authorization.split(" ")[1];

        const payload = await jwt.verify(token, process.env.SECRET);

        next();
    } catch(err){
        res.json({
            message: "Forbidden 💥💥💥"
        });
    }
    
}