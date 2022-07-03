const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`API server now on ${PORT}`);
});

// http://localhost:3001/api/index