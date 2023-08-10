import Link from "next/link";
import { styled } from "@mui/material";
import Image from "next/image";

const LinkStyled = styled(Link)(() => ({
  height: "70px",
  width: "180px",
  overflow: "hidden",
  display: "flex",
  alignItems:"center"
}));

const Logo = () => {
  return (
    <LinkStyled href="/">
      <Image src="/images/logos/sponsoloLogo.png" alt="logo" height={35} width={180} priority />
    </LinkStyled>
  );
};

export default Logo;
