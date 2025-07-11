// components/MessageSubmitButton.jsx
"use client";

import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

const MessageSubmitButton = ({ label = "Submit", icon: Icon = FaPaperPlane }) => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`${
        pending
          ? "bg-blue-300 cursor-not-allowed"
          : "bg-blue-500 hover:bg-blue-600"
      } text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline flex items-center justify-center cursor-pointer`}
    >
       {Icon && <Icon className="mr-2" />}
      {pending ? "Sending..." : label}
    </button>
  );
};

export default MessageSubmitButton;
