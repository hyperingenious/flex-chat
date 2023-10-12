import { supabase } from "./supabase";
export async function createTable() {
  const { data, error } = await supabase.rpc("create_table", {
    schema: "public",
    table: "todos",
    columns: [
      { name: "id", type: "serial", primary: true },
      { name: "joinID", type: crypto.randomUUID(), notNull: true },
      { name: "completed", type: "boolean", notNull: true, default: false },
    ],
  });
  if (error) console.log("Error creating table:", error);
  else console.log("Table created successfully:", data);
}
