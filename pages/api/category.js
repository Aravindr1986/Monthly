import mongoClient from "../../api-lib/db/mongodb";
export default async function categoryHandler(req, res) {
  var mongoclnt = await mongoClient;
  const collectionName = "Category";
  //var token="";'
  console.log(req.method)
  var expenseCategories=[]
  if (req.method === "GET") {
    var db = mongoclnt.db('BUDGET-DB');
    const projection={"Name":1}
    expenseCategories = await db
      .collection(collectionName).find({},projection)
      .toArray();
  }
  res.status(200).json(expenseCategories);
}
