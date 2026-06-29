"use client";

import { useContext, useEffect, useState } from "react";

import MessageItem from "./message-item";
import FullMessageItem from "../types/message-item.type";
import MessagesContext from "../context/messages-context";

export default function MessagesList() {
  const socket = useContext(MessagesContext)!.socket;
  const [messages, setMessages] = useState<FullMessageItem[]>([]);

  useEffect(() => {
    socket.on("messages", setMessages);

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  return (
    <div className="flex flex-col flex-1 items-stretch gap-2 p-5 w-full max-w-96 overflow-scroll">
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
