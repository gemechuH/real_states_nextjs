import properties from '@/properties.json'
import PropertyCard from './PropertyCard';
import Link from 'next/link';


const HomeProperties = () => {
    const recentProperties = properties.slice(0,3)
    return (
      <>
        <section className="px-4 py-6">
          <div className="container-xl lg-container m-auto px-4 py-6">
            <h2 className="text-3xl text-center text-blue-500 font-bold mb-6">
              Recent Properties{" "}
            </h2>
            {properties.length === 0 ? (
              <div>no properties found</div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {recentProperties.map((property) => (
                  <PropertyCard key={property._id} property={property} />
                ))}
              </div>
            )}
          </div>
            </section>
            <section className='m-auto my-8 max-w-lg px-4'>
                <Link href='/properties' className='block bg-black text-white text-center rounded-xl py-3 px-4 hover:bg-gray-700'>
                View All Properties</Link>

            </section>
      </>
    );
}
 
export default HomeProperties;