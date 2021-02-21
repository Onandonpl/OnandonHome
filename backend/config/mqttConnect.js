import mqtt from "mqtt";
import dotenv from "dotenv";
dotenv.config();

export default mqtt.connect(process.env.MQTT_URL);
