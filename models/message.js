import { Schema, model, models } from "mongoose";

const MessageSchema = new Schema(
  {
    sender: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Sender is required"],
    },
    recipient: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Recipient is required"],
        },
        property: {
          type: Schema.Types.ObjectId,
          ref: "Property",
          required: [true, "Property is required"],
        },
        name:{
          type: String,
          required: [true, 'name is required']
    },
        email:{
          type: String,
          required: [true, 'email is required']
    },
    phone: {
          type: String
    },
    body: String,
    ///make read deafault to false
    read: {
      type: Boolean,
      default: false
    }
    

        
    // content: {
    //   type: String,
    //   required: [true, "Message content is required"],
    // },
  },
  {
    timestamps: true,
  }
);
const Message = models.Message || model("Message", MessageSchema);
export default Message;
