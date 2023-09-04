import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className="">
      {/* <h1 className="text-center">Entertainment Web App</h1>
      {session && (
        <div>
          <h2>Server Rendered Session Details</h2>
          <pre>{JSON.stringify(session?.user?.email)}</pre>
        </div>
      )}
      <User /> */}
    </main>
  );
}
