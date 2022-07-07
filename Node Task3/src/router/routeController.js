import { Router } from 'express';
import { validateUser } from '../middleware/middleware';
import service from '../services/service';

export const router = Router();

const getUserById = (req, res) => {
    const { id } = req.params;
    service.getUser(id).then(user => {
        res.status(200).json(user);
    }).catch(err => {
        res.status(404).json(err);
    });
};

const getUsers = (req, res) => {
    service.getUsers().then(users => {
        res.json(users);
    }).catch(err => {
        res.status(500).json(err);
    });
};

const createUser = (req, res) => {
    const user = req.body;
    service.createUser(user).then(result => {
        res.json(result);
    }).catch(err => {
        res.status(404).json(err);
    });
};

const updateUser = (req, res) => {
    const { id } = req.params;
    const user = req.body;
    service.updateUser(id, user).then(result => {
        res.json(result);
    }).catch(err => {
        res.status(404).json(err);
    });
};


const deleteUser = (req, res) => {
    const { id } = req.params;
    service.deleteUser(id).then(result => {
        res.json(result);
    }).catch(err => {
        res.status(404).json(err);
    });
};

const autoSuggestUsers = (req, res) => {
    const { loginSubstring, limit } = req.params;
    service.autoSuggestUsers(loginSubstring, limit).then(users => {
        res.json(users);
    }).catch(err => {
        res.status(404).json(err);
    });
};

router.get('/getUser/:id', getUserById);
router.get('/getUsers', getUsers);
router.post('/createUser', validateUser, createUser);
router.delete('/deleteUser/:id', deleteUser);
router.put('/updateUser/:id', validateUser, updateUser);
router.get('/getAutoSuggestUsers/:loginSubstring/:limit', autoSuggestUsers);
