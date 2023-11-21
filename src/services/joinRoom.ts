import { supabase } from "./supabase";

export async function joinRoom({
  roomId,
  username,
}: {
  roomId: string;
  username: string;
}) {
  const participant_id = crypto.randomUUID();

  // Verifying if the Room exists
  const { data, error } = await supabase
    .from("chats")
    .select("uuid")
    .eq("uuid", roomId);

  if (error) {
    console.error(error.message);
    return null;
  }

  const { uuid } = data[0];

  // Getting JSON object with roomID
  const { data: json, error: jsonRetrivalError } = await supabase
    .from("chats")
    .select("json")
    .eq("uuid", uuid);

  if (jsonRetrivalError) {
    console.error(jsonRetrivalError.message);
    throw new Error(jsonRetrivalError.message);
  }
  const parsed_json = JSON.parse(json[0].json);

  // Adding participant in object
  parsed_json.push({
    name: username,
    participant_id,
    time_of_entering: new Date().toISOString(),
    message: [],
    permissions: {
      is_host: false,
      remove_participants: false,
      end_chatting: false,
      change_group_avatar: false,
      change_group_name: false,
    },
  });

  // reStringifying the json
  const shoot_json = JSON.stringify(parsed_json);

  // update json
  const { error: updateError } = await supabase
    .from("chats")
    .update({ json: shoot_json })
    .eq("uuid", roomId);
    
    if (updateError) {
        console.error(updateError.message);
        throw new Error(updateError.message);
    }

  return null;
}