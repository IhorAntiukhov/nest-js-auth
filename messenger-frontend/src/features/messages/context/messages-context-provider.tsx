"use client";

import { useMemo, useState } from "react";
import MessagesContext, { MessageData } from "./messages-context";
import { io } from "socket.io-client";

export default function MessagesContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [replyToMessage, setReplyToMessage] = useState<MessageData | null>(
    null,
  );

  const socket = useMemo(
    () =>
      io(process.env.NEXT_PUBLIC_API_URL!, {
        withCredentials: true,
        transports: ["websocket"],
      }),
    [],
  );

  return (
    <MessagesContext.Provider
      value={{ replyToMessage, setReplyToMessage, socket }}
    >
      {children}
    </MessagesContext.Provider>
  );
}
