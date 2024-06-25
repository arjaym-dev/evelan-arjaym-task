import Image from "next/image";

import { IUser } from "../_types/users.types";

export default function Avatar(props: IUser) {
  const fullname = `${props.first_name} ${props.last_name}`;
  return (
    <div className="flex items-center justify-between py-4 border-b mr-2.5">
      <div className="flex items-center gap-x-5">
        <Image
          className="rounded-full"
          src={props.avatar}
          width={45}
          height={45}
          alt={fullname}
        />
        <div>
          <p className="font-medium">{fullname}</p>
          <p className="text-slate-400">{props.email}</p>
        </div>
      </div>
      <p className="font-medium">ID: {props.id}</p>
    </div>
  );
}
