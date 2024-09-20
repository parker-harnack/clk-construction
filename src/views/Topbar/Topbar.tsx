import { useState } from "react";
/** Components */
import { Stack, Box, Menu, MenuButton, MenuList } from "@chakra-ui/react";
import { LinkItem, Logo, MenuToggle, NavContainer } from "./components";

interface ITopbarProps {
  [rest: string]: any;
}

const Topbar = ({ ...rest }: ITopbarProps) => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  const renderLinks = () => {
    return (
      <Box
        display={{ base: open ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Stack
          spacing={8}
          align="center"
          justify={["center", "flex-start", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <LinkItem href="/#experience">Experience</LinkItem>
          <LinkItem href="/archive">Archive</LinkItem>
          <LinkItem href="/#about">About</LinkItem>
        </Stack>
      </Box>
    );
  };

  return (
    <NavContainer {...rest}>
      <Logo />
      <MenuToggle toggle={toggle} open={open} />
      {renderLinks()}
    </NavContainer>
  );
};
export default Topbar;
