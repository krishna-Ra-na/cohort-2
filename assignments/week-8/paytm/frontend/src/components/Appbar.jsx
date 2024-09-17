import axios from "axios";
import { useEffect, useState } from "react";

export const Appbar = () => {
  const [user, setUser] = useState("U");
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:3000/api/v1/account", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUser(response.data.username);
      })
      .catch((error) => {
        console.error("Error fetching balance:", error);
      });
  }, []);
  return (
    <div className="shadow h-14 flex justify-between">
      <div className="flex flex-col justify-center h-full ml-4">PayTM App</div>
      <div className="flex">
        <div className="flex flex-col justify-center h-full mr-4">Hello</div>
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {user}
          </div>
        </div>
      </div>
    </div>
  );
};
