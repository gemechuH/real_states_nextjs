import Hero from "@/components/Hero";
import HomeProperties from "@/components/HomeProperties";
import InfoBoxes from "@/components/InfoBoxes";
import connectDB from "@/config/database";


const Page = () => {
  connectDB()
  return (
    <>
      <Hero />
      <InfoBoxes />
      <HomeProperties/>
    </>
  );
}

export default Page