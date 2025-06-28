import PropertyDetailSinglePage from "@/components/PropertyDetailSinglePage";
import PropertySinglePageImage from "@/components/PropertySinglePageImage";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import Link from "next/link";
import {FaArrowLeft} from 'react-icons/fa'

const propertyPageById = async({ params }) => {
  await connectDB()
  const property = await Property.findById(params.id).lean()
  return (
    <>
      <PropertySinglePageImage image={property.images[0]} />
      <section>
        <div class="container m-auto py-6 px-6">
          <Link
            href="/properties"
            class="text-blue-500 hover:text-blue-600 flex items-center"
          >
            <FaArrowLeft className="mr-2"/> to Properties
          </Link>
        </div>
      </section>
      <section class="bg-blue-50">
      <div class="container m-auto py-10 px-6">
          <div class="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
           <PropertyDetailSinglePage property={property}/> 
          </div>
        </div>
        </section>
      <div>{property.name} </div>
    </>
  );
}

export default propertyPageById
