import { db } from "../lib/firebase";

export const handleChangeSetting = (data) => {
  db.collection("settings").doc("settings").update(data);
};
