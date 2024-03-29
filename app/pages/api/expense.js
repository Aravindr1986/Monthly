import mongoClient from'../../api-lib/db/mongodb'
import validateToken from'../../api-lib/auth/authorization'

export default async function expenseHandler(req, res) {

const token = req.headers.authorization;

     // Validate the token using the function from the auth module
    if (!validateToken(token)) {
        return res.status(401).json({ error: 'Unauthorized - Missing or Invalid token' });
    }
   
    var mongoclnt=await mongoClient
    const collectionName = 'expense';
    var insertedExpense;
    if(req.method==='POST'){
        console.log(req.body)
        req.body.Amount=parseFloat(req.body.Amount)
        req.body.expenseDate=new Date(req.body.expenseDate);
        req.body.createdDate=new Date();    //adding created date
        var db=mongoclnt.db('BUDGET-DB');
        insertedExpense= await db.collection(collectionName).insertOne(req.body);       
    }
    res.status(200).json(insertedExpense)
  }
  