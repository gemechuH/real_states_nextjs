import PropertyDetailSinglePage from "@/components/PropertyDetailSinglePage";
import PropertySinglePageImage from "@/components/PropertySinglePageImage";
import PropertySubImage from "@/components/PropertySubImage";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import Link from "next/link";
import { FaArrowLeft } from 'react-icons/fa'
import { convertToSerializableObject } from "@/utils/convertToObjectSerializable";

const propertyPageById = async({ params }) => {
  await connectDB()
  const propertyDoc = await Property.findById(params.id).lean()
  const property = convertToSerializableObject(propertyDoc)

  if (!property) {
    <h1 className="text-center text-2xl font-bold mt-10">Property Not Found</h1>
  }
  return (
    <>
      <PropertySinglePageImage images={property.images[0]} />
      <section>
        <div class="container m-auto py-6 px-6">
          <Link
            href="/properties"
            class="text-blue-500 hover:text-blue-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> to Properties
          </Link>
        </div>
      </section>
      <section class="bg-blue-50">
        <div class="container m-auto py-10 px-6">
          <div class="grid grid-cols-1 md:grid-cols-[70%_30%] w-full gap-6">
            <PropertyDetailSinglePage property={property} />
          </div>
        </div>
      </section>
      <PropertySubImage images={property.images} />
    </>
  );
}

export default propertyPageById
