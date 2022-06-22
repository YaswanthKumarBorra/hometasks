const express = require('express');


const router = express.Router();
const users = require('../data/data').users;

const { reqMethod, reqUrl, validate } = require('../middlewares/middleware');

const user_GetRequest_By_Id = (req, res) => {
    const id = req.params.id;
    console.log(req.params);
    const result = users.find((user) => user.id === id);
    console.log(result);
    if (result && !result.isDeleted) {
        res.send(result);
    } else {
        res.send('User not Found!');
    }
};

const createUser = (req, res) => {
    const data = req.body;
    users.push(data);
    res.send({ message: 'New User created' });
};

const update_UserRequest = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    const position = users.findIndex((user) => user.id === id);

    if (position !== -1) {
        users[position] = data;
        res.statusCode = 200;
        res.send({ message: 'Successfully Updated the user' });
    } else {
        res.statusCode = 404;
        res.send({ message: 'Unable to find the user' });
    }
};

const delete_UserRequest = (req, res) => {
    const id = req.params.id;
    const position = users.findIndex((user) => user.id === id);
    if (position !== -1) {
        users[position].isDeleted = true;
        res.statusCode = 200;
        res.send({ message: 'Successfully Deleted User data' });
    } else {
        res.statusCode = 404;
        res.send({ message: 'Unable to find the user' });
    }
};

const user_GetReq = (req, res) => {
    const result = users.filter(user => !user.isDeleted);
    console.log(result);
    res.send(result);
};

const auto_suggest_users = (req, res) => {
    const { loginSubstring = '', limit = 10 } = req.query;
    const list = users
        .filter(user => user.login.includes(loginSubstring) && !user.isDeleted)
        .sort((user1, user2) => user1.login.localeCompare(user2.login))
        .slice(0, limit);
    res.send(list);
};

const AnyOtherRequest  = (req, res) => {
    res.status(404).send('Error');
};


const validation = require('../src/validation');

router.get('/getUser/:id', reqMethod, reqUrl, user_GetRequest_By_Id);
router.get('/fetchUsers', reqMethod, reqUrl, user_GetReq);
router.post('/createUser', reqMethod, reqUrl, validate(validation.person), createUser);
router.put('/updateUser/:id', reqMethod, reqUrl, validate(validation.person), update_UserRequest);
router.delete('/deleteUser/:id', reqMethod, reqUrl, delete_UserRequest);
router.get('/autosuggest', reqMethod, reqUrl, auto_suggest_users);
router.use('/*', reqMethod, reqUrl, AnyOtherRequest);

module.exports = {
    router
};
