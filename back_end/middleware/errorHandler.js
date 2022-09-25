const errorHandler = (err, req, res, next) => {
    console.log("Error Message: \n", err);
    const status = res.statusCode ? res.statusCode : 500;
    res.status(status).json({
        error: err,
    });
};

module.exports = errorHandler;
