// app/search-results/page.jsx
import PropertyCard from "@/components/PropertyCard";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import { convertToSerializableObject } from "@/utils/convertToObjectSerializable";

const SearchResultsPage = async ({ searchParams: location, type }) => {
  
    await connectDB();
    
    const locationPattern = new RegExp(location, 'i')

    let query = {
        $or: [
            { name: locationPattern },
            { description: locationPattern },
            {"location.street": locationPattern},
            {"location.city": locationPattern},
            {"location.state": locationPattern},
            {"location.zipcode": locationPattern},
        ]
    }
    if (type && type !== 'All') {
        const typePattern = new RegExp(type, 'i')
        query.type = typePattern
}
  // Fetch all properties
    const propertiesQueryResults = await Property.find(query).lean();
    const properties = convertToSerializableObject(propertiesQueryResults)
    console.log(properties)

  // Filter based on location and type
  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Search Results</h1>

        {properties.length === 0 ? (
          <p className="text-center text-gray-600">
            No matching properties found.
          </p>
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
  
};

export default SearchResultsPage;
