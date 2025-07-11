"use client";

import { useTransition, useState } from "react";
import { toast } from "react-hot-toast";
import { FaCheckCircle, FaTrash } from "react-icons/fa";
import { toggleMessageRead } from "@/app/actions/toggleMessageRead";

export default function MessageCard({ msg }) {
  const [isPending, startTransition] = useTransition();
  const [isRead, setIsRead] = useState(msg.read);

  const handleToggleRead = () => {
    startTransition(async () => {
      const formData = new FormData();
      formData.set("messageId", msg._id);

      try {
        await toggleMessageRead(formData);
        toast.success(isRead ? "Marked as Unread" : "Marked as Read");
        setIsRead(!isRead);
      } catch (err) {
        toast.error("Failed to update message");
      }
    });
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200 relative transition hover:shadow-lg">
      <div className="absolute top-4 right-4 text-xl text-blue-600">
        {isRead ? "📖" : "📬"}
      </div>

      <p className="text-sm text-gray-500 mb-3">
        Sent on:{" "}
        <span className="font-medium">
          {new Date(msg.createdAt).toLocaleString()}
        </span>
      </p>

      <h3 className="text-base font-semibold text-gray-800 mb-1">
        From: {msg.name}
      </h3>
      <p className="text-sm text-gray-600 mb-2">
        📧 <span className="text-blue-600 underline">{msg.sender?.email}</span>
        {msg.phone && <span> | 📞 {msg.phone}</span>}
      </p>

      <p className="text-gray-700 mb-4">{msg.body}</p>

      {msg.property && (
        <p className="text-sm mb-4 text-blue-600 font-medium">
          🏠 View Property: {msg.property.name}
        </p>
      )}

      <div className="mt-4 flex gap-4">
        <button
          onClick={handleToggleRead}
          disabled={isPending}
          className={`flex items-center text-white p-2 rounded-xl gap-2 text-sm font-medium ${
            isRead
              ? "bg-yellow-500 hover:bg-yellow-600"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          <FaCheckCircle />
          {isRead ? "Mark Unread" : "Mark as Read"}
        </button>

        <form action={`/api/messages/${msg._id}/delete`} method="POST">
          <button
            type="submit"
            className="flex items-center text-white p-2 rounded-xl gap-2 text-sm bg-red-600 hover:bg-red-700 font-medium"
          >
            <FaTrash /> Delete
          </button>
        </form>
      </div>
    </div>
  );
}
