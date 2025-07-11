"use client";

import Link from "next/link";
import {
  FaEnvelope,
  FaEnvelopeOpen,
  FaTrash,
  FaCheckCircle,
} from "react-icons/fa";

const InboxMessageList = ({ messages }) => {
  if (!messages || messages.length === 0) {
    return (
      <p className="text-center text-gray-500 text-lg">
        You have no messages yet.
      </p>
    );
  }

  return (
    <div className="space-y-8">
      {messages.map((msg) => (
        <div
          key={msg._id}
          className="bg-white shadow-md rounded-xl p-6 border border-gray-200 relative transition hover:shadow-lg"
        >
          {/* Message Status Icon */}
          <div className="absolute top-4 right-4 text-xl text-blue-600">
            {msg.read ? <FaEnvelopeOpen /> : <FaEnvelope />}
          </div>

          {/* Date */}
          <p className="text-sm text-gray-500 mb-3">
            Sent on:{" "}
            <span className="font-medium">
              {new Date(msg.createdAt).toLocaleString()}
            </span>
          </p>

          {/* Sender Info */}
          <h3 className="text-base font-semibold text-gray-800 mb-1">
            From: {msg.name}
          </h3>
          <p className="text-sm text-gray-600 mb-2">
            📧{" "}
            <span className="text-blue-600 underline">{msg.sender?.email}</span>
            {msg.phone && <span> | 📞 {msg.phone}</span>}
          </p>

          {/* Message Body */}
          <p className="text-gray-700 mb-4">{msg.body}</p>

          {/* Property Link */}
          {msg.property && (
            <Link
              href={`/properties/${msg.property._id}`}
              className="inline-block text-blue-600 hover:underline text-sm font-medium mb-4"
            >
              🏠 View Property: {msg.property.name}
            </Link>
          )}

          {/* Buttons */}
          <div className="mt-6 flex gap-6">
            <form action={`/api/messages/${msg._id}/read`} method="POST">
              <button
                type="submit"
                className="flex items-center gap-2 text-sm text-green-600 hover:text-green-700 font-medium"
              >
                <FaCheckCircle /> Mark as Read
              </button>
            </form>
            <form action={`/api/messages/${msg._id}/delete`} method="POST">
              <button
                type="submit"
                className="flex items-center gap-2 text-sm text-red-600 hover:text-red-700 font-medium"
              >
                <FaTrash /> Delete
              </button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InboxMessageList;
