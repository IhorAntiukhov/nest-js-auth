"use client";

import { useState } from "react";
import MessagesContext, { MessageData } from "./messages-context";

export default function MessagesContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [replyToMessage, setReplyToMessage] = useState<MessageData | null>(
    null,
  );

  return (
    <MessagesContext.Provider value={{ replyToMessage, setReplyToMessage }}>
      {children}
    </MessagesContext.Provider>
  );
}
