import { NavigateFunction } from "react-router-dom";
import { supabase } from "./supabase.ts";

function saveCredentials({
  UUID,
  participant_id,
}: {
  UUID: string;
  participant_id: string;
}) {
  localStorage.setItem("FLEX_CHAT_UUID", UUID);
  localStorage.setItem("participant_id", participant_id);
}

function validateNameLength({
  groupName,
  name,
}: {
  groupName: string;
  name: string;
}) {
  if (groupName.length <= 5)
    throw new Error("Group name at least contain 5 characters");
  if (name.length <= 5) throw new Error("Name at least contain 5 characters");
  return null;
}

export async function createGroup(
  groupName: string,
  memberLimit: number,
  description: string,
  avatar: string | null,
  name: string,
  navigate: NavigateFunction
) {
  validateNameLength({ groupName, name });

  const UUID = crypto.randomUUID();
  const participant_id = crypto.randomUUID();

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
      json: [
        // user object which contains details of the user
        {
          name,
          participant_id,
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

  if (error) {
    console.log(error);
    throw new Error("There is an error");
  }

  // Saving the credentials
  saveCredentials({ UUID, participant_id });

  // Navigate user to room
  navigate(`/room/${UUID}`);

  return null;
}
