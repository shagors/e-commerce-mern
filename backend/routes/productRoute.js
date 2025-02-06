import express from "express";
import {
  addProduct,
  listProducts,
  singleProduct,
  removeProduct,
} from "../controllers/productController.js";
import upload from "../middleware/multer.js";

const productRouter = express.Router();

productRouter.post(
  "/add",
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addProduct
);
productRouter.get("/lists", listProducts);
productRouter.get("/single/:id", singleProduct);
productRouter.post("/remove/:id", removeProduct);

export default productRouter;
