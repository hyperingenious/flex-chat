import { NavigateFunction } from "react-router-dom";
import { supabase } from "./supabase";

export async function checkRoom({
  uuid,
  navigate,
}: {
  uuid: string | undefined;
  navigate: NavigateFunction;
}) {
  const { data, error } = await supabase
    .from("chats")
    .select("*")
    .eq("uuid", uuid);

  if (error) {
    navigate("/error");
    throw new Error(error.message);
  }

  if (data.length > 0) {
    return null;
  } else {
    navigate("/error");
  }
}
