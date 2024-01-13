import mongoClient from "../../api-lib/db/mongodb";
export default async function categoryHandler(req, res) {
  var mongoclnt = await mongoClient;
  const collectionName = "category";
  //var token="";
  if (req.method === "GET") {
    var db = mongoclnt.db();
    aggregatedExpense = await db
      .collection(collectionName)
      .aggregate([
        { $match: { date: { $gte: ISODate("2019-05-01") } } },
        { $group: { _id: "$expenseType", total: { $sum: "$Amount" } } },
      ])
      .toArray();
  }
  res.status(200).json(aggregatedExpense);
}
