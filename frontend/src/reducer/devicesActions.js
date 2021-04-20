import { db, base } from "lib/firebase";

export const handleAddItem = (data) => {
  db.collection("devices").add({
    ...data,
    created: base.firestore.FieldValue.serverTimestamp(),
  });
};
export const handleDeleteItem = (data) => {
  db.collection("devices").doc(data).delete();
};
