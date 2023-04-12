const { packageSchema } = require("./schema");
const { reviewScheama } = require("./schema");
const passport = require("passport");
const package = require("./models/packageSchema");

const isLoggedIn = (req, res, next) => {
  // console.log(req.originalUrl);

  if (!req.isAuthenticated()) {
    req.flash("error", "you need to login first");
    return res.redirect("/login");
  }
  next();
};

const validateProduct = (req, res, next) => {
  const { name, img, price, desc } = req.body;
  const { error } = packageSchema.validate({ name, img, price, desc });

  if (error) {
    const msg = error.details.map((err) => err.message).join(",");
    return res.render("error", { err: msg });
  }
  next();
};

const validateReview = (req, res, next) => {
  const { rating, comment } = req.body;
  const { error } = reviewScheama.validate({ rating, comment });

  if (error) {
    const msg = error.details.map((err) => err.message).join(",");
    return res.render("error", { err: msg });
  }
  next();
};

const isSeller = (req, res, next) => {
  if (!req.user.role) {
    req.flash("error", "you donot have the permission to do that");
    return res.redirect("/packages");
  } else if (req.user.role !== "seller") {
    req.flash("error", "you donot have the permission to do that");
    return res.redirect("/packages");
  }
  next();
};

const isProductAuthor = async (req, res, next) => {
  //to get the id of thatparticular product
  let { id } = req.params;
  const package = await Package.findById(id);
  console.log(package.author);
  console.log(req.user);
  if (!package.author.equals(req.user._id)) {
    req.flash("error", "you donot have the permission to do that");
    return res.redirect(`/package/${id}`);
  }
  next();
};

module.exports = {
  validateProduct,
  validateReview,
  isLoggedIn,
  isSeller,
  isProductAuthor,
};
