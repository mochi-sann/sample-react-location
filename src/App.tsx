import { Link, Outlet, Router } from "@tanstack/react-location";
import React from "react";
import { location, routes } from "./Router";

export const App: React.VFC = () => {
  return (
    <div>
      {" "}
      <Router routes={routes} location={location}>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="posts">Posts</Link>
            </li>
          </ul>
        </div>
        <Outlet /> {/* パスが一致した際にレンダリングされるコンポーネント */}
      </Router>
      Homeページ
    </div>
  );
};

export default App;
