import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { joinRoom } from "../services/joinRoom";

export default function Join() {
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!roomId) return console.log("Enter correct Roomid");
    if (!username) return console.log("Enter correct username");

    await joinRoom({ roomId, username });
  }

  return (
    <div
      style={{
        background:
          "linear-gradient(rgb(255, 255, 255) 48%, rgb(255 255 255) 69%, rgb(255 255 255) 61%, rgb(36 68 198) 131%)",
      }}
      className="py-5 px-96 flex h-screen flex-col justify-center"
      
    >
      <div>
        <h1 className="text-4xl ml-1 font-semibold">Fill Room ID & Name</h1>
      </div>
      <form onSubmit={handleSubmit}
        className="flex
    flex-col gap-4 mt-4"
      >
        <input
          type="text"
          name="uuid"
          id="uuid"
          placeholder="Room Id"
          className="w-11/12 p-4 rounded-xl text-xl border-none focus:outline-none caret-slate-500 text-slate-400 bg-slate-800"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
        />
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          className="w-11/12 p-4 rounded-xl text-xl border-none focus:outline-none caret-slate-500 text-slate-400 bg-slate-800"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          onSubmit={handleSubmit}
          className="w-11/12 p-4 rounded-xl text-2xl font-semibold bg-slate-300 hover:bg-slate-400"
        >
          Join
        </button>
      </form>
    </div>
  );
}
