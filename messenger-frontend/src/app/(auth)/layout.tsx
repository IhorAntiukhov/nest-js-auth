import { Card } from '@/components/ui/card';
import React from 'react';

export default function AuthLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex flex-col flex-1 justify-center items-center">
      <Card className="w-full max-w-96">{children}</Card>
    </div>
  );
}
