import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

import React from "react";

function Topbar() {
  const [ip, setIp] = useState({});
  useEffect(() => {
    const fetchIp = async () => {
      const request = await fetch(
        `https://ipinfo.io/json?token=${process.env.REACT_APP_IP_TOKEN}`
      );
      const response = await request.json();
      setIp(response);
    };
    fetchIp();
  }, []);

  const formatDate = () => {
    const currentDate = new Date();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();

    return `${month}/${day}/${year}`;
  };

  const hours = new Date().getHours();
  const isDayTime = hours > 6 && hours < 20;

  return (
    <div className="py-2 shadow-md">
      <div className="flex justify-between mx-auto lg: max-w-7xl">
        {/* Location */}
        <div className="flex space-x-2 text-gray-400">
          <p className="font-thin text-sm">{formatDate()}</p>
          <p className="font-thin text-sm">
            {ip.city}, {ip.region}
          </p>
          {isDayTime ? (
            <SunIcon className="w-5 h-5 text-yellow-400" />
          ) : (
            <MoonIcon className="w-5 h-5" />
          )}
        </div>

        {/* Right side website */}
        <div>
          <a
            href="https://www.justobii.com"
            target="_blank"
            rel="noreferrer noopener"
            className="hidden lg:inline-flex hover:text-yellow-400 transition-all ease-in-out font-semibold font"
          >
            justobii.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
