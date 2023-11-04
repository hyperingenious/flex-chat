import { useEffect } from "react";
import FirstPage from "../components/first-page/FirstPage";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const DOES_UUID_EXISTS = localStorage.getItem("FLEX_CHAT_UUID");
  const navigate = useNavigate();

  useEffect(
    function () {
      if (DOES_UUID_EXISTS) navigate(`/room/${DOES_UUID_EXISTS}`);
    },
    [navigate, DOES_UUID_EXISTS]
  );
  return <FirstPage />;
}
