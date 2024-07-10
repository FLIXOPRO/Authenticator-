const express = require('express');
const app = express();
const port = 3000;

let verificationCode = generateRandomCode();

// Generate a new code every 60 seconds
setInterval(() => {
  verificationCode = generateRandomCode();
}, 60000);

// Serve static files
app.use(express.static('public'));

// Endpoint to get the current verification code
app.get('/code', (req, res) => {
  res.json({ code: verificationCode });
});

// Function to generate a random 6-digit code
function generateRandomCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
