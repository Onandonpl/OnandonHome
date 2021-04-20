import firebaseAdmin from "../../config/firebase.js";

const CC2531Live = (deviceTopic, message) => {
  if (deviceTopic[0] === "zigbee2mqtt") {
    const ref = firebaseAdmin.database().ref(`${deviceTopic[1]}`);
    if (deviceTopic[1] === "bridge") {
      deviceTopic[2] === "state"
        ? ref.update({
            name: deviceTopic[1],
            state: message.toString(),
          })
        : null;

      if (
        deviceTopic[2] === "log" &&
        JSON.parse(message).message === "interview_successful"
      ) {
        const info = JSON.parse(message);
        const refDevice = firebaseAdmin
          .database()
          .ref(`${info.meta.friendly_name}`);

        ref.update({
          message: info,
        }),
          refDevice.update({
            description: info.meta.description,
            model: info.meta.model,
          });
      }
    }
    if (deviceTopic[2] === undefined) {
      ref.update({
        name: deviceTopic[1],
        state: JSON.parse(message),
      });
    }
  }
};

export default CC2531Live;

