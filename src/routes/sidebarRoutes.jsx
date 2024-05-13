import {
  ArticleOutlined,
  InsertChartOutlined,
  NotificationsOutlined,
  QuestionMarkOutlined,
} from "@mui/icons-material";
import MainPage from "../pages/MainPage";
import LaporKlaimPage from "../pages/LaporKlaim";

const sidebarRoutes = [
  {
    path: "/halaman-utama",
    element: <MainPage />,
    state: "halaman.utama",
    displayProps: {
      displayText: "Halaman Utama",
      icon: <InsertChartOutlined size="22px" />,
    },
  },
  {
    path: "/klaim",
    displayProps: {
      displayText: "Klaim",
      icon: <ArticleOutlined size="22px" />,
    },
    child: [
      {
        path: "/klaim/lapor",
        element: <LaporKlaimPage />,
        state: "klaim.lapor",
        displayProps: {
          displayText: "Lapor Klaim",
        },
      },
      {
        path: "/klaim/daftar",
        element: <MainPage />,
        state: "klaim.daftar",
        displayProps: {
          displayText: "Daftar Klaim",
        },
      },
    ],
  },
  {
    path: "/notifikasi",
    element: <MainPage />,
    state: "notifikasi",
    displayProps: {
      displayText: "Notifikasi",
      icon: <NotificationsOutlined size="22px" />,
    },
  },
  {
    path: "/faq",
    element: <MainPage />,
    state: "faq",
    displayProps: {
      displayText: "FAQ",
      icon: <QuestionMarkOutlined size="22px" />,
    },
  },
];

export default sidebarRoutes;
