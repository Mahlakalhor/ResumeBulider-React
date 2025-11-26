import { Feature } from "../components/Feature";
import { Header } from "../components/Header";
import { Home } from "../components/Home";
import { Testimonials } from "../components/TestimonialCard";

export const Hero = () => {
  return (
    <div className="flex flex-col gap-48 ">
      <Header />
      <Home />
      <Feature />
      <Testimonials/>
    </div>
  );
};
