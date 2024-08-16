import React from "react";
import ReplayIcon from "@mui/icons-material/Replay";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LocationOnIcon from "@mui/icons-material/LocationOnOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import { useState, useEffect } from "react";
import axios from "axios";
function RandomUser() {
  const [user, setUser] = useState(null);
  const [dob, setDob] = useState("");
  const [regDate, setRegDate] = useState("");

  const options = { day: "numeric", month: "long", year: "numeric" };

  let url = "https://api.freeapi.app/api/v1/public/randomusers/user/random";

  const getUserData = async () => {
    const res = await axios.get(url);
    setUser(res.data.data);
  };

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    if (user) {
      setDob(new Date(user?.dob.date).toLocaleDateString("en-GB", options));
      setRegDate(
        new Date(user?.registered.date).toLocaleDateString("en-GB", options)
      );
      console.log(user?.location.coordinates.longitude);
    }
  }, [user]);

  return (
    <div className="flex justify-center items-center h-lvh bg-black">
      <div className="bg-white rounded-lg p-2">
        <div className="bg-blue-300 h-[600px] rounded-md w-[360px]">
          <div className="flex justify-between p-5">
            <ArrowBackIcon />
            <h2 className="font-semibold">Profile Overview</h2>
            <ReplayIcon className="cursor-pointer" onClick={getUserData} />
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src={user?.picture.large}
              alt=""
              className="rounded-full h-28 w-28 m-auto"
            />
            <h1 className="text-2xl font-bold">
              {user?.name.first} {user?.name.last}
            </h1>
            {user ? (
              <p className="text-sm">{user.login.username}</p>
            ) : (
              <p>...loading</p>
            )}
          </div>

          <div className="flex gap-8 justify-center m-5 p-3 border-black border-b border-t">
            <a
              className="flex gap-1"
              target="_blank"
              href={`https://maps.apple.com/?q=${user?.location.coordinates?.latitude},${user?.location.coordinates?.longitude}`}
            >
              <LocationOnIcon />
              <p>Location</p>
            </a>
            <a className="flex gap-1" href={`tel:${user?.phone}`}>
              <CallOutlinedIcon />
              <p>Call</p>
            </a>
          </div>

          <div className="flex flex-col gap-2 p-2 text-zinc-600 text-xs">
            <div className="flex justify-around">
              <div className="w-[45%]">
                <p>City</p>
                <h2 className="text-lg font-semibold">{user?.location.city}</h2>
              </div>
              <div className="w-[45%]">
                <p>Nationality</p>
                <div className="flex gap-1 items-center">
                  <img
                    src={`https://flagcdn.com/w320/${user?.nat.toLowerCase()}.png`}
                    alt=""
                    className="w-5 h-3"
                  />
                  <h2 className="text-lg font-semibold">{user?.nat}</h2>
                </div>
              </div>
            </div>

            <div className="flex justify-around">
              <div className="w-[45%]">
                <p>Date of Birth</p>
                <h2 className="text-lg font-semibold">{dob}</h2>
              </div>
              <div className="w-[45%]">
                <p>Phone No.</p>
                <h2 className="text-lg font-semibold">{user?.phone}</h2>
              </div>
            </div>

            <div className="flex justify-around">
              <div className="w-[45%]">
                <p>Time Zone</p>
                <h2 className="text-lg font-semibold">
                  {user?.location.timezone.offset} (
                  {user?.location.timezone.description.split(",").pop().trim()})
                </h2>
              </div>
              <div className="w-[45%]">
                <p>Registered Since</p>
                <h2 className="text-lg font-semibold">{regDate}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RandomUser;
