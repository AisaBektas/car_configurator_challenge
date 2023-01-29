import { useState, Fragment } from "react";
import Dialog from "@mui/material/Dialog";
import { Box, IconButton, Typography } from "@mui/material";
import { CarGroupForm } from "../../../modules/home/components/CarGroupForm";
import { ServicesForm } from "../../../modules/home/components/ServicesForm";
import { PersonalInfoForm } from "../../../modules/home/components/PersonalInfoForm";
import { MainReviewForm } from "../../../modules/home/components/MainReviewForm";
import { ConfirmMessage } from "./ConfirmMessage";
import { CustomCloseIcon } from "../custom/CustomCloseIcon";
import { useFormData } from "../../context/FormProvider";
import { StyledPrimaryButton } from "../styled/StyledPrimaryButton";
import { useFormSteps } from "../../context/StepProvider";
import { useTranslation } from "react-i18next";

export const FormDialog = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const { setFormValues } = useFormData();
  const { formStep, setFormStep } = useFormSteps();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setFormValues({
      carGroup: "",
      services: [],
      coupon: { isActive: false, content: "" },
      contactInfo: { fullName: "", email: "", phone: "", note: "" },
    });
    setOpen(false);
    setFormStep(1);
  };

  return (
    <Fragment>
      <StyledPrimaryButton variant="contained" onClick={handleClickOpen}>
        {t("START_BUTTON")}
      </StyledPrimaryButton>
      <Dialog open={open} onClose={handleClose}>
        <Box
          py={2.5}
          bgcolor="background.default"
          width={{ xs: "auto", md: 600 }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            pl="30px"
            pr={2.5}
          >
            <Typography variant="h3" fontWeight={500}>
              {t("SERVICE_CONFIGURATOR")}
            </Typography>
            <IconButton disableRipple onClick={handleClose} sx={{ padding: 0 }}>
              <CustomCloseIcon />
            </IconButton>
          </Box>
          <Box>
            {formStep === 1 && <CarGroupForm handleClose={handleClose} />}
            {formStep === 2 && <ServicesForm />}
            {formStep === 3 && <PersonalInfoForm />}
            {formStep === 4 && <MainReviewForm />}
            {formStep > 4 && <ConfirmMessage handleClose={handleClose} />}
          </Box>
        </Box>
      </Dialog>
    </Fragment>
  );
};
