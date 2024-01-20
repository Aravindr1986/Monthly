import mongoClient from "../../api-lib/db/mongodb";
import validateToken from'../../api-lib/auth/authorization'
export default async function aggregateHandler(req, res) {
  const token = req.headers.authorization;
  if (!validateToken(token)) {
    return res.status(401).json({ error: 'Unauthorized - Missing or Invalid token' });
}
  var mongoclnt = await mongoClient;
  const collectionName = "expense";
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
