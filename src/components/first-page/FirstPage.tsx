import { Link } from "react-router-dom";

export default function FirstPage() {
  return (
    <div
      style={{
        background:
          "linear-gradient(rgb(255, 255, 255) 48%, rgb(255 255 255) 69%, rgb(255 255 255) 61%, rgb(36 68 198) 131%)",
      }}
      className="flex h-screen justify-center items-center w-full flex-col text-center px-48"
    >
      <h1 className="text-7xl">
        Chat like you never did with{" "}
        <span className="text-blue-900">Flex-Chat</span>
      </h1>
      <div className="mt-6 ">
        <Link to={"/new"} className="border-2 rounded-2xl h-10 text-2xl mx-2">
          Create room
        </Link>
        <Link to={"/join"} className="border-2 rounded-2xl h-10 text-2xl mx-2">
          Join now
        </Link>
      </div>
    </div>
  );
}
