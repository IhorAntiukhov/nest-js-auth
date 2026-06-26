import LogoutButton from "@/features/messages/components/logout-button";
import MessagesList from "@/features/messages/components/messages-list";
import NewMessageForm from "@/features/messages/components/new-message-form";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center gap-5 p-10">
      <LogoutButton />

      <MessagesList />

      <NewMessageForm />
    </main>
  );
}
