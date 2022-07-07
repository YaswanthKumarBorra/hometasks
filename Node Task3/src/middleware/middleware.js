import { schema } from '../schema/schema';

export const validateUser = (req, res, next) => {
    const user = req.body;
    const { error } = schema.validate(user);
    if (error) {
        res.status(400).json({ message: error.details[0].message });
        return;
    }
    next();
};
