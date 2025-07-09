import connectDB from "@/config/database";
import User from "@/models/User";
import Property from "@/models/Property";
import PropertyCard from "@/components/PropertyCard";
import { getSessionUser } from "@/utils/getSessionUser";

const savedProperties = async () => {
    
    const { userId } = await getSessionUser()
    const { bookmarks } = await User.findById(userId).populate('bookmarks')
    
    
    
    return (
      <section className="px-4 py-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 mt-4">
          Saved Properties
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bookmarks.length === 0 ? (
            <p>No bookmarks found</p>
          ) : (
            bookmarks.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))
          )}
        </div>
      </section>
    );
}
 
export default savedProperties;