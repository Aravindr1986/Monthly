// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import jsonwebtoken from 'jsonwebtoken';
import mongoClient from'../../api-lib/db/mongodb'
const { sign, decode, verify } = jsonwebtoken;
export default async function loginHandler(req, res) {
    var mongoclnt=await mongoClient
    
    const collectionName = 'Budget';
    console.log(req.query.q)
    //console.log(mongoclnt);
    var token="";
    if(req.method==='GET'){
        var db=mongoclnt.db();
        console.log(db)
        var userRecord=await db.collection('user').find({'username':'ramachandran.aravind@gmail.com'}).toArray();
        console.log(userRecord);
        token=sign({userId:req.query.q  }, 'newPassword')
    }

    res.status(200).json({ name: req.query.q,Token:token })
  }
  