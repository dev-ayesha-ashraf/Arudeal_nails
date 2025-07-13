import Hero from "../features/Landing/Hero";
import Navbar from "../components/Navbar";
import ExclusiveCollection from "../features/Landing/ExclusiveCollection";
import Footer from "../features/Landing/Foote";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ExclusiveCollection />
      <Footer />
      {/* Add Testimonials, Featured Products, etc. */}
    </>
  );
}
