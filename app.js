const express = require('express');
const cors = require('cors');
const aiRoutes = require('./routes/aiRoutes');
const tradeRoutes = require('./routes/tradeRoutes');
const securityRoutes = require('./routes/securityRoutes');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/ai', aiRoutes);
app.use('/trade', tradeRoutes);
app.use('/security', securityRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
