const express = require("express");
const router = express.Router();
const {
  getAll,
  postProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product");

// router.get("/", test=(req,res)=>{
//   res.send('test')
// });

router.get("/get", getAll);
router.post("/post", postProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;