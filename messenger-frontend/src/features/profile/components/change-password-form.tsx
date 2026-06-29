"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import FormInput from "@/components/ui/form-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import changePassword from "../actions/change-password";
import {
  ChangePasswordFormValues,
  changePasswordSchema,
} from "../schemas/change-password-schema";

export default function ChangePasswordForm() {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<ChangePasswordFormValues>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      newPassword: "",
    },
  });

  const handleChangePassword = handleSubmit(async ({ newPassword }) => {
    try {
      await changePassword({ newPassword });

      toast.success("Password changed successfully");
    } catch (error) {
      toast.error((error as Error).message);
    }
  });

  return (
    <Card className="w-full w-max-96">
      <CardHeader>Change Password</CardHeader>

      <CardContent>
        <form onSubmit={handleChangePassword} className="flex flex-col gap-5">
          <FormInput
            name="currentPassword"
            control={control}
            placeholder="Current Password"
            description="Enter current password"
            type="password"
            errors={errors}
          />

          <FormInput
            name="newPassword"
            control={control}
            placeholder="New Password"
            description="Enter new password"
            type="password"
            errors={errors}
          />

          <FormInput
            name="confirmNewPassword"
            control={control}
            placeholder="Confirm Password"
            description="Confirm new password"
            type="password"
            errors={errors}
          />

          <Button type="submit">Change Password</Button>
        </form>
      </CardContent>
    </Card>
  );
}
