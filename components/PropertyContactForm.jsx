'use client'

import { useSession } from 'next-auth/react';
import { FaPaperPlane } from 'react-icons/fa'
import addMessage from '@/app/actions/addMessage';
import { useFormState, useFormStatus } from 'react-dom'; 
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import MessageSubmitButton from './MessageSubmitButton';




const PropertyContactForm = ({ property }) => {
  const { data: session } = useSession();
  const [state, fromAction] = useFormState(addMessage, {});

  useEffect(() => {
    if(state.error) {
      toast.error(state.error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    if(state.submitted) {
      toast.success("Message sent successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [state])

  

  if (state.submitted) {
    return <p className="text-green-500 mb-4">message sent successfully</p>
  }
    return( session && (
      <div className="bg-white p-6 rounded-lg w-[90%] shadow-md">
        <h3 className="text-xl font-bold mb-6">Contact Property Manager</h3>
        <form action={fromAction}>
          <div className="mb-4">
            {/* hide the input which  */}
            
            <input type="hidden" id='property' name='property' value={property._id} />
            <input type="hidden" id='property' name='recipient' value={property.owner} />
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Phone:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              name="phone"
              type="text"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message:
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 h-44 focus:outline-none focus:shadow-outline"
              id="body"
              name="body"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div>
            <MessageSubmitButton label='Send Message' icon={FaPaperPlane} />
          </div>
        </form>
      </div>
    )
  );
};
 
export default PropertyContactForm;