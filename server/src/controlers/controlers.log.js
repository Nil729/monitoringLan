import model_log from "../models/model.log"

export const getlog =  async (req,res)=>{
    const data = await model_log.find({});
    res.json(data);

};

export const postlog = async (req, res)=>{
    const newlog = await model_log({logFS: 'this is log FW'});
    const userSaved = await newlog.save();
    res.json(userSaved);
}
