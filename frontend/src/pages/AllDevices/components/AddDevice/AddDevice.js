import React from "react";
import AddDeviceForm from "./AddDeviceForm";
import { useDispatchDevices } from "context/DevicesContext";
const AddDevice = () => {
  const dispatch = useDispatchDevices();
  return (
    <div>
      <AddDeviceForm dispatch={dispatch} />
    </div>
  );
};

export default AddDevice;
