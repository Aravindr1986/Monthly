import mongoClient from'../../api-lib/db/mongodb'
export default async function aggregateHandler(req, res) {
    var mongoclnt=await mongoClient
    const collectionName = 'expense';
    //var token="";
    var aggregatedExpense;
    if(req.method==='GET'){
       var db=mongoclnt.db();
        aggregatedExpense= await db.collection(collectionName).aggregate([{$group:{_id:"$expenseType",total:{$sum:"$Amount"}}}]).toArray();
    }
    res.status(200).json(aggregatedExpense)
  }
  