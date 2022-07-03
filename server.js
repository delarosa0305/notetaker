const fs = require('fs');
const path = require('path');
const express = require('express');
const { note } = require('./db/db.json');
const PORT = process.env.PORT || 3001;
const app = express();

app.get('/', (req,res) => {
    res.sendFile(path)
})

app.listen(PORT, () => {
    console.log(`API server now on ${PORT}`);
});