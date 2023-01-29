import { useForm } from "react-hook-form";
import { useFormData } from "../../../core/context/FormProvider";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  Typography,
} from "@mui/material";
import { Controller } from "react-hook-form";
import Checkmark from "../../../assets/icons/checkmark icon.svg";
import { useEffect, useState } from "react";
import { StepIntroduction } from "../../../core/styles/shared/StepIntroduction";
import { StepNavigation } from "../../../core/styles/shared/StepNavigation";
import { carServices } from "../../../core/const/carServices";
import { useFormSteps } from "../../../core/context/StepProvider";
import { StyledCouponButton } from "../../../core/styles/styled/StyledCouponButton";
import { StyledCouponIconButton } from "../../../core/styles/styled/StyledCouponIconButton";
import { CustomOutlinedInput } from "../../../core/styles/custom/CustomOutlinedInput";
import { couponCode } from "../../../core/const/couponCode";
import { useTranslation } from "react-i18next";

export const ServicesForm = () => {
  const { setFormValues, data } = useFormData();
  const { t } = useTranslation();
  const { formStep, nextFormStep, prevFormStep } = useFormSteps();
  const [currentCouponCode, setCurrentCouponCode] = useState("");

  const sum = data?.services?.reduce(
    (acc, service) => (acc = acc + Number(service.price)),
    0
  );

  const total = data?.coupon.content !== "" ? sum - (30 / 100) * sum : sum;

  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
    getValues,
    setValue,
    setError,
    clearErrors,
  } = useForm({
    defaultValues: {
      services: data.services,
      coupon: data.coupon.content,
    },
  });

  const onSubmit = () => {
    nextFormStep();
  };

  const checkCoupon = () => {
    const { coupon } = getValues();
    if (coupon === couponCode) {
      setFormValues({
        ...data,
        coupon: { isActive: true, content: coupon },
      });
      clearErrors("coupon");
    } else {
      setError(
        "coupon",
        {
          type: "focus",
          message: t("COUPON_VALIDATION"),
        },
        { shouldFocus: true }
      );
    }
  };

  const openCouponField = () => {
    if (data?.services?.length !== 0 && data.coupon.content === "") {
      setFormValues({
        ...data,
        coupon: { isActive: !data.coupon.isActive, content: "" },
      });
      setValue("coupon", "");
      setCurrentCouponCode("");
    } else {
      setFormValues({
        ...data,
        coupon: { isActive: false, content: "" },
      });
    }
  };

  useEffect(() => {
    if (data.services.length === 0) {
      setFormValues({ ...data, coupon: { isActive: false, content: "" } });
      setValue("coupon", "");
    }
  }, [data.services]);

  return (
    <Box display={formStep === 2 ? "block" : "none"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StepIntroduction
          currentStep={formStep}
          description={t("SECOND_STEP")}
        />
        <Box px="40px" pb="20px">
          <FormControl error={!!errors?.services}>
            <Grid container>
              <Controller
                name="services"
                control={control}
                render={({ field }) =>
                  carServices(t).map((item) => (
                    <Grid
                      key={item.id}
                      item
                      xs={12}
                      md={6}
                      sx={{
                        marginBottom: "10px",
                      }}
                    >
                      <FormControlLabel
                        sx={{ margin: 0 }}
                        label={
                          <Typography variant="h5" color="text.primary">
                            {item.name + " "}
                            <span style={{ color: "#004289" }}>
                              &#40;{item.price}&euro;&#41;
                            </span>
                          </Typography>
                        }
                        control={
                          <Checkbox
                            {...field}
                            checked={data?.services
                              ?.map((val) => val.id)
                              .includes(item.id)}
                            onChange={() => {
                              if (
                                !data?.services
                                  ?.map((val) => val.id)
                                  .includes(item.id)
                              ) {
                                setFormValues({
                                  ...data,
                                  services: [...data?.services, item],
                                });
                              } else {
                                setFormValues({
                                  ...data,
                                  services: data?.services?.filter((val) => {
                                    return val.id !== item.id;
                                  }),
                                });
                              }
                            }}
                          />
                        }
                      />
                    </Grid>
                  ))
                }
              />
              <FormHelperText>{errors?.services?.message}</FormHelperText>
            </Grid>
          </FormControl>
        </Box>
        <Box
          display={{ xs: "block", md: "flex" }}
          justifyContent="space-between"
          alignItems="center"
          bgcolor="background.paper"
          mx="30px"
          px="15px"
          py="20px"
          mb="25px"
        >
          <Box>
            <StyledCouponButton disableRipple onClick={() => openCouponField()}>
              {t("COUPON_BUTTON")}
            </StyledCouponButton>
            {data?.coupon.isActive && (
              <Box display="flex" my={{ xs: 1, md: 0 }}>
                <CustomOutlinedInput
                  error={Boolean(errors.coupon)}
                  name="coupon"
                  control={control}
                  inputProps={register("coupon")}
                  helperText={errors.coupon?.message}
                  paddingBottom={0}
                  onChange={(e) => {
                    setCurrentCouponCode(e.target.value);
                    if (currentCouponCode.length === 1) {
                      setFormValues({
                        ...data,
                        coupon: {
                          isActive: data.coupon.isActive,
                          content: "",
                        },
                      });
                    }
                  }}
                />
                <StyledCouponIconButton
                  disableRipple
                  disabled={
                    !currentCouponCode?.length && !data.coupon.content.length
                  }
                  onClick={checkCoupon}
                >
                  <img src={Checkmark} alt="checkmark" />
                </StyledCouponIconButton>
              </Box>
            )}
          </Box>
          <Box display={{ xs: "block", md: "flex" }} alignItems="center">
            <Typography
              color="text.primary"
              textTransform="uppercase"
              variant="h4"
              sx={{ marginRight: "10px" }}
            >
              {t("TOTAL")}:
            </Typography>
            <Typography color="primary" variant="h3">
              {total > 0 ? total.toFixed(2) : 0}
              &euro;
            </Typography>
          </Box>
        </Box>
        <StepNavigation
          prevStep={prevFormStep}
          currentStep={formStep}
          disabled={data?.services?.length === 0}
        />
      </form>
    </Box>
  );
};
