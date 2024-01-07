import mongoose from "mongoose"

const mySchema = new mongoose.Schema({

}, {timestamps: true})

export const Schema = mongoose.model('Schema',mySchema)