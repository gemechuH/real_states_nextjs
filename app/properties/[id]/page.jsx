import connectDB from "@/config/database";
import Property from "@/models/Property";

const propertyPageById = async({ params }) => {
  await connectDB()
  const property = await Property.findById(params.id).lean()
  return <div>{property.name} </div>;
}

export default propertyPageById
