const express = require('express');
const app = express();
const port = 3000;

const router = require('./route');

app.use(express.json());

app.use('/api', router);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
