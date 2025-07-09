import { Schema, model, models } from 'mongoose'


const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email alredy exists'],
        required: [true, 'Email is required']
        
    },
    userName: {
        type: String,
        required: [true, 'userName is required'],

    },
    image: {
        type: String,

    },
    bookmarks: [{
        type: Schema.Types.ObjectId,
        ref: 'Property'
    }]


}, {
    timestamps: true
})
const User = models.User || model('User', UserSchema)
 export default User