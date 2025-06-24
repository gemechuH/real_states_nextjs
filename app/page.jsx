import Hero from "@/components/Hero";
import HomeProperties from "@/components/HomeProperties";
import InfoBoxes from "@/components/InfoBoxes";
import InfoBoxs from "@/components/InfoBoxes";
import Link from "next/link"

const Page = () => {
  return (
    <>
      <Hero />
      <InfoBoxes />
      <HomeProperties/>
    </>
  );
}

export default Page