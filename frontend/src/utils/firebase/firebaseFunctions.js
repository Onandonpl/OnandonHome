import firebase, { firestore } from "../../config/firebase";

const addRoom = (name) => {
  firestore.collection("rooms").add({
    name,
    created: firebase.firestore.FieldValue.serverTimestamp(),
  });
};
const addDevice = (id, name, friendlyname, type) => {
  firestore.collection("rooms").doc(id).collection("devices").add({
    name,
    friendlyname,
    type,
    created: firebase.firestore.FieldValue.serverTimestamp(),
  });
};
const deleteRoom = (id) => {
  firestore.collection("rooms").doc(id).delete();
};
const updateRoomName = (id, newName) => {
  firestore.collection("rooms").doc(id).update({
    name: newName,
  });
};

const updateDeviceName = (id, deviceId, newName) => {
  const ref = firestore.collection("rooms").doc(id);
  ref.collection("devices").doc(deviceId).update({
    friendlyname: newName,
  });
};

const deleteDevice = (id, deviceId) => {
  const ref = firestore.collection("rooms").doc(id);
  ref.collection("devices").doc(deviceId).delete();
};
///////////////////////
const addList = (listName, listColor = "#303f9f") => {
  firestore.collection("shopping").add({
    listName,
    listColor,
    created: firebase.firestore.FieldValue.serverTimestamp(),
  });
};
const deleteList = (id) => {
  firestore.collection("shopping").doc(id).delete();
};

const addProduct = (id, name, flag) => {
  firestore.collection("shopping").doc(id).collection("products").add({
    name,
    checked: false,
    flag,
    created: firebase.firestore.FieldValue.serverTimestamp(),
  });
};
const deleteProduct = (id, productId) => {
  const ref = firestore.collection("shopping").doc(id);
  ref.collection("products").doc(productId).delete();
};
const updateProductChecked = (id, productId, checked) => {
  const ref = firestore.collection("shopping").doc(id);
  ref.collection("products").doc(productId).update({
    checked,
  });
};
const updateProductFlag = (id, productId, flag) => {
  const ref = firestore.collection("shopping").doc(id);
  ref.collection("products").doc(productId).update({
    flag,
  });
};
////////////////////
const addTransaction = (
  transactionName,
  type,
  amount,
  mainCategory,
  subCategory,
  created,
  time
) => {
  firestore.collection("expenses").add({
    transactionName,
    type,
    amount,
    mainCategory,
    subCategory,
    created,
    time,
  });
};
const updateTransactionName = (id, transactionName) => {
  firestore.collection("expenses").doc(id).update({
    transactionName,
  });
};
const updateTransactionType = (id, type) => {
  firestore.collection("expenses").doc(id).update({
    type,
  });
};
const updateTransactionAmount = (id, amount) => {
  firestore.collection("expenses").doc(id).update({
    amount,
  });
};
const updateTransactionMainCategory = (id, mainCategory) => {
  firestore.collection("expenses").doc(id).update({
    mainCategory,
  });
};
const updateTransactionSubCategory = (id, subCategory) => {
  firestore.collection("expenses").doc(id).update({
    subCategory,
  });
};
const deleteTransaction = (id) => {
  firestore.collection("expenses").doc(id).delete();
};
////////////
const addCategory = (categoryName, categoryType, color) => {
  firestore.collection("categories").add({
    categoryName,
    categoryType,
    color,
    created: firebase.firestore.FieldValue.serverTimestamp(),
  });
};
///////////////
const addPlannedExpense = (
  added,
  categoryId,
  monthId,
  plannedExpenseName,
  amount,
  created,
  time
) => {
  firestore
    .collection("plannedCategories")
    .doc(categoryId)
    .collection("expenses")
    .add({
      added,
      monthId,
      plannedExpenseName,
      type: "expense",
      mainCategory: "Planowane",
      subCategory: "Planowane",
      amount,
      created,
      time,
    });
};
const updatePlannedStatus = (categoryId, expenseId, added) => {
  firestore
    .collection("plannedCategories")
    .doc(categoryId)
    .collection("expenses")
    .doc(expenseId)
    .update({ added: added });
};
const addPlannedCategory = (categoryName, created) => {
  firestore.collection("plannedCategories").add({
    categoryName,
    created,
  });
};

export {
  addRoom,
  deleteRoom,
  updateRoomName,
  addDevice,
  updateDeviceName,
  deleteDevice,
  addList,
  deleteList,
  addProduct,
  deleteProduct,
  updateProductChecked,
  updateProductFlag,
  addTransaction,
  deleteTransaction,
  updateTransactionName,
  updateTransactionType,
  updateTransactionAmount,
  updateTransactionMainCategory,
  updateTransactionSubCategory,
  addCategory,
  addPlannedCategory,
  addPlannedExpense,
  updatePlannedStatus,
};
