const express = require('express');
const router = require('../router/routecontroller').router;
const PORT = process.env.PORT || 4000;

const app = express();
app.use(express.json());

app.use(router);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
