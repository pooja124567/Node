export const ageVerify = (req, res, next) => {
  const {age} = req.body;
  if(age < 18) {
      res.json({message : "You are not eligible"});

      
  }else{
      next();
  }
}