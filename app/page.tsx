import User from "@/components/user";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  
  return (
    <main className="min-h-screen space-y-6 p-6">
      <h1 className="text-center">Entertainment Web App</h1>
      {session && (
        <div>
          <h2>Server Rendered Session Details</h2>
          <pre>{JSON.stringify(session?.user?.email)}</pre>
        </div>
      )}
      <User />
    </main>
  );
}
