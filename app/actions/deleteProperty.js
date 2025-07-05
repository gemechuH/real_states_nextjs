'use server'
import connectDB from "@/config/database";
import Property from "@/models/Property";
import { getSessionUser } from "@/utils/getSessionUser";
import cloudinary from "@/config/couldinary";
import { revalidatePath } from "next/cache";

async function deleteProperty(propertyId) {
    
const sessionUser = await getSessionUser()
    if (!sessionUser || !sessionUser.userId) {
        throw new Error('user id is required  ')
    }
    // if it exist delete the property
    const { userId } = sessionUser
    const property = await Property.findById(propertyId)

    // if (!property) throw new Error("property not found")
    // if (property.owner.toString() !== userId) {
    //     throw new Error("unauthorized User")
    // }
   
    if (!property) {
      console.log("Property not found for ID:", propertyId);
      throw new Error("property not found");
    }
    if (property.owner.toString() !== userId) {
      console.log(
        "Unauthorized: property.owner=",
        property.owner,
        "session userId=",
        userId
      );
      throw new Error("unauthorized User");
    }


    const publicIds = property.images.map((imageUrl) => {
        const parts = imageUrl.split('/');
        return parts.at(-1).split('.').at(0)

    })
    if (publicIds.length > 0) {
        for (let publicId of publicIds) {
            await cloudinary.uploader.destroy('propertypulse/' + publicId)
        }
    }
    await property.deleteOne();
    revalidatePath('/', "layout")
    
}

export default deleteProperty