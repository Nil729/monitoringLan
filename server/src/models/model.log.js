import {Schema, model} from "mongoose";

const logs = new Schema({
    logFS: {
        type: String,
        required: true,
        trim: true
    }
},{
    versionKey: false,
    timestamps: true
});

export default model('log', logs)