import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { Forecast, MyLocation, Today } from "./pages";
import { useAxios, useSetBg } from "./hooks";

const RoutController = () => {
  const data: any = useAxios("forecast");
  useEffect(() => {
    useSetBg(data);
  }, [data]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Today currentData={data} />} />
        <Route path="/today" element={<Today currentData={data} />} />
        <Route path="/forecast" element={<Forecast forecastData={data} />} />
        <Route
          path="/mylocation"
          element={<MyLocation locationData={data} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RoutController />
  </React.StrictMode>
);
