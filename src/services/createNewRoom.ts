import { supabase } from "./supabase.ts";

export async function createGroup(
  groupName: string,
  memberLimit: number,
  description: string,
  avatar: string | null
) {
  const UUID = crypto.randomUUID();
  const { error } = await supabase.from("chats").insert([
    {
      uuid: UUID,
      created_at: "now()",
      group_name: groupName,
      description: description,
      member_limits: memberLimit,
      group_avatar: avatar,
      json: [],
    },
  ]);

  if (error) throw new Error("There is an error");
  localStorage.setItem("FLEX_CHAT_UUID", UUID);

  return null;
}
