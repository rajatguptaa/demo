const { Session } = require('express-session');
const Customers = require('../models/Customers');
const Deals = require('../models/Deals');
const ProductInventory = require('../models/ProductInventory');
const { Op } = require('sequelize')


exports.homePage = (req, res, next) => {
	res.render('home');
};

exports.test = (req, res, next) => {
	return res.status(200).json({ "result":true });
};

exports.createDeal = async (req, res) => {
	try {
		const bodyParam = req.body;
		console.log('bodyParam',bodyParam,req.body)
		if (bodyParam.price > 0 && bodyParam.inventory > 0 && bodyParam.startTime != "" && bodyParam.endTime != "") {
			const result = await Deals.create({
				deal_name: "test",
				inventory:bodyParam.quantity,
				start_time:bodyParam.startTime,
				end_time:bodyParam.endTime,
				status: 1
			})
			return res.status(200).json({ "result11":result });
		}
	} catch(error) {
		console.log('error',error)
		return res.status(500).json({ "result":false,message: "something goes wrong" });
	}
	
};



exports.endDeal = async (req, res) => { 
	try {
		const bodyParam = req.body;
		console.log('bodyParam',bodyParam,req.body)
		if (bodyParam.dealId != "" ) {
			
			const result = await Deals.update({
				status: 0
			},{ where: {id: bodyParam.dealId} })
			
			return res.status(200).json({ "result11":result });
		}
	} catch(error) {
		console.log('error',error)
		return res.status(500).json({ "result":false,message: "something goes wrong" });
	}
}


exports.claimDeal = async (req, res) => { 
	try {
		const bodyParam = req.body;
		console.log('bodyParam',bodyParam,req.body)
		if (bodyParam.productId != "" && bodyParam.userId != "") {
			
			const resp = await Deals.findOne({ where: {product_id: bodyParam.productId, start_time : {[Op.lte]: new Date()},end_time : {[Op.gte]: new Date()} }});
			if(resp){
				const productId = JSON.parse(JSON.stringify(resp))
				console.log('productId',productId)
				const customerCheck = await Customers.findOne({ where: {deal_id: productId.id,customer_id: bodyParam.userId} });
				console.log('customerCheck',customerCheck)
				const currentDateTime = new Date();
				dt1 = new Date(productId.start_time);
				console.log('dt1',dt1)
				if(customerCheck) {
					return res.status(200).json({ "message":"you have already availed the deal" });
				}
				if(productId) {
					const dealUpdate = await Deals.update({
						inventory: productId.inventory - 1
					},{ where: {id: productId.id} })
					if(dealUpdate) {
						const customerUpdate = await Customers.update({
							deal_id: productId.id
						},{ where: {customer_id: bodyParam.userId} })
					}
				}
				
				return res.status(200).json({ "result11":productId });
			}else {
				return res.status(200).json({ "message":"Deal is either closed or products is out of stock" });
			}
		}
	} catch(error) {
		console.log('error',error)
		return res.status(500).json({ "result":false,message: "something goes wrong" });
	}
}