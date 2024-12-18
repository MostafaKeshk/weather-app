import { BrowserRouter, Route, Routes } from "react-router";
import { lazy, Suspense } from "react";
import { Paths } from "./paths";
import LoadingPage from "../components/core/LoadingPage";
import MainLayout from "../components/layouts/MainLayout";

const Home = lazy(() => import("../pages/Home"));
const CityDetails = lazy(() => import("../pages/CityDetails"));

const Navigation = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index path={Paths.home} element={<Home />} />
            <Route index path={Paths.cityDetails} element={<CityDetails />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Navigation;
