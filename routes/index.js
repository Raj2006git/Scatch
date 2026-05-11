const express = require('express');
const router = express.Router();

const isloggedin = require("../middlewares/isLoggedIn");
const productModel = require("../models/product-model");
const userModel = require("../models/user-model");

router.get("/", (req, res) => {
    let error = req.flash("error");

    res.render("index", {
        error,
        loggedin: false
    });
});

router.get("/shop", async (req, res) => {
    try {
        const products = await productModel.find({});

        res.render("shop", {
            loggedin: true,
            products,
            success: req.flash("success")
        });

    } catch (err) {
        res.status(500).send("Error fetching products");
    }
});

router.get("/cart", isloggedin, async function (req, res) {
    let user = await userModel.findOne({ email: req.user.email }).populate("cart.product");
    res.render("cart", { user });
})

router.get("/addtocart/:id", isloggedin, async function (req, res) {

    let user = await userModel.findOne({
        email: req.user.email
    });
    let existingProduct = user.cart.find(item =>
        item.product.toString() === req.params.id
    );
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        user.cart.push({
            product: req.params.id,
            quantity: 1
        });
    }
    await user.save();
    req.flash("success", "Added to Cart");
    res.redirect("/shop");
});

router.get("/increase/:id", isloggedin, async function(req, res){
    let user = await userModel.findOne({
        email: req.user.email
    });
    let cartItem = user.cart.find(item => 
        item.product.toString() === req.params.id
    );
    if(cartItem){
        cartItem.quantity += 1;
    }
    await user.save();
    res.redirect("/cart");
});

router.get("/decrease/:id", isloggedin, async function(req, res){
    let user = await userModel.findOne({
        email: req.user.email
    });
    let cartItem = user.cart.find(item => 
        item.product.toString() === req.params.id
    );
    if(cartItem){
        cartItem.quantity -= 1;
        // Remove product if quantity becomes 0
        if(cartItem.quantity <= 0){

            user.cart = user.cart.filter(item =>
                item.product.toString() !== req.params.id
            );
        }
    }
    await user.save();
    res.redirect("/cart");
});

router.get('/account', isloggedin, async function(req, res){

    let user = await userModel
        .findOne({ email: req.user.email })
        .populate('cart.product');

    res.render('account', {
        user,
        loggedin: true
    });
});

router.get("/logout", isloggedin, function (req, res) {
    res.cookie("token", "");
    res.redirect("/");
});

module.exports = router;