import { supabase } from "./supabase.ts";

export async function createGroup(
  groupName: string,
  memberLimit: number,
  description: string,
  avatar: string | null,
  name: string
) {
  const UUID = crypto.randomUUID();
  const { error } = await supabase.from("chats").insert([
    {
      // Data related to group created
      uuid: UUID,
      created_at: "now()",
      group_name: groupName,
      description: description,
      member_limits: memberLimit,
      group_avatar: avatar,

      // JSON object which will contains all the users
      users: [
        // user object which contain details of the user
        {
          name,
          time_of_entering: "now()",
          message: [],
          permissions: {
            is_host: true,
            remove_participants: true,
            end_chatting: true,
            change_group_avatar: true,
            change_group_name: true,
          },
        },
      ],
    },
  ]);

  if (error) throw new Error("There is an error");
  localStorage.setItem("FLEX_CHAT_UUID", UUID);

  return null;
}
