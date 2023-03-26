const model = require("./user-model");

function logger(req, res, next) {
  const method = req.method;
  const url = req.originalUrl;
  const timestamp = newDate().toLocalString();
  console.log(`${timestamp}--${method}--${url}`);
  next();
}

function checkedSameUserName(req, res, next) {
  try {
    const { kullaniciAdi } = req.body;
    const isSame = !!kullaniciAdi && model.checkIsSameUserName(kullaniciAdi);
    if (isSame) {
      res.status(400).json({ message: "Bu kullanıcı adı kullanılıyor" });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
}

function validateNewUser(req, res, next) {
  try {
    const { kullaniciAdi, sifre } = req.body;
    if (!kullaniciAdi || !sifre) {
      res.status(400).json({ message: "Kullanıcı adı ve şifreyi doldurunuz" });
    } else {
      req.user = { kullaniciAdi: kullaniciAdi, sifre: sifre };
    }
    next();
  } catch (error) {
    next(error);
  }
}

function isValidUser(req, res, next) {
  try {
    let user = { kullaniciAdi: req.body.kullaniciAdi, sifre: req.body.sifre };
    const isExist = model.findUser(user);
    if (!isExist) {
      res.status(404).json({ message: "Böyle bir kullanıcı yok" });
    }
    next();
  } catch (error) {
    next(error);
  }
}
module.exports = {
  logger,
  validateNewUser,
  checkedSameUserName,
  isValidUser,
};
