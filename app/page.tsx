import Categories from "@/components/shared/Categories";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Latest from "@/components/shared/Latest";
import Map from "@/components/shared/Map";
import Banner from "@/components/shared/Banner";
import Divider from "@/components/shared/Divider";


export default function Home() {
  return (
    <>
      <Banner/>
      <Divider iconUrl="/assets/arrow-down.svg" width={64} height={64} mt={32} mb={32} type="icon-only"/>
      <Categories/>
      <Divider iconUrl="/assets/wave1-up.svg" width={1536} height={320} mt={32} mb={32} type="icon-only"/>
      <Latest/>
      <Divider iconUrl="/assets/wave1-down.svg" width={1536} height={320} mt={10} mb={32} type="icon-only"/>
      <Map/>
    </>
  );
}
