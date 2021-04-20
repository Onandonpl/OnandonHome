import WSDCGQ11LM from "../WSDCGQ11LM/WSDCGQ11LM";

const devicesSwitch = (data, room) => {
  const { item, itemId } = data;
  switch (item.deviceType) {
    case "WSDCGQ11LM":
      return (
        <WSDCGQ11LM key={itemId} data={data} room={room}>
          WSDCGQ11LM
        </WSDCGQ11LM>
      );
    default:
      return null;
  }
};

export default devicesSwitch;
