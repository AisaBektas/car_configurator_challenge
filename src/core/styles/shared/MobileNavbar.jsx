import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React, { Fragment } from "react";
import { menuItems } from "../../const/menuItems";
import { useTranslation } from "react-i18next";
import { useTranslationOptions } from "../../context/TranslationProvider";

export const MobileNavbar = () => {
  const { t } = useTranslation();
  const { handleEnglish, handleCroation, englishTranslation } =
    useTranslationOptions();

  return (
    <Box
      position="absolute"
      bgcolor="background.paper"
      display={{ xs: "block", md: "none" }}
      height="100vh"
      top="60px"
      bottom={0}
      left={0}
      right={0}
    >
      <Box display="flex" justifyContent="flex-end">
        <IconButton
          color="primary"
          onClick={englishTranslation ? handleCroation : handleEnglish}
          sx={{ fontSize: "14px", marginRight: "20px" }}
        >
          {t("LANGUAGE")}
        </IconButton>
      </Box>
      <List>
        {menuItems(t).map((item, index) => (
          <Fragment key={index}>
            <ListItem>
              <Typography
                variant={item.id === 1 ? "h4" : "h5"}
                fontWeight={item.id === 1 ? "bold" : "normal"}
                color="primary"
              >
                {item.name}
              </Typography>
            </ListItem>
            {menuItems.length - 1 > index && <Divider />}
          </Fragment>
        ))}
      </List>
    </Box>
  );
};
