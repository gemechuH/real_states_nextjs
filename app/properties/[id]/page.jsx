import PropertySinglePageImage from "@/components/PropertySinglePageImage";
import connectDB from "@/config/database";
import Property from "@/models/Property";

const propertyPageById = async({ params }) => {
  await connectDB()
  const property = await Property.findById(params.id).lean()
  return (
    <>
      <PropertySinglePageImage image={property.images[0]} />
      <section>
        <div class="container m-auto py-6 px-6">
          <a
            href="/properties.html"
            class="text-blue-500 hover:text-blue-600 flex items-center"
          >
            <i class="fas fa-arrow-left mr-2"></i> Back to Properties
          </a>
        </div>
      </section>
      <div>{property.name} </div>
    </>
  );
}

export default propertyPageById
