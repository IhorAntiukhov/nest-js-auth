import LogoutButton from "@/features/messages/components/logout-button";
import ChangeEmailForm from "@/features/profile/components/change-email-form";
import ChangePasswordForm from "@/features/profile/components/change-password-form";

export default function ProfilePage() {
  return (
    <main className="flex flex-col items-center gap-5 h-full">
      <LogoutButton />

      <ChangeEmailForm />
      <ChangePasswordForm />
    </main>
  );
}
