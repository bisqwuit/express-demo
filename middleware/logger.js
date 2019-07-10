function log(req, res, next)  {
    console.log('Loggin...');
    next(); // To pass control to the next middleware function in the pipeline
}

module.exports = log;