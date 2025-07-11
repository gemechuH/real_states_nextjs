import PropertyCard from "@/components/PropertyCard";
import PropertySearchForm from "@/components/PropertySearchForm";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import { convertToSerializableObject } from "@/utils/convertToObjectSerializable";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const SearchResultsPage = async ({ searchParams }) => {
  const location = searchParams.location || "";
  const propertyType = searchParams.propertyType || "All";

  await connectDB();

  const locationPattern = new RegExp(location, "i");

  let query = {
    $or: [
      { name: locationPattern },
      { description: locationPattern },
      { "location.street": locationPattern },
      { "location.city": locationPattern },
      { "location.state": locationPattern },
      { "location.zipcode": locationPattern },
    ],
  };

  if (propertyType !== "All") {
    const typePattern = new RegExp(propertyType, "i");
    query.type = typePattern; // Make sure your schema uses `type`, not `propertyType`
  }

  const propertiesQueryResults = await Property.find(query).lean();
  const properties = convertToSerializableObject(propertiesQueryResults);

  return (
    <>
      <section className="bg-blue-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <PropertySearchForm />
        </div>
      </section>
      <Link
        href="/"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4 ml-4"
      >
        <FaArrowLeft className="mr-2" /> Back to Home
      </Link>
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto">
          <h1 className="text-2xl font-bold text-center mb-6">
            Search Results
          </h1>

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
    </>
  );
};

export default SearchResultsPage;
