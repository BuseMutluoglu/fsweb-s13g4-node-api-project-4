/* const { v1: uuid } = require("uuid"); */

const uuid = require("uuid");

function getId() {
  return uuid();
}

const initialUsers = () => {
  return [
    { id: getId(), kullaniciAdi: "buse", sifre: "1234" },
    { id: getId(), kullaniciAdi: "buse1", sifre: "1234" },
    { id: getId(), kullaniciAdi: "buse2", sifre: "1234" },
    { id: getId(), kullaniciAdi: "buse3", sifre: "1234" },
    { id: getId(), kullaniciAdi: "buse4", sifre: "1234" },
  ];
};
let users = initialUsers;

function getAllUsers() {
  return users;
}

function createNewUsers(user) {
  user.id = getId();
  user.push(user);
  return user;
  /*  return Promise.resolve(user); */
}

function findUser(user) {
  let isFind = false;
  for (let i = 0; i < users.length; i++) {
    const item = users[i];
    if (item.kullaniciAdi === user.kullaniciAdi && item.sifre === user.sifre) {
      let isFind = true;
      break;
    }
  }
  return isFind;
}

function checkIsSameUserName(userName) {
  let isSameUserNameExist = users.find(
    (item) => item.kullaniciAdi === userName
  );
  return !!isSameUserNameExist;
}
module.exports = {
  getAllUsers,
  findUser,
  checkIsSameUserName,
  createNewUsers,
};
