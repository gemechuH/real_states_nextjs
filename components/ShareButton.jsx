import { FaShare } from "react-icons/fa";
const ShareButton = ({ property }) => {

    return (
      <button class="bg-orange-500 hover:bg-orange-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center">
       <FaShare class="fas fa-share mr-2"/> Share Property
      </button>
    );
};
 
export default ShareButton;