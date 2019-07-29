const bcrypt = require('bcryptjs');
const isEmpty = require("./is-empty.js")

module.exports = function hashData(data) {

    const createPromise = new Promise(
        function (resolve, reject) {
            let payload = {};
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(data, salt, (err, hash) => {
                    if (err) throw err;
                    payload = hash;
                });
            });
            if (payload != {}) {
                resolve(payload);
            }
            else {
                reject(Error("It broke"));
            }
        }
    );
    createPromise
    .then(result => {return result})
    .catch(error => error) 
}