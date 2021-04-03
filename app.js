const config = require('./config.json');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const path = require('path');
const cors = require('cors');
const fileUpload = require('express-fileupload');
require('colors');
const serverRoutes = require('./routes/serverRoutes');
const { errorHandler, notFoundHandler } = require('./middleware/errorHandler');

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(fileUpload());

app.use(express.static(path.join(__dirname, '/public')));
app.use(helmet());

app.use(express.json());

app.use('/', serverRoutes);
app.use(notFoundHandler);

app.use(errorHandler);

const PORT = config.port ?? 5000;

app.listen(PORT);
