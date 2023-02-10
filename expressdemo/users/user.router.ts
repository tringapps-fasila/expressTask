import userController from './user.controller'
import express from 'express';
const router:express.Router = express.Router();

router.post("/",userController.createUser);
router.get("/",userController.getUser);
router.patch("/",userController.updateUser);
router.put("/",(req:express.Request,res:express.Response)=>{
    res.status(200).json({
        "message":"put method is used"
    })

})


export default router;