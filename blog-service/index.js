const express = require('express');
const app = express();
app.use(express.json());

app.post('/login', (req, res) => {
  res.json({ message: 'Login successful' });
});

app.listen(3002, () => console.log('Blog service on port 3002'));
