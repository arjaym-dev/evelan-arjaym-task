import { IUserPagination } from "../_types/users.types";

export async function getUsersById(id: number): Promise<IUserPagination> {
  const res = await fetch(`https://reqres.in/api/users?page=${id}`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
