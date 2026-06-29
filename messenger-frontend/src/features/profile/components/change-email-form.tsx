"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import FormInput from "@/components/ui/form-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import changeEmail from "../actions/change-email";
import {
  ChangeEmailFormValues,
  changeEmailSchema,
} from "../schemas/email-schema";

export default function ChangeEmailForm() {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<ChangeEmailFormValues>({
    resolver: zodResolver(changeEmailSchema),
    defaultValues: {
      email: "",
    },
  });

  const handleChangeEmail = handleSubmit(async ({ email }) => {
    try {
      await changeEmail({ newEmail: email });

      toast.success("Email changed successfully");
    } catch (error) {
      toast.error((error as Error).message);
    }
  });

  return (
    <Card className="w-full w-max-96">
      <CardHeader>Change Email</CardHeader>

      <CardContent>
        <form onSubmit={handleChangeEmail} className="flex flex-col gap-5">
          <FormInput
            name="email"
            control={control}
            placeholder="Email"
            description="Enter new email"
            type="email"
            errors={errors}
          />

          <Button type="submit">Change Email</Button>
        </form>
      </CardContent>
    </Card>
  );
}
