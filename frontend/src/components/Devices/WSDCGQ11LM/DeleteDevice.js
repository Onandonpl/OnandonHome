import React from "react";
import { DeleteDeviceButton } from "./style";
import { AiFillDelete } from "react-icons/ai";
import { db } from "lib/firebase";

const DeleteDevice = ({ room, itemId }) => {
  const handleDeleteItem = () => {
    db.collection(room).doc(itemId).delete();
  };

  return (
    <DeleteDeviceButton onClick={handleDeleteItem}>
      <AiFillDelete />
    </DeleteDeviceButton>
  );
};

export default DeleteDevice;
