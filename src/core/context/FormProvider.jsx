import { useState, createContext, useContext } from "react";
import { initialFormData } from "../const/initialFormData";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [data, setData] = useState(initialFormData);

  const setFormValues = (values) => {
    setData((prevValues) => ({
      ...prevValues,
      ...values,
    }));
  };

  return (
    <FormContext.Provider value={{ data, setFormValues }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormData = () => useContext(FormContext);
