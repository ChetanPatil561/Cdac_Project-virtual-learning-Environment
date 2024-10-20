import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";
import { useNavigate } from "react-router-dom";
import loginvalidation from "../loginvalidation"
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import axios from "axios";
import Footer from "../components/footer/Footer";

function LoginScreen() {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");

  const [roleName, setRoleName] = useState("");

  const dispatch = useDispatch();
  const [user,setUser]=useState({
    "userid":"",
    "pwd":""
})
const [submitted,setSubmitted]=useState(false)
const [errors,setErrors]=useState({})
const [errmsg,setErrmsg]=useState()

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    console.log("in use effect");

    if (userInfo) {
      const getRoleName = async () => {
        try {
          const config = {
            headers: {
              "Content-type": "application/json",
            },
          };
          //destructuring original => res.data
          const { data } = await axios.post(
            "http://localhost:9090/api/elearning/rolename",
            { userName: userInfo },
            config
          );

          setRoleName(data);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      };

      getRoleName();

    }
  }, [userInfo]);

  useEffect(() => {
    if (roleName !== "") {
      // roleName === "Admin" ? navigate("/admin") : navigate("/instructor");

      roleName === "Admin"
        ? navigate("/admin")
        : roleName === "Instructor"
        ? navigate("/instructor")
        : roleName === "Student"
        ? navigate("/student")
        : navigate("/login");
    }
  }, [roleName]);

  const submitHandler = (e) => {
    e.preventDefault();
    setErrors(loginvalidation(user))    
    setSubmitted(true)
    dispatch(login(userName, pass));
    // setMessage("Login Successfully");
  };

  return (
    <div
    className="img"
    style={{
      backgroundImage: 'url("https://www.talentlms.com/old/wp-content/uploads/2018/08/is-elearning-your-best-choice.jpg")',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      minHeight: '50vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Container className="my-5">
      <br />
      <Row className="py-5">
        <Col sm={{ size: 5, offset: 2 }}>
          <Card style={{backgroundColor:"antiquewhite"}}>
            <CardHeader className="text-center">
              <h1><b>Login Here </b></h1>
            </CardHeader>
            <CardBody>
              <Form onSubmit={submitHandler}>
                <FormGroup>
                  <Label for="userEmail">Username</Label>
                  <Input
                    id="userEmail"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Enter Username"
                    type="text"
                    autoCapitalize="off"
                    style={{textTransform:"none"}}  
                  />
                  {errors.userid && <small className="text-danger float-right">{errors.userid}</small>}
                </FormGroup>

                <FormGroup>
                  <Label for="userPassword">Password</Label>
                  <Input
                    id="userPassword"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    placeholder="Enter password"
                    type="password"
                    autoCapitalize="off"
                    style={{textTransform:"none"}}  
                  />
                   {errors.pwd && <small className="text-danger float-right">{errors.pwd}</small>}
                </FormGroup>

                <Container className="text-center">
                  <Button type="submit" className="btn btn-primary">
                    Login
                  </Button>
                  {errmsg && <p className="alert alert-danger mt-4 text-center font-weight-bold">{errmsg}</p>}
                </Container>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    
    </Container>
    </div>
    
    
  );
}

export default LoginScreen;
