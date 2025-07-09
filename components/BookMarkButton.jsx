import {FaBookmark} from 'react-icons/fa'
const BookMarkButton = ({ property }) => {
    return (
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold w-[90%] py-2 px-4 rounded-full flex items-center justify-center">
       <FaBookmark class="mr-2"/> Bookmark Property
      </button>
    );
}
 
export default BookMarkButton;