import express from "express";
import mongoose from "mongoose";
import routerProduct from "./routes/products";
//Khoi tao
const app = express()
app.use(express.json())
app.use("/api", routerProduct)
mongoose.connect("mongodb://127.0.0.1:27017/we17306")
export const viteNodeApp = app;