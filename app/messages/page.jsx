import { getInboxMessages } from "@/app/actions/getInboxMessages";
import MessageCard from "@/components/MessageCard";

export default async function InboxPage() {
  const messages = await getInboxMessages();

  // ✅ sort unread first
  const sortedMessages = [...messages].sort((a, b) => {
    return a.read === b.read ? 0 : a.read ? 1 : -1;
  });

  return (
    <section className="px-4 py-10 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-700">
        📬 My Inbox
      </h1>

      {sortedMessages.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          You have no messages yet.
        </p>
      ) : (
        <div className="space-y-8">
          {sortedMessages.map((msg) => (
            <MessageCard key={msg._id} msg={msg} />
          ))}
        </div>
      )}
    </section>
  );
}
