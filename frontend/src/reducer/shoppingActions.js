import { db, base } from "lib/firebase";

export const handleAddItem = (data) => {
  db.collection("shopping").add({
    ...data,
    created: base.firestore.FieldValue.serverTimestamp(),
  });
};
export const handleDeleteItem = (data) => {
  const { shoppingItemId } = data;
  db.collection("shopping").doc(shoppingItemId).delete();
};

export const handleQtyItem = (data) => {
  const { shoppingItemId, qty } = data;
  db.collection("shopping").doc(shoppingItemId).update({ qty: qty });
};
