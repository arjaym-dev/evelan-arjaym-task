import UserList from "./_components/list";
import { getUsersById } from "./_request";

export default async function Users() {
  const data = await getUsersById(1);

  return (
    <main className="flex justify-center w-full h-screen bg-slate-100">
      <div className="w-full mx-5 sm:mx-0 h-max sm:max-w-2xl p-8 shadow-lg rounded-md mt-10 bg-white">
        <h2 className="text-2xl font-semibold">User List</h2>
        <UserList {...data} />
      </div>
    </main>
  );
}
