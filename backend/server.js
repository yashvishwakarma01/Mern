const app=require('./app');
const cors=require('cors');
// const dotenv=require('dotenv');
// dotenv.config({path:"./backend/config/config.env"})


// const bodyParser=require('body-parser');

// app.use(bodyParser.urlencoded({extended:false}))
const PORT=process.env.PORT || 3000
app.use(cors({
    origin:"*",
}));

app.listen(PORT,(err)=>{
    if(err){
        console.log(err)
    }
    console.log(`Server is working on http://localhost:${PORT}`);
})