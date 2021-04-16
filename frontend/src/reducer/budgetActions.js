import { db } from "lib/firebase";

export const handleAddItem = (data) => {
  db.collection("budget").add(data);
};
export const handleDeleteItem = (data) => {
  db.collection("budget").doc(data).delete();
};
