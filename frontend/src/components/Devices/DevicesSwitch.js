import GosundPlug from "./Device/GosundPlug/GosundPlug";
import WSDCGQ11LM from "./Device/WSDCGQ11LM/WSDCGQ11LM";
import TS0505A from "./Device/TS0505A/TS0505A";
const renderSwitch = (doc, roomId) => {
  const { id } = doc;
  const { name, friendlyname, type } = doc.data();

  switch (type) {
    case "gosundPlug":
      return (
        <GosundPlug
          key={id}
          deviceId={id}
          roomId={roomId}
          devicename={name}
          friendlyname={friendlyname}
          type={type}
        >
          gosundPlug
        </GosundPlug>
      );
    case "TS0505A":
      return (
        <TS0505A
          key={id}
          deviceId={id}
          roomId={roomId}
          devicename={name}
          friendlyname={friendlyname}
          type={type}
        >
          TS0505A/HG06106A
        </TS0505A>
      );
    case "HG06106A":
      return (
        <TS0505A
          key={id}
          deviceId={id}
          roomId={roomId}
          devicename={name}
          friendlyname={friendlyname}
          type={type}
        >
          TS0505A/HG06106A
        </TS0505A>
      );
    case "WSDCGQ11LM":
      return (
        <WSDCGQ11LM
          key={id}
          deviceId={id}
          roomId={roomId}
          devicename={name}
          friendlyname={friendlyname}
          type={type}
        >
          WSDCGQ11LM
        </WSDCGQ11LM>
      );
    default:
      return null;
  }
};
export default renderSwitch;
