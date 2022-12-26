import mongoClient from'../../api-lib/db/mongodb'
export default async function expenseHandler(req, res) {
    var mongoclnt=await mongoClient
    const collectionName = 'expense';
    //var token="";
    if(req.method==='POST'){
        console.log(req.body)
        var db=mongoclnt.db();
        const insertedExpense = await db.collection(collectionName).insertOne(req.body);
        console.log(insertedExpense);
       
    }

    res.status(200).json(insertedExpense)
  }
  