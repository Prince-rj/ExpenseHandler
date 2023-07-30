import  Express from "express";
import cors from 'cors';
import bodyparser from 'body-parser';
import mongoose from 'mongoose';
mongoose.connect('mongodb://127.0.0.1:27017/data');
const Expense = mongoose.model('Expense', { 
    id: Number,
    name: String,
    date: Date,
    price: Number

});



const app=Express();

app.use(cors());


app.use(bodyparser.json());

app.post('/data',(req,res)=>{
    let ExpenseData=req.body;
    res.json(req.body);
    const Expensetmp = new Expense({ 
        id: ExpenseData.id,
        name: ExpenseData.name,
        date: ExpenseData.date,
        price: ExpenseData.price
     });
    
    
    Expensetmp.save().then(() => console.log('meow'));
});

app.get('/data',async (req,res)=>{
   const docs= await Expense.find({});
   let expenses=[];
//    console.log(docs)
   for(let i=0;i<docs.length;i++){
    // console.log(i);
    var d=new Date(docs[i].date).toISOString().split('T')[0];
    const exp={
        id:docs[i].id,
        name: docs[i].name,
        date:d,
        price: docs[i].price
       }
       expenses=[exp,...expenses];
   }
   console.log(expenses);
   res.json(expenses);
})






app.listen(5000,()=>{console.log("started")});