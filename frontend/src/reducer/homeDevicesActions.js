import { db, base } from "lib/firebase";

export const handleAddItem = (data) => {
  db.collection("home").add({
    ...data,
    created: base.firestore.FieldValue.serverTimestamp(),
  });
};
