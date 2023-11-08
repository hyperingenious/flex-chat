import { Link } from "react-router-dom";

export default function FirstPage() {
  return (
    <div className="flex h-screen justify-center items-center w-full flex-col text-center px-48">
      <h1 className="text-7xl">
        Chat like you never did with{" "}
        <span className="text-blue-900">Flex-Chat</span>
      </h1>
      <div className="mt-6 ">
        <Link to={'/new'} className="border-2 rounded-2xl h-10 text-2xl mx-2">
          Create room
        </Link>
        <button className="border-2 rounded-2xl h-10 text-2xl mx-2">
          Join now
        </button>
      </div>
    </div>
  );
}
