const { createLogger, transports, format, config } = require('winston');
const Transport = require('winston-transport');
const logform = require('logform');
const { combine, timestamp, label, printf } = logform.format;

console.log(logform.format === format)

const logger = createLogger({
    levels: config.syslog.levels,
    format: combine(
        timestamp(),
        printf(nfo => {
            return `${nfo.timestamp}: ${nfo.level}: ${nfo.message}`;
        })
    ),
    transports: [
        new transports.Console(),
        new transports.File({ filename: process.cwd() + '/tests/logs/logs.log' })
    ],
    exceptionHandlers: [
        new transports.File({ filename: process.cwd() + '/tests/logs/exceptions.log' })
    ]
});

module.exports = logger;