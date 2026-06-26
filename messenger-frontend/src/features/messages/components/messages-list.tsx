import getMessages from "../actions/get-messages";
import MessageItem from "./message-item";

export default async function MessagesList() {
  const { data: messages, error } = await getMessages();

  return (
    <div className="flex flex-col gap-2 p-5">
      {error && <p className="text-red-500">{error}</p>}
      {messages &&
        messages.length > 0 &&
        messages.map((message) => (
          <MessageItem
            key={message.id}
            id={message.id}
            content={message.content}
            createdAt={message.createdAt}
            isOwnMessage={message.isOwnMessage}
            user={message.user}
            parent={message.parent}
          />
        ))}
      {messages && messages.length === 0 && (
        <p className="text-gray-500">No messages yet</p>
      )}
    </div>
  );
}
