import React from "react";
import { useForm } from "react-hook-form";
import { useAlert } from "react-alert";
import { Input, InputContainer, FormError, Form, Label, Submit } from "./style";
const WeatherForm = ({ dispatch, longitude, latitude }) => {
  const alert = useAlert();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const { longitude, latitude } = data;

    dispatch({
      type: "SET_LOCALIZATION",
      payload: {
        longitude: parseFloat(longitude),
        latitude: parseFloat(latitude),
      },
    });
    reset();
    alert.show("Zmieniono lokalizację.");
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <Label>Szerokość geograficzna</Label>
        <Input
          type="number"
          step="0.1"
          placeholder={latitude}
          {...register("latitude", { required: true })}
        />
        {errors.latitude && (
          <FormError>Szerokość geograficzna jest wymagana.</FormError>
        )}
      </InputContainer>
      <InputContainer>
        <Label>Długość geograficzna</Label>
        <Input
          type="number"
          step="0.1"
          placeholder={longitude}
          {...register("longitude", { required: true })}
        />
        {errors.longitude && (
          <FormError>Długość geograficzna jest wymagana.</FormError>
        )}
      </InputContainer>
      <Submit type="submit">Zapisz</Submit>
    </Form>
  );
};

export default WeatherForm;
