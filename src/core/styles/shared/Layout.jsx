import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import Logo from "../../../assets/tokic_logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { CustomCloseIcon } from "../custom/CustomCloseIcon";
import { menuItems } from "../../const/menuItems";
import { MobileNavbar } from "./MobileNavbar";
import { Link } from "react-router-dom";
import { ROUTES } from "../../navigation/routes.enum";
import { useTranslation } from "react-i18next";
import { useTranslationOptions } from "../../context/TranslationProvider";

export const Layout = ({ children }) => {
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const { handleEnglish, handleCroation, englishTranslation } =
    useTranslationOptions();

  const { t } = useTranslation();

  return (
    <>
      <AppBar position="fixed">
        <Toolbar disableGutters>
          <Link to={ROUTES.HOME}>
            <img src={Logo} alt="Logo" />
          </Link>
          <IconButton
            sx={{ color: "white" }}
            onClick={() => setMobileNavbar(!mobileNavbar)}
          >
            {!mobileNavbar && (
              <MenuIcon sx={{ display: { xs: "block", md: "none" } }} />
            )}
            {mobileNavbar && (
              <Box display={{ xs: "flex", md: "none" }} justifyContent="center">
                <CustomCloseIcon color="#fff" />
              </Box>
            )}
          </IconButton>
          {mobileNavbar && <MobileNavbar />}
          {menuItems(t).map((item, index) => (
            <Typography
              key={index}
              variant={item.id === 1 ? "h4" : "h5"}
              color="text.tertiary"
              fontWeight={item.id === 1 ? "bold" : "normal"}
              textTransform={item.id === 1 ? "uppercase" : "none"}
              sx={{
                flexGrow: item.id === 1 && 1,
                marginLeft: "50px",
                display: { xs: "none", md: "block" },
              }}
            >
              {item.name}
            </Typography>
          ))}
          {!mobileNavbar && (
            <IconButton
              color="secondary"
              onClick={englishTranslation ? handleCroation : handleEnglish}
              sx={{ fontSize: "14px", display: { xs: "none", md: "block" } }}
            >
              {t("LANGUAGE")}
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        height={`calc(100vh - 60px)`}
        mt="60px"
        bgcolor="background.paper"
      >
        {children}
      </Box>
    </>
  );
};
