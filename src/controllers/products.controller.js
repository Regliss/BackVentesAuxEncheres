const Product = require('../models/product.model');
const Category = require('../models/category.model');

exports.create = (req, res) => {
  const product = new Product({
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    image: req.body.image,
    category: req.body.category,
    dateStart: req.body.dateStart,
    dateEnd: req.body.dateEnd,
  });

  product
    .save()
    .then((data) => {
      res.send({
        product: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        error: 500,
        message: err.message || 'some error occured while creating a new user',
      });
    });
};

exports.getProduct = (req, res) => {
  Product.findById(req.params.id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Product with id ${req.params.id} not found`,
        });
      }
      res.send(data);
    })
    .catch((err) => res.send(err));
};

exports.getProducts = (req, res) => {
  Product.find()
  .populate('category')
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Product with id ${req.params.id} not found`,
        });
      }
      res.send(data);
    })
    .catch((err) => res.send(err));
};

exports.phoneGetProducts = (req, res) => {
  Product.find()
  .populate('category')
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Product with id ${req.params.id} not found`,
        });
      }
      const recordsArray = []; 
      data.forEach((product) => {
        const fields = {"fields": product};
        recordsArray.push(fields);
      });
      const records = {"records": recordsArray};
      // res.send(Object.assign({},data));
      res.send(records);
    })
    .catch((err) => res.send(err));
};

exports.update = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.id },
        {
        title: req.body.title,
    		price: req.body.price,
    		description: req.body.description,
    		image: req.body.image,
    		category: req.body.category,
    		dateStart: req.body.dateStart,
    		dateEnd: req.body.dateEnd,
        }
    )
    .then((data) => {
        res.json({
            message :" produit modifier",
            data: data
        });
    }).catch((err) => {
        console.log(err.message);
    })
};

exports.removeOne = (req, res) => {
	Product.findByIdAndRemove(req.params.id)
	.then((data) => {
		// if (!data) {
		// 	res.status(404).send({
		// 		message: `Product with id ${req.params.id} not found`
		// 	})
		// }
		res.send(data);
	})
	.catch((err) =>	res.send(err));
}