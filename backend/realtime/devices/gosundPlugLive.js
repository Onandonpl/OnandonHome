import firebaseAdmin from "../../config/firebase.js";

const gosundPlugLive = (deviceTopic, message) => {
  const ref = firebaseAdmin.database().ref(`${deviceTopic[3]}`);

  if (deviceTopic[0] === "tasmota" && deviceTopic[1] === "gosundPlug") {
    deviceTopic[4] === "LWT"
      ? ref.update({
          name: deviceTopic[3],
          state: message.toString(),
          model: "gosundPlug",
        })
      : null;
    deviceTopic[4] === "POWER"
      ? ref.update({
          name: deviceTopic[3],
          power: message.toString(),
        })
      : null;

    deviceTopic[4] === "INFO3"
      ? ref.update({
          name: deviceTopic[3],
          info3: JSON.parse(message),
        })
      : null;
    deviceTopic[4] === "INFO2"
      ? ref.update({
          name: deviceTopic[3],
          info2: JSON.parse(message),
        })
      : null;
    deviceTopic[4] === "STATE"
      ? ref.update({
          name: deviceTopic[3],
          deviceState: JSON.parse(message),
        })
      : null;
    deviceTopic[4] === "SENSOR"
      ? ref.update({
          name: deviceTopic[3],
          deviceSensor: JSON.parse(message),
        })
      : null;
    deviceTopic[4] === "RESULT"
      ? ref.update({
          name: deviceTopic[3],
          result: JSON.parse(message),
        })
      : null;
  }
};

export default gosundPlugLive;
