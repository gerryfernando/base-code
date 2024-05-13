import { Route } from "react-router-dom";
import PageWrapper from "../layout/PageWrapper";
import sidebarRoutes from "./sidebarRoutes";
import navbarRoutes from "./navbarRoutes";

const generateRoute = (routes) => {
  return routes.map((route, index) =>
    !route.child ? (
      <Route
        path={route?.path}
        element={
          <PageWrapper
            state={route.state}
            displayText={route?.displayProps?.displayText}
          >
            {route.element}
          </PageWrapper>
        }
        key={index}
      />
    ) : (
      route.child.map((childRoute, childIndex) => (
        <Route
          path={childRoute?.path}
          element={
            <PageWrapper
              state={childRoute?.state}
              displayText={childRoute?.displayProps?.displayText}
            >
              {childRoute?.element}
            </PageWrapper>
          }
          key={childIndex}
        />
      ))
    )
  );
};

export const sideroutes = generateRoute(sidebarRoutes);
export const navroutes = generateRoute(navbarRoutes);
