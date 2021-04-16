import { db, base } from "lib/firebase";

export const handleAddItem = (data) => {
  db.collection("shopping").add({
    ...data,
    created: base.firestore.FieldValue.serverTimestamp(),
  });
};
export const handleDeleteItem = (data) => {
  db.collection("shopping").doc(data).delete();
};

export const handleQtyItem = (data) => {
  const { itemId, qty } = data;
  db.collection("shopping").doc(itemId).update({ qty: qty });
};
