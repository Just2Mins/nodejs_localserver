const express = require('express');
const app = express();


app.get('/',function(req,res){
    res.send('Hey Hello');
})



const PORT = process.env.PORT || 3000;

app.listen(PORT,function(){
    console.log('Server running');
})