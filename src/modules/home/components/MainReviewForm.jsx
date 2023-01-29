import { Box, Typography } from "@mui/material";
import { useFormData } from "../../../core/context/FormProvider";
import { StepIntroduction } from "../../../core/styles/shared/StepIntroduction";
import { StepNavigation } from "../../../core/styles/shared/StepNavigation";
import { useFormSteps } from "../../../core/context/StepProvider";
import { CustomEditContainer } from "../../../core/styles/custom/CustomEditContainer";
import { PriceContainer } from "./PriceContainer";
import { checkContactInfo } from "../../../core/const/checkContactInfo";
import { useTranslation } from "react-i18next";
import { useTranslationOptions } from "../../../core/context/TranslationProvider";

export const MainReviewForm = () => {
  const { data } = useFormData();
  const { t } = useTranslation();
  const { formStep, nextFormStep, prevFormStep, setFormStep } = useFormSteps();
  const { englishTranslation } = useTranslationOptions();

  const sum = data?.services?.reduce(
    (acc, service) => (acc = acc + Number(service.price)),
    0
  );

  const discount = (30 / 100) * sum;

  const total = data?.coupon.isActive ? sum - (30 / 100) * sum : sum;

  const saveData = () => {
    console.log("data", data);
    nextFormStep();
  };

  return (
    <Box display={formStep === 4 ? "block" : "none"}>
      <StepIntroduction currentStep={formStep} description={t("FOURTH_STEP")} />
      <Box mx="30px" bgcolor="background.paper" p="10px" mb="25px">
        <CustomEditContainer
          borderBottom={1}
          title={t("CARS_MODEL")}
          handleEdit={() => setFormStep(1)}
        >
          <Typography variant="h5" color="text.primary">
            {data?.carGroup}
          </Typography>
        </CustomEditContainer>
        <CustomEditContainer
          borderBottom={1}
          title={t("SELECTED_SERVICES")}
          handleEdit={() => setFormStep(2)}
        >
          {data?.services.map((service, key) => (
            <Box display="flex" justifyContent="space-between" key={key}>
              <Typography
                variant="h5"
                color="text.primary"
                sx={{ marginRight: "10px" }}
              >
                {service.name}
              </Typography>
              <Typography variant="h5" color="text.primary">
                {Number(service.price).toFixed(2)} &euro;
              </Typography>
            </Box>
          ))}
          {data?.coupon.isActive && (
            <PriceContainer
              title={t("DISCOUNT")}
              hasDiscount={true}
              price={discount}
            />
          )}
          <PriceContainer title={t("TOTAL")} price={total} />
        </CustomEditContainer>
        <CustomEditContainer
          title={t("CONTACT_INFO")}
          handleEdit={() => {
            setFormStep(3);
          }}
        >
          {Object.entries(data.contactInfo).map(([key, value], index) => (
            <Box
              display={{ xs: "block", md: "flex" }}
              width="100%"
              key={index}
              pb="3px"
            >
              <Box
                width={{ xs: "100%", md: englishTranslation ? "30%" : "20%" }}
              >
                {value.length > 0 && (
                  <Typography variant="h5" color="text.secondary">
                    {checkContactInfo(key, t)}:
                  </Typography>
                )}
              </Box>
              <Box
                width={{ xs: "100%", md: englishTranslation ? "70%" : "80%" }}
              >
                <Typography variant="h5" color="text.primary">
                  {value}
                </Typography>
              </Box>
            </Box>
          ))}
        </CustomEditContainer>
      </Box>
      <StepNavigation
        prevStep={prevFormStep}
        nextStep={saveData}
        currentStep={formStep}
      />
    </Box>
  );
};
