// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import jsonwebtoken from 'jsonwebtoken';
import mongoClient from'../../api-lib/db/mongodb'
const { sign, decode, verify } = jsonwebtoken;
export default async function loginHandler(req, res) {
    var mongoclnt=await mongoClient
    var token;
    const collectionName = 'Budget';
    const userId=req.query.q;
    console.log(req.query.q)
    //console.log(mongoclnt);
    if(req.method==='GET'){
        var db=mongoclnt.db();
        var userRecord=await db.collection('user').find({'userId':userId}).toArray();
        //console.log(userRecord);
        token=sign({userId:req.query.q  }, 'newPassword')
    }

    res.status(200).json({ name: req.query.q,Token:token })
  }
  