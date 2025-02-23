import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import "./components/about/About.css";

import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

import { useSelector } from "react-redux";
import ApproveRequest from "./components/admin/ApproveRequest";
import ManageCourses from "./components/admin/ManageCourses";
import ManageUsers from "./components/admin/ManageUsers";
import FileUpload from "./components/course/FileUpload";
import NewCourse from "./components/course/NewCourse";
import NewCourseChapter from "./components/course/NewCourseChapter";
import NewCourseSubtopic from "./components/course/NewCourseSubtopic";
import VideoUpload from "./components/course/VideoUpload";
import Aproove from "./components/instructor/Aproove";
import OrderConfirmation from "./components/invoice/OrderConfirmation";
import PageNotFound from "./components/pnf/PageNotFound";
import BrowseCategoryPage from "./components/student/BrowseCategoryPage";
import MyCart from "./components/student/MyCart";
import RegisteredCourses from "./components/student/RegisteredCourses";
import AdminScreen from "./screens/AdminScreen";

import CourseScreen from "./screens/CourseScreen";
import InstructorScreen from "./screens/InstructorScreen";
import StudentScreen from "./screens/StudentScreen";

function App() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <div className="container-fluid p-0 m-0">
      <BrowserRouter>
        {userInfo ? (
          <>
            {/* <Sidebar /> */}
            <Header />
            <div>
              <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route exact path="/login" element={<LoginScreen />} />
                <Route exact path="/register" element={<RegisterScreen />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/admin" element={<AdminScreen />} />
                <Route exact path="/admin/courses"element={<ManageCourses />}/>
                <Route exact path="/admin/users" element={<ManageUsers />} />
                <Route exact path="/admin/approve/users/" element={<ApproveRequest />}/>
                <Route exact path="/instructor" element={<InstructorScreen />}/>
                <Route exact path="/student" element={<StudentScreen />} />
                <Route exact path="/student/cart" element={<MyCart />} />
                <Route exact path="/student/browse/:courseCatId" element={<BrowseCategoryPage />}/>
                {/* <Route path=":courseCatId" element={<Invoice />} /> */}
                <Route exact path="/student/allcourses/:userId" element={<RegisteredCourses />}/>
                <Route exact path="/student/access/course/:cId" element={<CourseScreen />} />
                <Route exact path="/student/confirm" element={<OrderConfirmation />}/>
                <Route exact path="/instruct/tutorial" element={<NewCourse />} />
                <Route exact path="/instruct/tutorial/topic" element={<NewCourseChapter />}/>
                <Route exact path="/instruct/tutorial/subtopic" element={<NewCourseSubtopic />} />
                <Route exact path="/instruct/videoup" element={<VideoUpload />}/>
                <Route exact path="/instruct/fileup" element={<FileUpload />} />
                <Route exact path="/instruct/approve" element={<Aproove />} />
                <Route exact path="*" element={<PageNotFound />} />
              </Routes>
            </div>
            <Footer />
          </>
        ) : (
          <>
            <Header />

            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route exact path="/login" element={<LoginScreen />} />
              <Route exact path="/register" element={<RegisterScreen />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />

          </>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
