import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      LANGUAGE: "CR",
      SERVICE_CONFIGURATOR: "The service configurator",
      CALCULATION_TEXT: "Calculate the service cost",
      START_BUTTON: "Start the configurator",
      START_DESCRIPTION: "Press the button below to start",
      STEP: "Step",
      FIRST_STEP: "Choose the manufacturer of your car",
      SECOND_STEP: "Choose one or more services you need",
      THIRD_STEP: "Personal info",
      FOURTH_STEP: "Review and confirmation of your selection",
      CHECK_MESSAGE:
        "Please review and confirm the information once again. If you want to change some of the data, you can press the edit button next to each of the categories. When you have checked the correctness of your data, press the “Submit”  button at the bottom to send a request to the service.",
      CONFIRM_MESSAGE: "Your application has been successfully sent",
      CONFIRM_DESCRIPTION:
        "Your application has been successfully sent and received. We will contact you as soon as possible",
      THANK_YOU: "Thank you",
      NEXT_BUTTON: "Next",
      PREVIOUS_BUTTON: "Back",
      CANCEL_BUTTON: "Cancel",
      SEND_BUTTON: "Submit",
      COUPON_BUTTON: "have a coupon",
      EDIT_BUTTON: "Edit",
      CLOSE_BUTTON: "Close",
      TOTAL: "Total",
      FULLNAME: "Name and surname",
      EMAIL: "Email address",
      PHONE: "Phone number",
      NOTE: "Note",
      NOTE_OPTIONAL: "Note (optional)",
      FULLNAME_VALIDATION: "Name and surname are required!",
      EMAIL_VALIDATION: "Email address is required!",
      PHONE_VALIDATION: "Phone number is required!",
      EMAIL_SECOND_VALIDATION: "Email address is not valid!",
      COUPON_VALIDATION: "Coupon code is not valid",
      CONTACT_INFO: "Contact info",
      CARS_MODEL: "Car model",
      SELECTED_SERVICES: "Selected services",
      DISCOUNT: "Discount 30%",
      FIRST_SERVICE: "Oil and filter change",
      SECOND_SERVICE: "Air conditioning service",
      THIRD_SERVICE: "Change of packs",
      FOURTH_SERVICE: "Tire balancing",
      FIFTH_SERVICE: "Tire change",
      SIXTH_SERVICE: "Brake oil change",
    },
  },
  hr: {
    translation: {
      LANGUAGE: "EN",
      SERVICE_CONFIGURATOR: "Konfigurator servisa",
      CALCULATION_TEXT: "Izračunajte trošak servisa",
      START_BUTTON: "Pokreni konfigurator",
      START_DESCRIPTION: "Pritisnite gumb niže kako biste pokrenuli",
      STEP: "Korak",
      FIRST_STEP: "Odaberite proizvođača vašeg vozila",
      SECOND_STEP: "Odaberite jednu ili više usluga koju trebate",
      THIRD_STEP: "Vaši podaci",
      FOURTH_STEP: "Pregled i potvrda vašeg odabira",
      CHECK_MESSAGE:
        "Molimo vas da još jednom pregledate i potvrdite podatke. Ukoliko želite promijeniti neki od podataka, možete pritisnuti gumb za uređivanje pored svake od kategorija. Kada ste provjerili ispravnost svojih podataka, za slanje upita na servis pritisnite gumb “Pošalji” koji se nalazi na dnu.",
      CONFIRM_MESSAGE: "Vaša prijava je uspješno poslana",
      CONFIRM_DESCRIPTION:
        "Vaša prijava je uspješno poslana i zaprimljena. Kontaktirat ćemo vas u najkraćem mogućem roku",
      THANK_YOU: "Hvala vam",
      NEXT_BUTTON: "Dalje",
      PREVIOUS_BUTTON: "Nazad",
      CANCEL_BUTTON: "Odustani",
      SEND_BUTTON: "Pošalji",
      COUPON_BUTTON: "imam kupon",
      EDIT_BUTTON: "Uredi",
      CLOSE_BUTTON: "Zatvori",
      TOTAL: "Ukupno",
      FULLNAME: "Ime i prezime",
      EMAIL: "Email adresa",
      PHONE: "Broj telefona",
      NOTE: "Napomena",
      NOTE_OPTIONAL: "Napomena (opcionalno)",
      FULLNAME_VALIDATION: "Potrebno je unijeti ime i prezime!",
      EMAIL_VALIDATION: "Potrebno je unijeti email adresu!",
      PHONE_VALIDATION: "Potrebno je unijeti broj telefona!",
      EMAIL_SECOND_VALIDATION: "Email adresa nije validna!",
      COUPON_VALIDATION: "Vaš kod nije validan!",
      CONTACT_INFO: "Kontakt podaci",
      CARS_MODEL: "Model vozila",
      SELECTED_SERVICES: "Odabrane usluge",
      DISCOUNT: "Popust 30%",
      FIRST_SERVICE: "Zamjena ulja i filtera",
      SECOND_SERVICE: "Servis klima uređaja",
      THIRD_SERVICE: "Promjena pakni",
      FOURTH_SERVICE: "Balansiranje guma",
      FIFTH_SERVICE: "Promjena guma",
      SIXTH_SERVICE: "Zamjena ulja na kočnicama",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "hr",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
