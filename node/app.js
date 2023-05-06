const {loadUser} = require('./user_model');

const express = require('express');
const cors = require('cors');


const app = express();

const port = 5000;
app.use(cors());

app.listen(port,()=> console.log('server running..'));

app.get('/',(request,response)=>response.send('Welcome'));
app.get('/users',(request,response)=>{
    response.send(loadUser());
});
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 
  }
  
  app.use(cors(corsOptions));
  
