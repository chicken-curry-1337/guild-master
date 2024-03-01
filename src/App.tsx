import { Game } from "$lib/pages/game/ui";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SettingsScreen from "./lib/pages/settings/ui";
import SaveScreen from "./lib/pages/save/ui";
import LoadScreen from "./lib/pages/load/ui";
import MainMenuScreen from "./lib/pages/mainMenu/ui";
import { Chars } from "$lib/widgets/chars";
import { Missions } from "$lib/widgets/missions/ui";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainMenuScreen />,
  },
  {
    path: "/game",
    element: <Game />,
    children: [
      {
        path: "/game/chars",
        element: <Chars />,
      },
      {
        path: "/game/missions",
        element: <Missions />,
      },
    ],
  },
  {
    path: "/settings",
    element: <SettingsScreen />,
  },
  {
    path: "/save",
    element: <SaveScreen />,
  },
  {
    path: "/load",
    element: <LoadScreen />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
