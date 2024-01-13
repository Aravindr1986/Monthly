import mongoClient from "../../api-lib/db/mongodb";
export default async function categoryHandler(req, res) {
  var mongoclnt = await mongoClient;
  const collectionName = "category";
  //var token="";
  if (req.method === "GET") {
    var db = mongoclnt.db();
    expenseCategories = await db
      .collection(collectionName)
      .toArray();
  }
  res.status(200).json(expenseCategories);
}
