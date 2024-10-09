const winston = require('winston');
const logger = winston.createLogger({
    level:'info',
    format:winston.format.combine(winston.format.json() , winston.format.timestamp()),
    transports:[new winston.transports.Console() ,new winston.transports.File({filename:'app.log'}) ]
});
module.exports = logger;