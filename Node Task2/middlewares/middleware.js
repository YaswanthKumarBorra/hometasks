const reqMethod = (req, res, next) => {
    console.log(`Request Method:${req.method}`);
    next();
};

const reqUrl = (req, res, next) => {
    console.log(`Request URL:${req.url}\n`);
    next();
};

const validate = (schema) => (req, res, next) => {
    const {
        error
    } = schema.validate(req.body);
    if (error) {
        res.status(422).send(error.details[0].message);
        return;
    }
    next();
};


module.exports = {
    reqMethod,
    reqUrl,
    validate
};
