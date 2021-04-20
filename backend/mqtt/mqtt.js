import client from "../config/mqttConnect.js";
import realtime from "../realtime/realtime.js";

const subscribe = () => {
  client.on("connect", () => {
    client.subscribe("tasmota/#");
    client.subscribe("zigbee2mqtt/#");
  });

  client.on("message", (topic, message) => {
    const deviceTopic = topic.split("/");
    realtime(deviceTopic, message);
  });
};
export default subscribe;
