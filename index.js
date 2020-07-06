const express = require('express');
const app = express();
const cors = require('cors');
const client = require('./connect');

app.use(cors());
app.use(express.json());

app.listen(5000, () => {
  console.log('server run on port 5000');
});

client.connect()
  .then(()=>console.log('connection success'))
  .catch(e=> console.error(e));

//create a hotdog
app.post('/hotdogs', async (req, res) => {
  try {
    console.log(req.body);
    const {description,name,price,photoUrl} = req.body;
    const newHotdog = await client.query(`INSERT INTO Hotdogs (name,photo_url,description,price) VALUES ($1,$2,$3,$4 )`,
      [name, photoUrl, description, price]
    );
    res.json(newHotdog)
  } catch (err) {
    console.error(err);
  }
});

//get all hotdogs

app.get("/hotdogs",  async (req, res)=>{
  try{
    const allRecords = await client.query("SELECT * FROM Hotdogs");
    await res.json(allRecords.rows)
  }
  catch(err){
    console.error(err.message)
  }

});

//get a hotdogs

app.get("/hotdogs/:id", async (req,res)=>{
  try{
    const {id} = req.params;
    const record = await client.query("SELECT * FROM Hotdogs WHERE hotdog_id=$1",[id]);
    await res.json(record.rows[0]);
  }
  catch(err){
    console.error(err.message);
  }

});

//update a hotdog

app.put("/hotdogs/:id", async (req, res) =>{
  try{
    const {id}= req.params;
    const {name,photo_url,description,price}  = req.body;
    const updateRecord = await client.query("UPDATE Hotdogs SET name = $1, photo_url = $2, description = $3, price = $4  WHERE hotdog_id = $5 ",
      [name,photo_url,description,price, id]);
    res.json(`success update hotdog with id ${id}`);
  }catch(err){
    console.error(err.message)
  }
});


//delete a hotdog

app.delete("/hotdogs/:id", async (req,res)=>{
  try{
    const {id} = req.params;
    const deleteRecord = await client.query("DELETE FROM Hotdogs WHERE hotdog_id = $1", [id]);
    res.json(`hotdog with id ${id} deleted`)
  }
  catch (err) {
    console.error(err.message);
  }
});

