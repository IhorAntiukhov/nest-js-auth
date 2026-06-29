import LogoutButton from "@/features/messages/components/logout-button";
import MessagesList from "@/features/messages/components/messages-list";
import NewMessageForm from "@/features/messages/components/new-message-form";
import MessagesContextProvider from "@/features/messages/context/messages-context-provider";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center gap-5 max-h-full">
      <LogoutButton />

      <MessagesContextProvider>
        <MessagesList />

        <NewMessageForm />
      </MessagesContextProvider>
    </main>
  );
}
