import { createContext } from "react";
import { Socket } from "socket.io-client";

export interface MessageData {
  id: number;
  content: string;
}

interface MessagesContextType {
  replyToMessage: MessageData | null;
  setReplyToMessage: (id: MessageData | null) => void;
  socket: Socket;
}

const MessagesContext = createContext<MessagesContextType | undefined>(
  undefined,
);

export default MessagesContext;
