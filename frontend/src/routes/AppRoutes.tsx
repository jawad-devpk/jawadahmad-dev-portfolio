// import { Route, Routes } from "react-router-dom";
// import HomePage from "../pages/HomePage";
// import ProjectsPage from "../pages/ProjectsPage";
// import ProjectDetailPage from "../pages/ProjectDetailPage";

// export default function AppRoutes() {
//   return (
//     <Routes>
//       <Route path="/" element={<HomePage />} />
//       <Route path="/projects" element={<ProjectsPage />} />
//       <Route path="/projects/:slug" element={<ProjectDetailPage />} />
//     </Routes>
//   );
// }
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteScrollToTop from "../components/layout/RouteScrollToTop";
import HomePage from "../pages/HomePage";
import ProjectsPage from "../pages/ProjectsPage";
import ProjectDetailPage from "../pages/ProjectDetailPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <RouteScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
