import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FullMessageItem from "../types/message-item.type";

export default function MessageItem({
  content,
  createdAt,
  user,
  isOwnMessage,
}: FullMessageItem) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{isOwnMessage ? "You" : user.name}</CardTitle>
      </CardHeader>

      <CardContent>
        <p>{content}</p>
        <p className="text-gray-500 text-sm">
          {new Date(createdAt).toLocaleString()}
        </p>
      </CardContent>
    </Card>
  );
}
