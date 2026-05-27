import { useEffect, useState } from "react";
import { getUsers } from "../services/api";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((res) => setUsers(res.data));
  }, []);

  return (
    <div className="space-y-6">
      <h2 className="text-xl sm:text-2xl font-bold">
        Registered Users
      </h2>

      {/* USERS LIST (this is your code) */}
      <div className="grid gap-4">
        {users.map((u) => (
          <div
            key={u.id}
            className="bg-white p-4 rounded-lg shadow flex flex-col sm:flex-row sm:justify-between"
          >
            <div>
              <p className="font-semibold">{u.name}</p>
              <p className="text-gray-500 text-sm">{u.email}</p>
            </div>

            <span className="text-xs mt-2 sm:mt-0 text-gray-400">
              ID: {u.id}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}