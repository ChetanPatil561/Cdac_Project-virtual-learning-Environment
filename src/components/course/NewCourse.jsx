import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
} from "reactstrap";
import { addcourse } from "../../actions/userActions";
function NewCourse() {
  const [courseTitle, setCourseTitle] = useState("");
  const [courseDesc, setCourseDesc] = useState("");
  const [courseType, setCourseType] = useState("");
  const [coursePrice, setCoursePrice] = useState(0);
  const [courseCategory, setCourseCategory] = useState("");
  const [loggedInUser, setLoggedInUser] = useState("");

  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userID = localStorage.getItem("userRoleId")
    ? JSON.parse(localStorage.getItem("userRoleId"))
    : {};

  const options = [
    { value: "0", label: "Select" },
    { value: "1", label: "TECHNOLOGY" },
    { value: "2", label: "BUSINESS" },
    { value: "3", label: "HEALTH" },
    { value: "4", label: "LANGUAGES" },
  ];

  useEffect(() => {
    const getSegIdBySegName = async () => {
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

        setLoggedInUser(data);
        console.log(loggedInUser);
      } catch (error) {
        console.log(error);
      }
    };

    getSegIdBySegName();
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    const courseThumbPath = "";
    const introVideoPath = "";
    console.log("useid ", userID);
    console.log("course cat", courseCategory);

    dispatch(
      addcourse(
        courseTitle,
        courseDesc,
        courseType,
        coursePrice,
        courseThumbPath,
        introVideoPath,
        userID,
        courseCategory.value
      )
    );

    setCourseCategory("");
    setCourseDesc("");
    setCoursePrice("");
    setCourseTitle("");
    setCourseType("");

    // setMessage("User Register Successfully");
  };

  return (
    <>
   
    <div
    className="img"
    style={{
      backgroundImage: 'url("https://img.freepik.com/free-vector/online-certification-illustration_23-2148575636.jpg?w=2000")',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      minHeight: '80vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width:"1000px"
    }}
  >
    <Container className="mt-5">
      <Row className="pt-5 mb-5">
        <Col sm={{ size: 6, offset:10 }}>
          <Card style={{backgroundColor:"antiquewhite"}}>
            <CardHeader className="text-center">
              <h3>Add New Course</h3>
            </CardHeader>
            <CardBody>
              <Form onSubmit={submitHandler}>
                <FormGroup>
                  <Label for="firstName">Course Title</Label>
                  <Input
                    id="userName"
                    placeholder="Enter Course Title"
                    type="text"
                    value={courseTitle}
                    onChange={(e) => setCourseTitle(e.target.value)}
                    required
                    autoCapitalize="off"
                    style={{textTransform:"none"}}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="userAddress">Course Description</Label>
                  <Input
                    id="userAddress"
                    type="textarea"
                    value={courseDesc}
                    onChange={(e) => setCourseDesc(e.target.value)}
                   required
                   autoCapitalize="off"
                    style={{textTransform:"none"}}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="courseSelect">Select Course Type</Label>
                  <Input
                    id="courseSelect"
                    name="xyz"
                    type="select"
                    value={courseType}
                    onChange={(e) => {
                      setCourseType(e.target.value);
                      if (courseType === "free") {
                        setCoursePrice(0);
                      }
                    }}
                    required
                  >
                    <option value="0">Select</option>
                    <option value="paid">Paid</option>
                    <option value="free">Free</option>
                  </Input>
                </FormGroup>

                <FormGroup>
                  <Label for="coursePrice">Price</Label>
                  <Input
                    id="coursePrice"
                    placeholder="Enter cource price"
                    type="text"
                    value={coursePrice}
                    onChange={(e) => {
                      setCoursePrice(e.target.value);
                      if (courseType === "free") {
                        setCoursePrice(0);
                      }
                    }}
                    required
                  />
                </FormGroup>

                <Select
                  value={courseCategory}
                  onChange={(item) => {
                    setCourseCategory(item);
                  }}
                  options={options}
                  placeholder={
                    courseCategory === "" ? "Select " : courseCategory
                  }
                />
                <Container className="text-center">
                  <Button type="submit" color="success" className="mt-3">
                    Submit
                  </Button>             
                </Container>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
     </>
  );
}

export default NewCourse;

