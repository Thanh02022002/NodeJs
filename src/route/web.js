import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", homeController.getHomePage);
    router.get("/about", homeController.getAboutPage);
    router.get("/crud", homeController.getCRUD);

    router.post("/post-crud", homeController.postCRUD);

    router.get("/vuthanh", (req,res)=>{
        return res.send('Hello world with VuThanh');
    });

    return app.use("/", router);
}

module.exports = initWebRoutes;