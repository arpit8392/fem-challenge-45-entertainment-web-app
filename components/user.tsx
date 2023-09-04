"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "./ui/button";

const User = () => {
  const { data: session } = useSession();

  if (!session) {
    return (
      <Button variant="outline" asChild>
        <Link href="/login">Login</Link>
      </Button>
    );
  }

  return (
    <div>
      <pre>Hi, {JSON.stringify(session?.user?.email)}</pre>
      <Button variant="outline" onClick={() => signOut()}>
        Log Out
      </Button>
    </div>
  );
};

export default User;
