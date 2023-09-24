import Container from "@/components/ui/Container";
import { satoshiBold } from "@/components/utils/font";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="h-[10vh] grid place-items-center">
      <Container className="flex justify-between items-center">
        <p
          className={`${satoshiBold.className} text-secondary text-2xl tracking-[4px]`}
        >
          &#x2f;&#x2f;m
        </p>

        <AiOutlineMenu className="hidden w-5 h-5 md:block" />
      </Container>
    </nav>
  );
};

export default Navbar;
