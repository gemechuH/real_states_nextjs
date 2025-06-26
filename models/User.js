import { Schema, model, models } from 'mongoose'
import { unique } from 'next/dist/build/utils'

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email alredy exists'],
        required: [true, 'Email is required']
        
    },

})