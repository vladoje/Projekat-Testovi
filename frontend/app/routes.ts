/*
select lekcija







Dobrodosao slideshow i login-endgoal
*/

import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";
const routes = [
  ...prefix("/", [
    route("/login", "./components/Login.tsx"),
    route("/register", "./components/Register.tsx"),
    route("/forgot-password", "./components/ForgotPassword.tsx"),

    index("./pages/UserDashboard.tsx"),

    ...prefix("categorija/:categorija", [index("./pages/SelectTest.tsx")]),
    ...prefix("lekcija/:lekcija", [index("./pages/SelectLekcija.tsx")]),

    route("/profile", "./pages/UserProfile.tsx"),
    route("/napredak", "./pages/UserProgress.tsx"),

    route("/shop", "./pages/Shop.tsx"),

    route("/test/:tip/:id/:method", "./pages/Test.tsx"),
    route("/results/:id", "./pages/Results.tsx"),

    route("/faq", "./pages/FAQ.tsx"),
    route("/privacy-policy", "./pages/PrivacyPolicy.tsx"),
  ]),
  route("*", "./components/NotFound.tsx"),
];
export default routes satisfies RouteConfig;
