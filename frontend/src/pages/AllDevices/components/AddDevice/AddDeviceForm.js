import React from "react";
import { useForm } from "react-hook-form";
import { useAlert } from "react-alert";
import { Input, InputContainer, FormError, Form, Label, Submit } from "./style";
const AddDeviceForm = ({ dispatch }) => {
  const alert = useAlert();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const { deviceName, deviceId, deviceType } = data;

    const payload = {
      deviceName: deviceName,
      deviceId: deviceId,
      deviceType: deviceType,
    };

    dispatch({ type: "ADD_ITEM", payload: payload });
    reset();
    alert.show("Dodano urządzenie.");
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <Label>Nazwa wyświetlana</Label>
        <Input type="text" {...register("deviceName", { required: true })} />
        {errors.deviceName && (
          <FormError>Nazwa wyświetlana jest wymagana.</FormError>
        )}
      </InputContainer>
      <InputContainer>
        <Label>Id urządzenia</Label>
        <Input type="text" {...register("deviceId", { required: true })} />
        {errors.deviceId && <FormError>Id urządzenia jest wymagane.</FormError>}
      </InputContainer>
      <Label>Typ urządzenia</Label>
      <select name="deviceType" {...register("deviceType")}>
        <option value="WSDCGQ11LM">WSDCGQ11LM</option>
      </select>
      <Submit type="submit">Dodaj</Submit>
    </Form>
  );
};

export default AddDeviceForm;
