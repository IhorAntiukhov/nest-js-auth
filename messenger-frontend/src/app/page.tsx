import MessagesList from "@/features/messages/components/messages-list";
import NewMessageForm from "@/features/messages/components/new-message-form";
import MessagesContextProvider from "@/features/messages/context/messages-context-provider";
import { UserIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-5 h-full">
      <Link href="/profile" className="self-end">
        <UserIcon />
      </Link>

      <MessagesContextProvider>
        <MessagesList />

        <NewMessageForm />
      </MessagesContextProvider>
    </main>
  );
}
