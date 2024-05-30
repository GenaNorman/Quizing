// import "./index.css";
// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import AdminDashboardPage from "./pages/AdminDashboardPage";
// // import StudentDashboardPage from "./pages/StudentDashboardPage";
// // import ContentCreatorDashboardPage from "./pages/ContentCreatorDashboardPage";
// // import CoursesPage from "./pages/CoursesPage";
// // import ExamsPages from "./pages/ExamsPages";
// // import NotesPage from "./pages/NotesPage";
// // import ProfilePage from "./pages/ProfilePage";
// // import LoginPage from "./pages/LoginPage";
// // import SignUpPage from "./pages/SignUpPage";
// // import DashboardPage from "./pages/Dashboard/Admin";
// // import GeneralCoursesPage from "./pages/GeneralCoursesPage";
// // import EnrolledCoursesPage from "./pages/EnrolledCoursesPage";
// // import HndExamsPage from "./pages/HndExamsPage";
// // import BscExamsPage from "./pages/BscExamsPage";
// // import GceExamsPage from "./pages/GceExamsPage";
// // import VideoPage from "./pages/VideoPage";
// // import BillingPage from "./pages/BillingPage";
// // import PageNotFoundPage from "./pages/PageNotFoundPage";
// // import PapersPage from "./pages/PapersPage";
// import { StatesContext } from "./context/StatesContextApi";
// import Admin from "./pages/Dashboard/Admin";
// // import PdfPages from "./pages/PdfPages";
// // import CourseDetailsPage from "./pages/CourseDetailsPage";

// function App() {
//   return (
//     <StatesContext>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Admin />}>
//             {/* <Route path="admindashboard" element={<AdminDashboardPage />} /> */}
//             {/* <Route path="studentdashboard" element={<StudentDashboardPage />} />
//             <Route
//               path="contentdashboard"
//               element={<ContentCreatorDashboardPage />}
//             /> */}
//           </Route>

//           {/* <Route path="exams" element={<ExamsPages />}>
//             <Route path="hndexams" element={<HndExamsPage />} />
//             <Route path="hndexams/papers" element={<PapersPage />} />
//             <Route path="hndexams/papers/pdf" element={<PdfPages />} />
//             <Route path="bscexams" element={<BscExamsPage />} />
//             <Route path="gceexams" element={<GceExamsPage />} />
//           </Route>

//           <Route path="/video" element={<VideoPage />} />
//           <Route path="courses" element={<CoursesPage />}>
//             <Route path="general" element={<GeneralCoursesPage />} />
//             <Route
//               path="/courses/general/course"
//               element={<CourseDetailsPage />}
//             />
//             <Route path="enrolled" element={<EnrolledCoursesPage />} />
//           </Route>

//           <Route path="notes" element={<NotesPage />} />
//           <Route path="billing" element={<BillingPage />} />
//           <Route path="profile" element={<ProfilePage />} />
//           <Route path="login" element={<LoginPage />} />
//           <Route path="home" element={<SignUpPage />} />
//           <Route path="*" element={<PageNotFoundPage />} />
//         */}
//         </Routes>
//       </BrowserRouter>
//     </StatesContext>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPage from "./pages/Dashboard/AdminPage";
import CreatorPage from "./pages/Dashboard/CreatorPage";
import StudentPage from "./pages/Dashboard/StudentPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminPage />} />
        <Route path="admin" element={<AdminPage />} />
        <Route path="creator" element={<CreatorPage />} />
        <Route path="student" element={<StudentPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
