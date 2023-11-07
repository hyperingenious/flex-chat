import { useEffect } from "react";

export default function Room() {
  useEffect(function () {
    async function initilizeRoom() {}
    initilizeRoom();
  }, []);

  return <div>It's a room</div>;
}
