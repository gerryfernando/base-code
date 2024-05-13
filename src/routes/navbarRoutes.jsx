import MainPage from "../pages/MainPage";

const navbarRoutes = [
  {
    path: "/home",
    element: <MainPage />,
    state: "home",
    displayProps: {
      displayText: "Home",
    },
  },
  {
    path: "/klaim",
    element: <MainPage />,
    state: "klaim",
    displayProps: {
      displayText: "Klaim",
    },
  },
  {
    path: "/bengkel-rekanan",
    element: <MainPage />,
    state: "bengkel.rekanan",
    displayProps: {
      displayText: "Bengkel Rekanan",
    },
  },
  {
    path: "/faq",
    element: <MainPage />,
    state: "faq",
    displayProps: {
      displayText: "FAQ",
    },
  },
];

export default navbarRoutes;
