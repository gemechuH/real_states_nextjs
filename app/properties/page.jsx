
import PropertyCard from '@/components/PropertyCard';
import Property from '@/models/Property';
// import properties from '@/properties.json'

import connectDB from '@/config/database';





const propertiesPage = async ({ searchParams }) => {
  
  //limit the number of properties to 10
   const page = parseInt(searchParams?.page || "1", 10);
   const pageSize = parseInt(searchParams?.pageSize || "2", 10);
  const skip = (page - 1) * pageSize
  
  const total = await Property.countDocuments({})
  

  console.log(searchParams);
  await connectDB();

  const properties = await Property.find({}).skip(skip).limit(pageSize).lean();
  return (
    <section className="px-4 py-6">
      <div className="container-xl lg-container m-auto px-4 py-6">
        {properties.length === 0 ? (
          <div>no properties found</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default propertiesPage

