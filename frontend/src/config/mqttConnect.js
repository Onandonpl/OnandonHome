import mqtt from "mqtt";
import dotenv from "dotenv";
dotenv.config();
const options = {
  clientId: "REACT",
};
const client = mqtt.connect(process.env.REACT_APP_MQTT_WS, options);
client.setMaxListeners(100);
export default client;
