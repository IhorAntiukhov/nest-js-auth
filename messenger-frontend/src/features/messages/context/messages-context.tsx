import { createContext } from "react";

export interface MessageData {
  id: number;
  content: string;
}

interface MessagesContextType {
  replyToMessage: MessageData | null;
  setReplyToMessage: (id: MessageData | null) => void;
}

const MessagesContext = createContext<MessagesContextType | undefined>(
  undefined,
);

export default MessagesContext;
