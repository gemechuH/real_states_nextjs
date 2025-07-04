'use client'
import { useState } from "react";
import Image from "next/image";

const ProfilePropeties = ({ properties: intialProperties }) => {
const [properties, setproperties] = useState(intialProperties)
    return properties.map((property) => (
      <>
        <div className="mb-10">
          <a href="/property.html">
            <Image
              className="h-32 w-full rounded-md object-cover"
                        src={property.images[0]}
                        width={300}
                        height={200}
              alt="Property 1"
            />
          </a>
          <div className="mt-2">
                    <p className="text-lg font-semibold">{property.name}</p>
            <p className="text-gray-600">Address: {property.location.street}, {property.location.city} </p>
          </div>
          <div className="mt-2">
            <a
              href="/add-property.html"
              className="bg-blue-500 text-white px-3 py-3 rounded-md mr-2 hover:bg-blue-600"
            >
              Edit
            </a>
            <button
              className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600"
              type="button"
            >
              Delete
            </button>
          </div>
        </div>
         
      </>
    ));
    

}
 
export default ProfilePropeties;