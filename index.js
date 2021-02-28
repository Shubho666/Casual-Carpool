const express =require('express');
const app=express();
const bitches = [
  { id: 1, name: "shubho" },
  { id: 2, name: "tanmoy" },
  { id: 3, name: "shuvro" },
];
app.get('/',(req,res)=>{
    res.send('Hello Bitches!!!');
});

app.get('/bitches',(req,res)=>{
    res.send(bitches);
});

app.get('/bitches/:id',(req,res)=>{
    const bitch = bitches.find(o => o.id === parseInt(req.params.id));
    if (!bitch) res.status(404).send('BITCH in the MAKING!!');
    res.send(bitch.name);
});


const port = process.env.PORT || 6969
app.listen(port, () => console.log(`Listening on port ${port}...`));