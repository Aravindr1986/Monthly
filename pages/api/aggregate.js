import mongoClient from "../../api-lib/db/mongodb";
export default async function aggregateHandler(req, res) {
  var mongoclnt = await mongoClient;
  const collectionName = "expense";
  //var token="";
  var aggregatedExpense;
  if (req.method === "GET") {
    var db = mongoclnt.db("BUDGET-DB");
    var date = new Date();
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    aggregatedExpense = await db
      .collection(collectionName)
      .aggregate([
          { $match: { expenseDate: { $gte: firstDay ,
                                    $lte:lastDay  } 
        } },
        { $group: { _id: "$expenseType", total: { $sum: "$Amount" } } },
      ])
      .toArray();
  }
  res.status(200).json(aggregatedExpense);
}
