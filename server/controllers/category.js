
const db = require('../model/index');

module.exports = {
  getAll: async (req, res) => {
    try {
      const category = await db.Category.findAll({});
      res.status(200).send(category);
    } catch (error) {
      throw error;
    }
  },
  postCategory: async (req, res) => {
    try {
      const category = await db.Category.create(req.body);
      res.status(201).send(category);
    } catch (error) {
      throw error;
    }
  },
  updateCategory: async (req, res) => {
    try {
      const category = await db.Category.update(req.body, {
        where: { id: req.params.id },
      });

      res.status(201).send(category);
    } catch (error) {
      throw error;
    }
  },
  deletecategory: async (req, res) => {
    try {
      const category = await db.Category.destroy({
        where: { id: req.params.id },
      });

      res.json(category);
    } catch (error) {
      throw error;
    }
  },
};
