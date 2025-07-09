import {FaBookmark} from 'react-icons/fa'
const BookMarkButton = ({ property }) => {
    return (
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center">
       <FaBookmark class="fas fa-share mr-2"/> Bookmark Property
      </button>
    );
}
 
export default BookMarkButton;