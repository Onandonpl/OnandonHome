import gosundPlugLive from "./devices/gosundPlugLive.js";
import CC2531 from "./devices/CC2531.js";
const realtime = (deviceTopic, message) => {
  gosundPlugLive(deviceTopic, message);
  CC2531(deviceTopic, message);
};
export default realtime;
