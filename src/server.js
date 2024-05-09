const express = require('express');
const { app } = require(".");
const { connectDb } = require("./config/db");
const cors=require('cors');

app.use(cors())


const PORT = 5454;
app.listen(PORT, async () => {
  await connectDb();
  console.log("ecommerce api listening on port ", PORT);
});
