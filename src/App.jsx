import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Backdrop, CircularProgress } from "@mui/material";
import { AuthProvider } from "./provider/AuthProvider/index.jsx";
import { navroutes, sideroutes } from "./routes";
import MainLayout from "./layout/MainLayout";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme/base";
import SnackBarProvider from "./provider/SnackBarProvider/index.jsx";
import LaporKlaimPage from "./pages/LaporKlaim/index.jsx";

const LoginPage = lazy(() => import("./pages/Login/index.jsx"));
const ForgotPasswordPage = lazy(() =>
  import("./pages/Login/ForgotPassword/index.jsx")
);
const ChangePasswordPage = lazy(() =>
  import("./pages/Login/ChangePassword/index.jsx")
);
const MasterUser = lazy(() => import("./pages/MasterUser/index.jsx"));
const FormCreateMU = lazy(() => import("./pages/MasterUser/Create/index.jsx"));
const FormUpdateMU = lazy(() => import("./pages/MasterUser/Update/index.jsx"));
const DaftarKlaimPage = lazy(() => import("./pages/DaftarKlaim/index.jsx"));
const DetailStatusKlaim = lazy(() =>
  import("./pages/DaftarKlaim/DetailStatusKlaim/index.jsx")
);

const ButtonPage = lazy(() => import("./pages/Testing/ButtonPage"));
const AccordionPage = lazy(() => import("./pages/Testing/AccordionPage"));
const FormPage = lazy(() => import("./pages/Testing/FormPage/index.jsx"));
const ModalPage = lazy(() => import("./pages/Testing/ModalPage/index.jsx"));
const NotFound = lazy(() => import("./pages/NotFound/index.jsx"));
const ToasterPage = lazy(() => import("./pages/Testing/ToasterPage/index.jsx"));
const StepperPage = lazy(() => import("./pages/Testing/StepperPage/index.jsx"));
const TabsPage = lazy(() => import("./pages/Testing/TabsPage/index.jsx"));
const TablePage = lazy(() => import("./pages/Testing/TablePage/index.jsx"));

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <SnackBarProvider>
          <Suspense
            fallback={
              <Backdrop open={true}>
                <CircularProgress sx={{ color: "#ffffff" }} />
              </Backdrop>
            }
          >
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route path="/login" element={<LoginPage />} />
                <Route
                  path="/forgot-password"
                  element={<ForgotPasswordPage />}
                />
                <Route
                  path="/change-password"
                  element={<ChangePasswordPage />}
                />
                <Route path="/master-user" element={<MasterUser />} />
                <Route path="/master-user/create" element={<FormCreateMU />} />
                <Route
                  path="/master-user/update/:id"
                  element={<FormUpdateMU />}
                />
                <Route path="/klaim/lapor" element={<LaporKlaimPage />} />
                <Route path="/klaim/daftar" element={<DaftarKlaimPage />} />
                <Route
                  path="/klaim/daftar/detail"
                  element={<DetailStatusKlaim />}
                />
                <Route path="/test-button" element={<ButtonPage />} />
                <Route path="/test-accordion" element={<AccordionPage />} />
                <Route path="/test-not-found" element={<NotFound />} />
                <Route path="/test-form" element={<FormPage />} />
                <Route path="/test-modal" element={<ModalPage />} />
                <Route path="/test-table" element={<TablePage />} />
                <Route path="/test-toaster" element={<ToasterPage />} />
                <Route path="/test-stepper" element={<StepperPage />} />
                <Route path="/test-tabs" element={<TabsPage />} />
                {sideroutes}
                {navroutes}
              </Route>
            </Routes>
          </Suspense>
        </SnackBarProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
