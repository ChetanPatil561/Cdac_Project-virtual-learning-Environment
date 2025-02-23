import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function AdminDashboard() {
  const [userId, setUserId] = useState();

  const [instructCount, setInstructCount] = useState();
  const [studCount, setUserCount] = useState();
  const [totalCourses, setTotalCourses] = useState();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    const getIdByName = async () => {
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        //destructuring original => res.data
        const { data } = await axios.post(
          "http://localhost:9090/api/elearning/getuid",
          { userName: userInfo },
          config
        );

        setUserId(data);
      } catch (error) {
        console.log(error);
      }
    };

    getIdByName();
  }, []);

  useEffect(() => {
    const getInstructCount = async () => {
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        //destructuring original => res.data
        const { data } = await axios.get(
          "http://localhost:9090/api/elearning/admin/inctruct/count",
          config
        );

        setInstructCount(data);
      } catch (error) {
        console.log(error);
      }
    };

    const getStudCount = async () => {
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };

        const userCnt = await axios.get(
          "http://localhost:9090/api/elearning/admin/students/count",
          config
        );

        setUserCount(userCnt.data);
      } catch (error) {
        console.log(error);
      }
    };

    const getCourseCnt = async () => {
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };

        const courseCnt = await axios.get(
          "http://localhost:9090/api/elearning/admin/totalcourscnt/",
          config
        );

        setTotalCourses(courseCnt.data);
      } catch (error) {
        console.log(error);
      }
    };

    getStudCount();
    getInstructCount();
    getCourseCnt();
  }, []);

  return (
    <>
      <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 sidebar" style={{ backgroundColor: 'darkgreen', /* other styles */ }}>
        <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
          <a
            href="/"
            class="d-flex align-items-center pt-5 mb-md-0 me-md-auto  text-decoration-none"
          >
            <span class="fs-5 d-none d-sm-inline"></span>
          </a>
          <ul
            class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start "
            id="menu"
          >
            <li class="nav-item mt-2">
              <a href="#" class="nav-link align-middle px-0">
                <i class="fa fa-home" aria-hidden="true"></i>

                <span class="ms-1 d-none d-sm-inline">Admin Dashboard</span>
              </a>
            </li>
            <li>
              <Link to={"/admin/courses"} class="nav-link px-0 align-middle">
                <i class="fa fa-book" aria-hidden="true"></i>
                <span class="ms-1 d-none d-sm-inline ">Manage Courses</span>
              </Link>
            </li>
            <li>
              <Link to={"/admin/users"} class="nav-link px-0 align-middle">
                <i class="fa fa-users" aria-hidden="true"></i>
                <span class="ms-1 d-none d-sm-inline ">Manage Users</span>
              </Link>
            </li>

            <li>
              <Link
                to={`/admin/approve/users/`}
                class="nav-link px-0 align-middle"
              >
                <i class="fa fa-check" aria-hidden="true"></i>
                <span class="ms-1 d-none d-sm-inline ">Approve Requests</span>
              </Link>
            </li>
            <li>
              <a
                href="#submenu2"
                data-bs-toggle="collapse"
                class="nav-link px-0 align-middle "
              >
                {/* <i class="fa fa-bell" aria-hidden="true"></i> */}
                {/* <span class="ms-1 d-none d-sm-inline">Announcements</span> */}
              </a>
              <ul
                class="collapse nav flex-column ms-1"
                id="submenu2"
                data-bs-parent="#menu"
              ></ul>
            </li>
            
          </ul>
          <hr />
         
        </div>
      </div>
      <div class="col py-3">
        <div class="row mt-5">
          <div class="col-xl-3 col-sm-6 py-2">
            <div class="card bg-danger text-white h-100">
              <div
                class="card-body bg-danger"
                style={{ backgroundColor: "#57b960" }}
              >
                <div class="card-image">
            <img src="https://cdn-icons-png.flaticon.com/256/236/236831.png" alt="User Icon" />
          </div>
                <div class="rotate">
                  <i class="fa fa-users fa-4x"></i>
                </div>
                <h6 class="text-uppercase">Total Users</h6>
                <h1 class="display-4">
                  {Number(instructCount) + Number(studCount)}
                </h1>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 py-2">
            <div class="card text-white bg-success h-100">
              <div class="card-body bg-success">
              <div class="card-image">
            <img src="https://cdn-icons-png.flaticon.com/512/1089/1089129.png" alt="User Icon" style={{width:"250px"}} />
          </div>
                <div class="rotate">
                  <i class="fa fa-list fa-4x"></i>
                </div>
                <h6 class="text-uppercase">Total Instructors</h6>
                <h1 class="display-4">{instructCount}</h1>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 py-2">
            <div class="card text-white bg-info h-100">
              <div class="card-body bg-info">
              <div class="card-image">
            <img src="https://cdn-icons-png.flaticon.com/512/4696/4696723.png" alt="User Icon" style={{width:"250px"}}/>
          </div>
                <div class="rotate">
                  <i class="fa fa-user fa-4x"></i>
                </div>
                <h6 class="text-uppercase">Total Students</h6>
                <h1 class="display-4">{studCount}</h1>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 py-2">
            <div class="card text-white bg-warning h-100">
              <div class="card-body">
              <div class="card-image">
            <img src="https://cdn-icons-png.flaticon.com/512/1754/1754435.png" alt="User Icon" style={{width:"250px"}}/>
          </div>
                <div class="rotate">
                  <i class="fa fa-share fa-4x"></i>
                </div>
                <h6 class="text-uppercase">Total Courses</h6>
                <h1 class="display-4">{totalCourses}</h1>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}

export default AdminDashboard;
