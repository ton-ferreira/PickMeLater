import MainHeader from "@components/layout/MainHeader";
import dancingDoodle from "../../../assets/dancing-doodle.png";

function Discover() {
  return (
    <>
      <MainHeader
        description="Smart content ideas, powered by your queue. Let AI help you find what’s next."
        illustration={dancingDoodle}
        title="Discover"
      />
    </>
  );
}

export default Discover;
