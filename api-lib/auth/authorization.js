// auth.js
function validateToken(token) {

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized - Missing token' });
      }
    //write validate logic
    return true; 
    
  }
  
  export default validateToken  