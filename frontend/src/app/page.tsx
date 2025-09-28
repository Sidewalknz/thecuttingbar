import Hero from "../component/Hero";
import Divider from "../component/Divider";
import Services from "../component/Services";
import About from "@/component/About";
import Products from "@/component/Products";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Divider />
      <About />
      <Divider flip />
      <Services />
      <Divider />
      <Products />
      <Divider />
    </>
  );
}
