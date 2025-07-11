import { getInboxMessages } from "@/app/actions/getInboxMessages";
import Link from "next/link";
import {
  FaEnvelope,
  FaEnvelopeOpen,
  FaTrash,
  FaCheckCircle,
} from "react-icons/fa";
import { toggleMessageRead } from "@/app/actions/toggleMessageRead";


export default async function InboxPage() {
  const messages = await getInboxMessages();

  return (
    <section className="px-4 py-10 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-700">
        📬 My Inbox
      </h1>

      {messages.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          You have no messages yet.
        </p>
      ) : (
        <div className="space-y-8">
          {messages.map((msg) => (
            <div
              key={msg._id}
              className="bg-white shadow-md rounded-xl p-6 border border-gray-200 relative transition hover:shadow-lg"
            >
              {/* Message Read/Unread Icon */}
              <div className="absolute top-4 right-4 text-xl text-blue-600">
                {msg.read ? <FaEnvelopeOpen /> : <FaEnvelope />}
              </div>

              {/* Timestamp */}
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
                <span className="text-blue-600 underline">
                  {msg.sender?.email}
                </span>
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

              {/* Actions */}
              <div className="mt-6 flex gap-6">
                <form action={toggleMessageRead}>
                  <input type="hidden" name="messageId" value={msg._id} />
                  <button
                    type="submit"
                    className={`flex items-center gap-2 text-sm text-white p-2 rounded-xl font-medium
      ${msg.read ? "bg-gray-500 hover:bg-gray-600" : "bg-blue-600 hover:bg-blue-700"}`}
                  >
                    <FaCheckCircle />
                    {msg.read ? "Mark Unread" : "Mark as Read"}
                  </button>
                </form>

                {/* Delete */}
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
          ))}
        </div>
      )}
    </section>
  );
}
