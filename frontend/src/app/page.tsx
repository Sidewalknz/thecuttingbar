import Hero from "../component/Hero";
import Divider from "../component/Divider";
import Services from "../component/Services";
import About from "@/component/About";
import Products from "@/component/Products";
import ContactCTA from "@/component/ContactCTA";

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
      <ContactCTA />
      <Divider flip />
    </>
  );
}
