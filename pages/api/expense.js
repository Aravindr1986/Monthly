import react from 'react';
import mongoClient from'../../api-lib/db/mongodb'
import validateToken from'../../api-lib/auth/auth'

export default async function expenseHandler(req, res) {

const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized - Missing token' });
  }

  // Validate the token using the function from the auth module
    if (!validateToken(token)) {
        return res.status(401).json({ error: 'Unauthorized - Invalid token' });
    }
   
    var mongoclnt=await mongoClient
    const collectionName = 'expense';
    var insertedExpense;
    if(req.method==='POST'){
        console.log(req.body)
        req.body.Amount=parseFloat(req.body.Amount)
        req.body.expenseDate=new Date(req.body.expenseDate);
        var db=mongoclnt.db('BUDGET-DB');
        insertedExpense= await db.collection(collectionName).insertOne(req.body);
        console.log(insertedExpense);
       
    }
    res.status(200).json(insertedExpense)
  }
  