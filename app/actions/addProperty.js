'use server'
import connectDB from "@/config/database";
import Property from "@/models/Property";

import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import cloudinary from "@/config/couldinary";


async function addProperty(formData) {
    await connectDB()
    const sessinUser = await getSessionUser()
    if (!sessinUser || !sessinUser.userId) {
        throw new Error("User not authenticated");
       
    }
    const { userId } = sessinUser;
    
// access all values from amenities and image
    const amenities= formData.getAll("amenities");
    const images = formData
        .getAll("images")
        .filter((image) => image.name !== "")
        
    // console.log(images)
    const propertyData = {
        owner: userId,
      type: formData.get("type"),
      name: formData.get("name"),
        description: formData.get("description"),
        location: {
            street: formData.get("location.street"),
            city: formData.get("location.city"),
            state: formData.get("location.state"),
            zipcode: formData.get("location.zipcode"),
        },
        beds: formData.get("beds"),
        baths: formData.get("baths"),
        square_feet: formData.get("square_feet"),
        amenities,
        rates: {
            nightly: formData.get("rates.nightly"),
            weekly: formData.get("rates.weekly"),
            monthly: formData.get("rates.monthly"),
        },
        seller_info: {
            name: formData.get("seller_info.name"),
            email: formData.get("seller_info.email"),
            phone: formData.get("seller_info.phone"),
        },
        

    };
    // Upload images to Cloudinary
    const imageUrls = []
    for (const imageFile of images) {
        const imageBuffer = await imageFile.arrayBuffer()
        const imageArray = Array.from(new Uint8Array(imageBuffer))
        const imageData = Buffer.from(imageArray)
        // convert image to base64
        const base64Image = imageData.toString('base64')
        const cloudinaryResponse = await cloudinary.uploader.upload(`data:image/png;base64,${base64Image}`, {
            folder: 'propertypulse',
        });
        imageUrls.push(cloudinaryResponse.secure_url)
    }
    propertyData.images = imageUrls
    
    const property = await Property(propertyData);
    await property.save()
    revalidatePath('/', 'layout')
    redirect(`/properties/${property._id}`)
}
export default addProperty