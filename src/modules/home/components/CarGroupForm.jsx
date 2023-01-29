import { useForm } from "react-hook-form";
import { useFormData } from "../../../core/context/FormProvider";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  RadioGroup,
  Radio,
} from "@mui/material";
import { useState } from "react";
import { StepIntroduction } from "../../../core/styles/shared/StepIntroduction";
import { StepNavigation } from "../../../core/styles/shared/StepNavigation";
import { carGroups } from "../../../core/const/carGroups";
import { useFormSteps } from "../../../core/context/StepProvider";
import { useTranslation } from "react-i18next";

export const CarGroupForm = ({ handleClose }) => {
  const { setFormValues, data } = useFormData();
  const { formStep, nextFormStep } = useFormSteps();
  const { t } = useTranslation();

  const [carGroup, setCarGroup] = useState(data.carGroup);

  const handleChangeCarGroup = (event) => {
    setCarGroup(event.target.value);
  };

  const {
    handleSubmit,
    formState: { errors },
    register,
    getValues,
  } = useForm({
    defaultValues: {
      carGroup: data.carGroup,
    },
  });

  const onSubmit = () => {
    const { carGroup } = getValues();
    setFormValues({ ...data, carGroup });
    nextFormStep();
  };

  return (
    <Box display={formStep === 1 ? "block" : "none"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StepIntroduction
          currentStep={formStep}
          description={t("FIRST_STEP")}
        />
        <Box px="40px" pb={3}>
          <FormControl error={Boolean(errors.carGroup)}>
            <RadioGroup
              row
              value={carGroup}
              onChange={handleChangeCarGroup}
              aria-label="carGroup"
              name="carGroup"
            >
              <Grid container>
                {carGroups.map((group, key) => (
                  <Grid
                    key={key}
                    item
                    xs={12}
                    md={4}
                    sx={{ marginBottom: "10px" }}
                  >
                    <FormControlLabel
                      value={group.name}
                      control={<Radio {...register("carGroup")} />}
                      label={group.name}
                    />
                  </Grid>
                ))}
              </Grid>
            </RadioGroup>
            <FormHelperText sx={{ margin: 0 }}>
              {errors.carGroup?.message}
            </FormHelperText>
          </FormControl>
        </Box>
        <StepNavigation
          prevStep={handleClose}
          currentStep={formStep}
          disabled={carGroup === ""}
        />
      </form>
    </Box>
  );
};
