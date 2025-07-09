import { FaShare } from "react-icons/fa";
const ShareButton = ({ property }) => {

    return (
      <button class="bg-orange-500 hover:bg-orange-600 text-white font-bold w-[90%] py-2 px-4 rounded-full flex items-center justify-center">
        <FaShare class=" mr-2" /> Share Property
      </button>
    );
};
 
export default ShareButton;