"use client";
import { useState, useEffect } from "react";

import Avatar from "./avatar";
import { IUser, IUserList } from "../_types/users.types";
import { getUsersById } from "../_request";

export default function UserList(props: IUserList) {
  const [users, setUsers] = useState<IUser[] | []>(props.data);
  const [page, setPage] = useState<number>(props.page);
  const [totalPage, setTotalPage] = useState<number>(props.total_pages);
  const [submit, setSubmit] = useState<boolean>(false);

  useEffect(() => {
    if (submit) {
      getUsersById(page + 1).then((res) => {
        setUsers([...users, ...res.data]);
        setPage(res.page);
        setTotalPage(res.total_pages);
        setSubmit(false);
      });
    }
  }, [submit]);

  const handleLoadMore = () => {
    setSubmit(true);
  };

  const buttonDisabled = page >= totalPage ? true : false;
  const buttonDisabledClass = buttonDisabled
    ? "text-white py-1 px-3 rounded-md bg-blue-400/40"
    : "text-white py-1 px-3 rounded-md bg-blue-400";

  return (
    <div>
      <div className="h-[500px] max-h-[500px] overflow-y-auto">
        {users.map((user) => (
          <Avatar key={user.id} {...user} />
        ))}
      </div>
      <div className="text-center mt-3">
        <button
          disabled={buttonDisabled}
          className={buttonDisabledClass}
          onClick={handleLoadMore}
        >
          Load more
        </button>
      </div>
    </div>
  );
}
