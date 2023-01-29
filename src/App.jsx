import { CssBaseline } from "@mui/material";
import { StyledEngineProvider, ThemeProvider } from "@mui/system";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FormProvider } from "./core/context/FormProvider";
import { StepProvider } from "./core/context/StepProvider";
import { TranslationProvider } from "./core/context/TranslationProvider";
import { ROUTES } from "./core/navigation/routes.enum";
import { theme } from "./core/styles/mui/theme";
import { HomePage } from "./modules/home/pages/HomePage";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <TranslationProvider>
          <StepProvider>
            <FormProvider>
              <BrowserRouter>
                <Routes>
                  <Route path={ROUTES.HOME} element={<HomePage />} />
                </Routes>
              </BrowserRouter>
            </FormProvider>
          </StepProvider>
        </TranslationProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
