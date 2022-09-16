const errorHandler = (err, req, res, next) => {
    console.log("Error Message: \n", err.stack);
    const status = res.statusCode ? res.statusCode : 500;
    res.status(status).json({
        error: err.message,
    });
};

module.exports = errorHandler;
