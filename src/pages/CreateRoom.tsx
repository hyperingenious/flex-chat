export default function CreateRoom() {
  return (
    <div className="p-5">
      <div className="flex justify-center align-center text-4xl p-3">
        <h1>Create in 4 steps</h1>
      </div>

      <div className="flex items-center gap-6">
        <div className="w-20 h-20 rounded-full bg-black"></div>
        <h1>Choose Avatar</h1>
      </div>

      <form>
        <div className="flex gap-1">
          <input
          placeholder="Enter Group name"
            className="border-2 border-gray-950"
            type="text"
            name="Group Name"
            id="group"
          />
          <input
          placeholder="Maximum members"
            className="border-2 border-gray-950"
            type="number"
            name="Maximun members"
            id="maxMember"
            min={2}
          />
        </div>
        <div className="flex gap-1">
          <textarea
            className="border-2 border-gray-950"
            name=""
            id=""
          />
        </div>
      </form>
      <button className="border-2 border-slate-950">Submit</button>
    </div>
  );
}
