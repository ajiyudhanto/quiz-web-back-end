function errorHandler (err, req, res, next) {
    let error = []
    let statusCode = 500
    error.push(err)
    res.status(statusCode).json({ error })
}

module.exports = errorHandler