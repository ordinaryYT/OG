const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Set view engine for EJS-like template rendering
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// Serve static files
app.use(express.static(__dirname));

// Main route with environment variables
app.get('/', (req, res) => {
    // Pass environment variables to the template
    res.render('index.html', {
        env: process.env
    });
});

app.listen(PORT, () => {
    console.log(`OG Website running on port ${PORT}`);
});
