import { useState, useEffect } from "react";
import { createGroup } from "../services/createNewRoom";
import { useNavigate } from "react-router-dom";

export default function CreateRoom() {
  const DOES_UUID_EXISTS = localStorage.getItem("FLEX_CHAT_UUID");
  const [groupName, setGroupName] = useState("");
  const [maxMember, setMaxMember] = useState(2);
  const [groupDesc, setGroupDesc] = useState("");
  const [yourName, setYourName] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await createGroup(groupName, maxMember, groupDesc, "", yourName);
  }

  useEffect(
    function () {
      if (DOES_UUID_EXISTS) navigate(`/room/${DOES_UUID_EXISTS}`);
    },
    [navigate, DOES_UUID_EXISTS]
  );

  return (
    <div className="p-5">
      <div className="flex justify-center align-center text-4xl p-3">
        <h1>Create in 4 steps</h1>
      </div>

      <div className="flex items-center gap-6">
        <div className="w-20 h-20 rounded-full bg-black"></div>
        <h1>Choose Avatar</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex gap-1">
          <input
            placeholder="Enter Group name"
            className="border-2 border-gray-950"
            type="text"
            name="Group Name"
            id="group"
            value={groupName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
              setGroupName(e.target.value)
            }
          />
          <input
            placeholder="Maximum members"
            className="border-2 border-gray-950"
            type="number"
            name="Maximun members"
            id="maxMember"
            min={2}
            value={maxMember}
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
              setMaxMember(Number(e.target.value))
            }
          />
          <input
            placeholder="Enter your name"
            className="border-2 border-gray-950"
            type="text"
            name="Your Name"
            id="yourName"
            value={yourName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
              setYourName(e.target.value)
            }
          />
        </div>
        <div className="flex gap-1">
          <textarea
            className="border-2 border-gray-950"
            name=""
            id=""
            value={groupDesc}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>): void =>
              setGroupDesc(e.target.value)
            }
          />
        </div>
        <button className="border-2 border-slate-950">Submit</button>
      </form>
    </div>
  );
}
