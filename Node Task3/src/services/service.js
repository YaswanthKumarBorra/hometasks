import Db from '../data-access/dbAccess';
export default class Service {
    static getUser(id) {
        return new Promise((resolve, reject) => {
            Db.getUserById(id).then(u => {
                if (u) {
                    resolve(u);
                } else {
                    reject({ 'message': 'User not found!!' });
                }
            }).catch(err => {
                reject(err);
            });
        });
    }

    static createUser(u) {
        return new Promise((resolve, reject) => {
            const { login, password, age } = u;
            Db.createUser(login, password, age).then(newUser => {
                if (newUser) {
                    resolve(newUser);
                } else {
                    reject({ 'message': 'Unable to create User' });
                }
            }).catch(err => {
                reject(err);
            });
        });
    }

    static deleteUser(id) {
        return new Promise((resolve, reject) => {
            Db.removeUser(id).then(result => {
                if (result[0] === 1) {
                    resolve({ 'message': 'User Deleted' });
                } else {
                    reject({ 'message': 'Unable to delete user' });
                }
            }).catch(err => {
                reject(err);
            });
        });
    }

    static updateUser(id, u) {
        return new Promise((resolve, reject) => {
            const { login, password, age } = u;
            Db.updateUser(id, login, password, age).then(result => {
                if (result[0] === 1) {
                    resolve({ 'message': 'Sucessfully user updated' });
                } else {
                    reject({ 'message': 'Unable to update User' });
                }
            }).catch(err => {
                reject(err);
            });
        });
    }

    static autoSuggestUsers(loginSubstring, limit) {
        return new Promise((resolve, reject) => {
            Db.autoSuggest(loginSubstring, limit).then(users => {
                resolve(users);
            }).catch(err => {
                reject(err);
            });
        });
    }

    static getUsers() {
        return new Promise((resolve, reject) => {
            Db.getUsers().then(allUsers => {
                resolve(allUsers);
            }).catch(err => {
                reject(err);
            });
        });
    }
}
