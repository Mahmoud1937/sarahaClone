const asyncHandler = function (fn) {
    return function (req, res, next) {
        fn(req, res, next).catch((error) => {
return next(new Error(error.message))

        })
    }

}

export default asyncHandler