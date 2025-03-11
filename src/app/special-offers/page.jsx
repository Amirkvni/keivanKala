import Header from "@/components/modules/header/Header";
import SpecialOffers from "@/components/templates/special-offers/SpecialOffers";
import { authUser } from "@/utils/serverHelpers";

export default function page() {
  return (
    <>
      <Header />
      <SpecialOffers />
    </>
  );
}
