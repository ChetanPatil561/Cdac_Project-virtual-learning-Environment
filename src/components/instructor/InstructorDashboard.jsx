import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function InstructorDashboard() {
  const [uid, setUid] = useState();
  const [aproveStatus, setAproveStatus] = useState("no");

  //dashboard count
  const [coursesCnt, setCoursesCnt] = useState(0);
  const [totalEarn, setTotalEarn] = useState(0);
  const [totalEnroll, setTotalEnroll] = useState(0);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

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

      setUid(data);

      const d = await axios.get(
        `http://localhost:9090/api/elearning/admin/aprovestatus/${data}`,

        config
      );

      setAproveStatus(d.data);

      //total earn
      const earn = await axios.get(
        `http://localhost:9090/api/elearning/revenue/${uid}`,
        config
      );

      setTotalEarn(earn.data);

      console.log(d);

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  getIdByName();

  //get total course count
  const getCrCount = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      //destructuring original => res.data
      const { data } = await axios.get(
        `http://localhost:9090/api/elearning/instruct/totalcourses/${uid}`,
        config
      );
      setCoursesCnt(data);

      //total earn
      const earn = await axios.get(
        `http://localhost:9090/api/elearning/revenue/${uid}`,
        config
      );

      setTotalEarn(earn.data);
    } catch (error) {
      console.log(error);
    }
  };
  getCrCount();



  const getTotalEnroll = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const enrollCnt = await axios.get(
        `http://localhost:9090/api/elearning/instruct/enroll/${uid}`,
        config
      );

      setTotalEnroll(enrollCnt.data);
    } catch (error) {
      console.log(error);
    }
  };
  getTotalEnroll();

  useEffect(() => {
    if (uid) {
      // alert("effect", uid);

      const getUserAproveStatus = async () => {
        try {
          const config = {
            headers: {
              "Content-type": "application/json",
            },
          };
          //destructuring original => res.data
          const { data } = await axios.get(
            `http://localhost:9090/api/elearning/admin/aprovestatus/${uid}`,
            config
          );

          setAproveStatus(data);

          console.log("status", aproveStatus);
        } catch (error) {
          console.log(error);
        }
      };

      getUserAproveStatus();
    }
  }, [uid]);

  return (
    <>
      {/* {aproveStatus === "no"
        ? alert("To create new courses, please get approve first")
        : ""} */}
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

                <span class="ms-1 d-none d-sm-inline">Teacher Dashboard</span>
              </a>
            </li>
            {aproveStatus === "yes" ? (
              <>
                <li>
                  <a
                    href="#submenu3"
                    data-bs-toggle="collapse"
                    class="nav-link px-0 align-middle"
                  >
                    <i class="fa fa-user" aria-hidden="true"></i>
                    <span class="ms-1 d-none d-sm-inline">
                      Manage Tutorials
                    </span>
                    <i class="fa fa-angle-down " aria-hidden="true"></i>
                  </a>
                  <ul
                    class="collapse nav flex-column ms-1 pl-5"
                    id="submenu3"
                    data-bs-parent="#menu"
                    // style={{ backgroundColor: "#57b960" }}
                  >
                    <li class="w-100 ml-2">
                      <Link to="/instruct/tutorial" class="nav-link px-2">
                        <i
                          class="fa fa-arrow-right px-1 "
                          aria-hidden="true"
                        ></i>
                        <span class="d-none d-sm-inline">Create Tutorial</span>
                      </Link>
                    </li>
                    
                    <li class="w-100 ml-2">
                      <Link to="/instruct/tutorial/topic" class="nav-link px-2">
                        <i
                          class="fa fa-arrow-right px-1"
                          aria-hidden="true"
                        ></i>
                        <span class="d-none d-sm-inline">Add Topics</span>
                      </Link>
                    </li>
                    
                    <li>
                      <Link to="/instruct/tutorial/subtopic" class="nav-link px-2">
                        <i
                          class="fa fa-arrow-right px-1"
                          aria-hidden="true"
                        ></i>
                        <span class="d-none d-sm-inline">Add Sub Topic</span>
                      </Link>
                    </li>
                    <li class="w-100 ml-2">
                      <Link to="/instruct/videoup" class="nav-link px-2">
                        <i
                          class="fa fa-arrow-right px-1"
                          aria-hidden="true"
                        ></i>
                        <span class="d-none d-sm-inline">Upload Videos</span>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#" class="nav-link px-0 align-middle">
                    <i class="fa fa-inr" aria-hidden="true"></i>

                    <span class="ms-1 d-none d-sm-inline ">Revenue</span>
                  </a>
                </li>
              </>
            ) : (
              ""
            )}

            {aproveStatus === "" ? (
              <li>
                <Link to="/instruct/approve" class="nav-link px-0 align-middle">
                  <i class="fa fa-check" aria-hidden="true"></i>

                  <span class="ms-1 d-none d-sm-inline ">Get Approve</span>
                </Link>
              </li>
            ) : (
              console.log("aprove,", aproveStatus)
            )}

            <li>
              <a
                href="#submenu2"
                data-bs-toggle="collapse"
                class="nav-link px-0 align-middle "
              >
                <i class="fa fa-bell" aria-hidden="true"></i>
                <span class="ms-1 d-none d-sm-inline">Announcements</span>
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
            <div class="card bg-success text-white h-100">
              <div
                class="card-body bg-success"
                style={{ backgroundColor: "#57b960" }}
              >
                <div class="card-image">
            <img src="https://cdn-icons-png.flaticon.com/512/2620/2620163.png" alt="User Icon" style={{width:"250px"}} />
          </div>
                <div class="rotate">
                  <i class="fa fa-user fa-4x"></i>
                </div>
                <h6 class="text-uppercase">Total Enrollments</h6>
                <h1 class="display-4">{totalEnroll}</h1>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 py-2">
            <div class="card text-white bg-danger h-100">
              <div class="card-body bg-danger">
              <div class="card-image">
            <img src="https://cdn-icons-png.flaticon.com/512/1754/1754435.png" alt="User Icon" style={{width:"250px"}}/>
          </div>
                <div class="rotate">
                  <i class="fa fa-list fa-4x"></i>
                </div>
                <h6 class="text-uppercase">Total Courses</h6>
                <h1 class="display-4">{coursesCnt}</h1>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 py-2">
            <div class="card text-white bg-info h-100">
              <div class="card-body bg-info">
              <div class="card-image">
            <img src="https://cdn-icons-png.flaticon.com/512/6553/6553997.png" alt="User Icon" style={{width:"250px"}}/>
          </div>
                <div class="rotate">
                  <i class="fa fa-inr fa-4x"></i>
                </div>
                <h6 class="text-uppercase">Total Earnings</h6>
                <h1 class="display-4">{totalEarn}</h1>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 py-2">
            <div class="card text-white bg-warning h-100">
              <div class="card-body">
              <div class="card-image">
            <img src="https://cdn-icons-png.flaticon.com/512/3437/3437338.png" alt="User Icon" style={{width:"250px"}}/>
          </div>
                <div class="rotate">
                  <i class="fa fa-share fa-4x"></i>
                </div>
                <h6 class="text-uppercase">Shares</h6>
                <h1 class="display-4">36</h1>
              </div>
            </div>
          </div>
        </div>

        <hr />
        {aproveStatus === "" ? (
          <marquee width="100%" behavior="scroll" bgcolor="pink">
            Please get approved first, to be an instructor on this platform.
          </marquee>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default InstructorDashboard;
