import { yupResolver } from "@hookform/resolvers/yup";
import { Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import { useFormData } from "../../../core/context/FormProvider";
import { useFormSteps } from "../../../core/context/StepProvider";
import { CustomOutlinedInput } from "../../../core/styles/custom/CustomOutlinedInput";
import { StepIntroduction } from "../../../core/styles/shared/StepIntroduction";
import { StepNavigation } from "../../../core/styles/shared/StepNavigation";

export const PersonalInfoForm = () => {
  const { setFormValues, data } = useFormData();
  const { t } = useTranslation();
  const { formStep, nextFormStep, prevFormStep } = useFormSteps();

  const personalInfoSchema = yup
    .object({
      fullName: yup.string().required(t("FULLNAME_VALIDATION")),
      email: yup
        .string()
        .email(t("EMAIL_SECOND_VALIDATION"))
        .required(t("EMAIL_VALIDATION")),
      phone: yup.string().required(t("PHONE_VALIDATION")),
    })
    .required();

  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
    getValues,
  } = useForm({
    resolver: yupResolver(personalInfoSchema),
    defaultValues: {
      fullName: data.contactInfo.fullName,
      email: data.contactInfo.email,
      phone: data.contactInfo.phone,
      note: data.contactInfo.note,
    },
  });

  const onSubmit = () => {
    const { fullName, email, phone, note } = getValues();
    setFormValues({ ...data, contactInfo: { fullName, email, phone, note } });
    nextFormStep();
  };

  return (
    <Box display={formStep === 3 ? "block" : "none"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StepIntroduction
          currentStep={formStep}
          description={t("THIRD_STEP")}
        />
        <Box px="30px" pb="45px">
          <CustomOutlinedInput
            error={Boolean(errors.fullName)}
            label={t("FULLNAME")}
            name="fullName"
            control={control}
            inputProps={register("fullName")}
            helperText={errors.fullName?.message}
          />
          <CustomOutlinedInput
            error={Boolean(errors.email)}
            label={t("EMAIL")}
            name="email"
            control={control}
            inputProps={register("email")}
            helperText={errors.email?.message}
          />
          <CustomOutlinedInput
            error={Boolean(errors.phone)}
            label={t("PHONE")}
            name="phone"
            control={control}
            inputProps={register("phone")}
            helperText={errors.phone?.message}
          />
          <CustomOutlinedInput
            error={Boolean(errors.note)}
            label={t("NOTE_OPTIONAL")}
            name="note"
            control={control}
            inputProps={register("note")}
            helperText={errors.note?.message}
            multiline={true}
            rows={3}
            paddingBottom={0}
          />
        </Box>
        <StepNavigation prevStep={prevFormStep} currentStep={formStep} />
      </form>
    </Box>
  );
};
