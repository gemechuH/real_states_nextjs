import Link from "next/link";
const InfoBox = ({
  heading,
  background = "bg-green-100",
    textcolor = 'text-gray-800',
  buttonAll,
  children,
}) => {
  return (
    <div className={`${background} p-6 rounded-lg shadow-md`}>
      <h2 className={`${textcolor}  text-2xl font-bold`}>{heading}</h2>
      <p className="mt-2 mb-4">{children}</p>
      <Link
        href={buttonAll.link}
        className={`inline-block ${buttonAll.backgroundColor} text-white rounded-lg px-4 py-2 hover:bg-gray-700`}
      >
        {buttonAll.text}
      </Link>
    </div>
  );
};
 
export default InfoBox;