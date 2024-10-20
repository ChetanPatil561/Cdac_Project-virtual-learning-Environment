import React, { useEffect, useState } from "react";
import silde from "../assets/7.jpg"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { logout, register } from "../actions/userActions";
import { onlyChar, onlyPhone } from "../data/Regex";
import Select from "react-select";
import Footer from "../components/footer/Footer";


function RegisterScreen() {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [address, setAddress] = useState("");
  const [category, setCategory] = useState({});
  const [phoneNo, setPhoneNo] = useState("");

  // const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, userInfo } = userRegister;

  const [pwdError, setPwdError] = useState(false);
  const [phError, setPhError] = useState(false);
  const [unameError, setUnameError] = useState(false);
  const [fnameError, setFnameError] = useState(false);
  const [lnameError, setLnameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [addressError, setAddressError] = useState(false);

  var flag = true;
  //   const [items, setItems] = useState([]);

  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem('items'));
  //   if (items) {
  //    setItems(items);
  //   }
  // }, []);

  useEffect(() => {
    if (userInfo) {
      localStorage.clear();
      dispatch(logout());
      navigate("/login");
    }
  }, [userInfo, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!onlyChar.test(userName)) {
      setUnameError(true);
      flag = true;
    }
    if (!onlyChar.test(firstName)) {
      setFnameError(true);
      flag = true;
    }
    if (!onlyChar.test(lastName)) {
      setLnameError(true);
      flag = true;
    }
    if (pass.length < 6) {
      setPwdError(true);
      flag = true;
    }
    if (address.length < 25) {
      setAddressError(false);
      flag = true;
    }

    if (!onlyPhone.test(phoneNo)) {
      setPhError(true);
      flag = true;
    } else {
      flag = false;
    }

    console.log("flag", flag);

    if (flag === false) {
      dispatch(
        register(
          userName,
          firstName,
          lastName,
          email,
          pass,
          address,
          phoneNo,
          category.value
        )
      );
    }
    // setMessage("User Register Successfully");
  };

  const reset = () => {
    setUserName("");
    setFirstName("");
    setLastName("");
    setAddress("");
    setPass("");
    setEmail("");
    setCategory({});
    setPhoneNo("");

    //err
    setPhError(false);
    setPwdError(false);
    setFnameError(false);
    setLnameError(false);
    setUnameError(false);
    setEmailError(false);
    setAddressError(false);
  };

  var option = [
    { value: 2, label: "Instructor" },
    { value: 3, label: "Student" },
  ];
  const [Verifed,setVerifed]=useState(false);
  function onChange(value) {
    console.log("Captcha value:", value);
    setVerifed(true);
  }
  return (
<div
      className="img"
      style={{
        backgroundImage: 'url("https://myrhline.com/wp-content/uploads/2022/06/e-learning-session-de-formation-en-ligne.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
    <Container className="my-5 ">
      <Row className="pt-5">
        <Col sm={{ size: 6, offset: 3}}>
          <Card style={{backgroundColor:"antiquewhite"}}>
            <CardHeader className="text-center">
              <h1> <b>Register Here</b></h1>
            </CardHeader>
            <CardBody>
              <Form onSubmit={submitHandler}>
                <FormGroup>
                  <Label for="firstName">User Name</Label>
                  <Input
                    id="userName"
                    placeholder="Enter user name"
                    type="text"
                    value={userName}
                    autoCapitalize="off"
                    style={{textTransform:"none"}}  
                    onChange={(e) => setUserName(e.target.value)}
                   
                  />
                  {unameError && (
                  <p style={{ color: "red" }}> Enter valid username.</p>
                )}
                </FormGroup>
                <FormGroup>
                  <Label for="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    placeholder="Enter first name"
                    type="text"
                    value={firstName}
                    autoCapitalize="off"
                    style={{textTransform:"none"}}  
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </FormGroup>
                {fnameError && (
                  <p style={{ color: "red" }}>Only text data alloved.</p>
                )}

                <FormGroup>
                  <Label for="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    placeholder="Enter last name"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    autoCapitalize="off"
                    style={{textTransform:"none"}}
                  />
                </FormGroup>
                {lnameError && (
                  <p style={{ color: "red" }}>Only text data alloved.</p>
                )}

                <FormGroup>
                  <Label for="userEmail">Email</Label>
                  <Input
                    id="userEmail"
                    placeholder="Enter email"
                    type="email"
                    value={email}
                    autoCapitalize="off"
                    style={{textTransform:"none"}}  
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>
                {emailError && (
                  <p style={{ color: "red" }}>Enter valid Email-id.</p>
                )}
                <FormGroup>
                  <Label for="userPassword">Password</Label>
                  <Input
                    id="userPassword"
                    placeholder="password placeholder"
                    type="password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                  />
                </FormGroup>
                {pwdError && (
                  <p style={{ color: "red" }}>
                    Please enter min 6 digits password.
                  </p>
                )}

                <FormGroup>
                  <Label for="phoneNo">Phone No.</Label>
                  <Input
                    id="phoneNo"
                    placeholder="Enter phone no"
                    type="number"
                    value={phoneNo}
                    onChange={(e) => setPhoneNo(e.target.value)}
                    // required
                  />
                </FormGroup>
                {phError && (
                  <p style={{ color: "red" }}>Please enter min 10 mobile no.</p>
                )}

                <FormGroup>
                  <Label for="userAddress">Address</Label>
                  <Input
                    id="userAddress"
                    type="textarea"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    autoCapitalize="off"
                    style={{textTransform:"none"}}
                  />
                </FormGroup>
                {addressError && (
                  <p style={{ color: "red" }}>Address length should be Min 10 char reuired</p>
                )}
                <>
                  <Label for="">Select Roll</Label>
                  <Select  color="dark" inverse
                    value={category}
                    onChange={(item) => {
                      setCategory(item);
                    }}
                    options={option}
                    // getOptionValue={(item) => item}
                    // getOptionLabel={(item) => item}
                    placeholder={
                      category === {} ? "Select Category" : category.label
                    }
                    required={true}
                  />
                </>
                
                <br></br>
                   
                <Container className="text-center text-white">
                  <Button type="submit" className="btn btn-success text-white" outline >
                    Submit
                  </Button>
                  <Button type="button" onClick={reset} className="btn btn-success text-white ms-2">
                    reset
                  </Button>
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

export default RegisterScreen;
