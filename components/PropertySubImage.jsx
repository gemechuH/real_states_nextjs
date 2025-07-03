import Image from 'next/image';
const PropertySubImage = ({ images }) => {
    return (
      <section className="bg-blue-50 p-4">
        <div className="container mx-auto">
          {images.length === 1 ? (
            <Image
              src={images[0]}
              alt=""
              className="object-cover h-[400px] mx-auto rounded-xl"
              width={1800}
              height={4000}
              priority={true}
            />
          ) : (
            <div className={`grid grid-cols-2 gap-4`}>
              {images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt=""
                  className={`object-cover h-[400px] w-full ${images.length === 3 && index === 2 ? 'col-span-2 row-start-2' : 'col-span-1`'}`}
                  width={0}
                  height={0}
                  sizes="'100vw"
                />
              ))}
            </div> 
          )}
        </div>
      </section>
    );
}
 
export default PropertySubImage