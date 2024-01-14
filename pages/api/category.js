import mongoClient from "../../api-lib/db/mongodb";
export default async function categoryHandler(req, res) {
  var mongoclnt = await mongoClient;
  const collectionName = "Category";
  //var token="";'
  console.log(req.method)
  var expenseCategories=[]
  if (req.method === "GET") {
    var db = mongoclnt.db('BUDGET-DB');
    expenseCategories = await db
      .collection(collectionName).find({})
      .toArray();
  }
  console.log(expenseCategories)
  res.status(200).json(expenseCategories);
}
