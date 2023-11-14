import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { checkRoom } from "../services/checkRoom";

export default function Room() {
  const navigate = useNavigate();
  const { uuid } = useParams();
  useEffect(
    function () {
      async function initilizeRoom() {
        checkRoom({ uuid, navigate });
      }
      initilizeRoom();
    },
    [uuid, navigate]
  );

  return <div>It's a room</div>;
}
