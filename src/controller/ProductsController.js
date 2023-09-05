const Cakes = require('../model/cake');

class ProductsController {
  async index(req, res, next) {
    await Cakes.find({})
      .then((cakes) => {
        cakes = cakes.map((cake) => cake.toObject());
        console.log('cakes', cakes);
        res.render('products', { cakes });
      })
      .catch(next);
  }
  async detail(req, res, next) {
    await Cakes.findOne({ slug: req.params.slug })
      .then((cakeDetail) => {
        const cake = cakeDetail.toObject();
        res.render('productDetail', { cake });
      })
      .catch(next);
  }
  //GET => create UI
  create(req, res, next) {
    res.render('productCreate');
  }

  //POST => submit form
  async store(req, res, next) {
    const cake = new Cakes(req.body);
    console.log('cake', cake);
    await cake.save();

    res.redirect('/products');
  }

  //GET product need edit
  async edit(req, res, next) {
    await Cakes.findById(req.params.id)
      .then((cakeDetail) => {
        const cake = cakeDetail.toObject();
        res.render('productUpdate', { cake });
      })
      .catch(next);
  }

  //PUT
  async update(req, res, next) {
    await Cakes.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        res.redirect('/products');
      })
      .catch(next);
  }

  //PUT
  async destroy(req, res, next) {
    console.log('deteled');
    await Cakes.findByIdAndDelete(req.params.id)
      .then(() => {
        res.redirect('back');
      })
      .catch(next);
  }
}

module.exports = new ProductsController();
