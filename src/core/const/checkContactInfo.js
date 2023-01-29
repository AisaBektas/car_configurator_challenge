export const checkContactInfo = (contactInfo, t) => {
  switch (contactInfo) {
    case "fullName":
      return t("FULLNAME");
    case "email":
      return t("EMAIL");
    case "phone":
      return t("PHONE");
    case "note":
      return t("NOTE");
  }
};
