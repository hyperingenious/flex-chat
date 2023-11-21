import { NavigateFunction } from "react-router-dom";
import { supabase } from "./supabase.ts";

interface Credentials {
  UUID: string;
  participant_id: string;
  role: string;
}

function saveCredentials(credentials: Credentials) {
  const flex_object = {
    uuid: credentials.UUID,
    participant_id: credentials.participant_id,
    role: credentials.role,
  };
  localStorage.setItem("flex_object", JSON.stringify(flex_object));
}

interface LengthValidator {
  groupName: string;
  name: string;
}

function validateNameLength(nameValidate: LengthValidator) {
  if (nameValidate.groupName.length < 5)
    throw new Error("Group name should contain at least 5 characters");
  if (nameValidate.name.length < 5)
    throw new Error("Name should contain at least 5 characters");
}

interface Details {
  groupName: string;
  memberLimit: number;
  description: string;
  avatar: string | null;
  name: string;
  navigate: NavigateFunction;
}

export async function createGroup(GroupDetails: Details) {
  console.log(GroupDetails);
  
  validateNameLength({
    groupName: GroupDetails.groupName,
    name: GroupDetails.name,
  });

  const UUID = crypto.randomUUID();
  const participant_id = crypto.randomUUID();

  const initial_object = [
    {
      name: GroupDetails.name, // Assuming this is the correct variable
      participant_id,
      time_of_entering: new Date().toISOString(),
      message: [],
      permissions: {
        is_host: true,
        remove_participants: true,
        end_chatting: true,
        change_group_avatar: true,
        change_group_name: true,
      },
    },
  ];

  const parsed_object = JSON.stringify(initial_object);

  const { error } = await supabase.from("chats").insert([
    {
      // Data related to group created
      uuid: UUID,
      created_at: new Date().toISOString(),
      group_name: GroupDetails.groupName,
      description: GroupDetails.description,
      member_limits: GroupDetails.memberLimit,
      group_avatar: GroupDetails.avatar,
      // JSON object which will contain all the users
      json: parsed_object,
    },
  ]);

  if (error) {
    console.error("Error:", error.message); // Log the specific error message
    throw new Error("Failed to create group");
  }

  // Saving the credentials
  saveCredentials({ UUID, participant_id, role: "participant" });

  // Navigate user to room
  GroupDetails.navigate(`/room/${UUID}`);

  return null;
}
