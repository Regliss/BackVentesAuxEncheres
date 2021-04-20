const Category = require('../models/category.model');

exports.create = (req, res) => {
  const category = new Category({
    title: req.body.title,

  });

  category
    .save()
    .then((data) => {
      res.send({
        category: data,
      });
    })
    .catch((err) => res.send(err));
};

exports.getCategory = (req, res) => {
  Category.findById(req.params.id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Category with id ${req.params.id} not found`,
        });
      }
      res.send(data);
    })
    .catch((err) => res.send(err));
};

exports.getCategoryz = (req, res) => {
  Category.find()
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Category with id ${req.params.id} not found`,
        });
      }
      res.send(data);
    })
    .catch((err) => res.send(err));
};

exports.update = (req, res) => {
    Category.findOneAndUpdate(
        { _id: req.params.id },
        {
            title: req.body.title,
        }
    )
    .then((data) => {
        res.json({
            message :" suce ta mammouth",
            data: data
        });
    }).catch((err) => {
        console.log(err.message);
    })
};

exports.removeOne = (req, res) => {
	Category.findByIdAndRemove(req.params.id)
	.then((data) => {
		// if (!data) {
		// 	res.status(404).send({
		// 		message: `User with id ${req.params.id} not found`
		// 	})
		// }
		res.send(data);
	})
	.catch((err) =>	res.send(err));
};