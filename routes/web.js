const express = require('express');
const router = express.Router();
const HomeController = require('../app/controllers/HomeController');
const AuthController = require('../app/controllers/AuthController');

router.get('/test', HomeController.test);
router.post('/deal', HomeController.createDeal);
router.post('/deal/claim', HomeController.claimDeal);
router.post('/deal/end', HomeController.endDeal);
router.get('/login', AuthController.loginPage);
router.get('/check', AuthController.check);
router.post('/login', AuthController.login);
router.post('/logout', AuthController.logout);
router.get('/sign-up', AuthController.signUpPage);
router.post('/sign-up', AuthController.signUp);
router.get('/forgot-password', AuthController.forgotPasswordPage);
router.post('/forgot-password', AuthController.forgotPassword);

module.exports = router;