import mongoClient from'../../api-lib/db/mongodb'
export default async function expenseHandler(req, res) {
    var mongoclnt=await mongoClient
    const collectionName = 'expense';
    //var token="";
    var insertedExpense;
    if(req.method==='POST'){
        console.log(req.body)
        req.body.Amount=parseFloat(req.body.Amount)
        var db=mongoclnt.db();
        insertedExpense= await db.collection(collectionName).insertOne(req.body);
        console.log(insertedExpense);
       
    }
    res.status(200).json(insertedExpense)
  }
  