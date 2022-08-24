import React from "react";
import { Menu, MenuItem } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { MenuProps } from "@mui/material/Menu";
import { useRouter } from "next/router";

import { ChevronDown } from "../../../ChevronDown";

import { Button } from "./styles";

type NavMenuItem = {
  title: string;
  subtitle: string;
  route: string;
};

interface NavButtonProps {
  label: string;
  variant: "transparent" | "colored";
  menuItems: NavMenuItem[];
}

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "left",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "left",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 4,
    marginTop: theme.spacing(3.75),
    minWidth: 317,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "8px 0 0 0",
    },
    "& .MuiMenuItem-root": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "1.5rem 1rem 1rem",
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
      "b, p": {
        textAlign: "center",
      },
      b: {
        fontSize: "1rem",
        color: "#1A3547",
        fontWeight: "600",
      },
      p: {
        fontSize: "0.75rem",
        color: "#567C82",
        marginTop: "0.625rem",
      },
      hr: {
        width: "100%",
        margin: 0,
        opacity: 0.2,
        background: "#DEE7EECC",
        position: "absolute",
        bottom: -1,
      },
    },
    "&::after": {
      content: `""`,
      position: "absolute",
      top: 0,
      width: "100%",
      height: 8,
      borderRadius: "4px 4px 0 0",
      background: "linear-gradient(92.48deg, #9DC8CF 3.44%, #263B58 111.01%)",
    },
  },
}));

export function NavButton({
  label,
  menuItems,
  variant = "transparent",
}: NavButtonProps) {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        type="button"
        className={`${variant} ${open ? "open" : ""}`}
        onClick={handleClick}
      >
        {label}
        <ChevronDown />
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {menuItems?.map((item, index) => {
          return (
            <MenuItem
              onClick={() => {
                router.push(item.route);
                handleClose();
              }}
              disableRipple
              key={item.route}
            >
              <b>{item.title}</b>
              <p>{item.subtitle}</p>
              {index !== menuItems?.length - 1 && <hr />}
            </MenuItem>
          );
        })}
      </StyledMenu>
    </>
  );
}
