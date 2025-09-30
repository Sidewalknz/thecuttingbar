"use client";

import HeroWhite from "@/component/HeroWhite";
import Divider from "@/component/Divider";
import styles from "./Shop.module.css";

export default function ShopPage() {
  const heroText = `The Cutting Bar is owned and operated by Claire Chicken. Originally from the UK, Claire moved to New Zealand with her partner in 2009. They planned to stay for just two years, but fell in love with the country and made Aotearoa their home.

After 12 years’ experience in the hairdressing industry, Claire opened The Cutting Bar—bringing together the best of salons and barbershops to create a relaxed, friendly environment for everyone.`;

  return (
    <>
      <HeroWhite
        kicker="-Shop-"
        title="Explore our range"
        subtitle={heroText}
      />
      <Divider />

    </>
  );
}
