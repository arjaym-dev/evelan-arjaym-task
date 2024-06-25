import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>
        <Link className="text-blue-400 underline" href="/users">
          Click here to check users page!
        </Link>
      </h1>
    </main>
  );
}
