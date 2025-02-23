import axios from "axios";
import React, { useEffect, useState } from "react";
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
  Input,
  Label,
  Row,
} from "reactstrap";

function VideoUpload() {
  //   const navigate = useNavigate();

  //   const [flag, setFlag] = useState({ 0: "" });

  const [selectedCourse, setSelectedCourse] = useState("");
  const [coursesList, setCoursesList] = useState();

  const [selectedChapter, setSelectedChapter] = useState("");
  const [chaptersList, setChaptersList] = useState([]);

  const [chaptersDataList, setChaptersDataList] = useState([]);

  const [selectedSubtopic, setSelectedSubtopic] = useState("");
  const [subtopicList, setSubtopicList] = useState();

  const [category, setCategory] = useState({});

  const [message, setMessage] = useState("");

  const [selectedSegName, setSelectedSegName] = useState("");

  const [selectedFile, setSelectedFile] = useState();

  const [isFilePicked, setIsFilePicked] = useState(false);

  const [selectedFiles, setSelectedFiles] = useState(undefined);
  const [currentFile, setCurrentFile] = useState(undefined);

  const userID = localStorage.getItem("userRoleId")
    ? JSON.parse(localStorage.getItem("userRoleId"))
    : {};

  //get course
  useEffect(() => {
    //get courses list

    const getCoursesList = async () => {
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        //destructuring original => res.data
        const { data } = await axios.post(
          "http://localhost:9090/api/elearning/getcourses",
          { userId: userID },
          config
        );

        //splite data for courses dropwdown(label:course name value:course id)
        const result = [];
        for (let index = 0; index < data.length; index++) {
          const element = data[index];
          let obj = {};
          let temp = element.split(",");

          obj.value = temp[0];
          obj.label = temp[1];
          result.push(obj);
        }

        setCoursesList(result);
        console.log(result);
        console.log("course list:", coursesList);
      } catch (error) {
        console.log(error);
      }
    };

    getCoursesList();
    // setSelectedCourse("");
    // setSelectedChapter("");
  }, []);

  //get chapters
  useEffect(() => {
    //get chapters list
    const cId = selectedCourse.value;
    // alert(cId);
    if (coursesList === undefined) {
      // alert(cId);
    } else {
      const getChaptersList = async () => {
        try {
          const config = {
            headers: {
              "Content-type": "application/json",
            },
          };
          //destructuring original => res.data
          const { data } = await axios.post(
            `http://localhost:9090/api/elearning/chaptersdata/${cId}`,

            config
          );
          console.log(data);
          //splite data for courses dropwdown(label:course name value:course id)
          const result = [];
          for (let index = 0; index < data.length; index++) {
            const element = data[index];
            let obj = {};

            obj.value = element.chapterId;
            obj.label = element.chapterTitle;

            result.push(obj);
          }

          console.log("result", result);
          // setChaptersDataList(...data);
          console.log("ch data list", chaptersDataList);
          setChaptersDataList(result);

          // setChaptersList(data);
          // console.log(result);
          // console.log("chapters list:", chaptersList);
        } catch (error) {
          console.log(error);
        }
      };
      getChaptersList();
    }
  }, [selectedCourse]);

  //get subtopics

  useEffect(() => {
    //get chapters list
    const sId = selectedChapter.value;
    // alert(cId);
    if (chaptersDataList === undefined) {
      // alert("subt", sId);
    } else {
      const getSubtList = async () => {
        try {
          const config = {
            headers: {
              "Content-type": "application/json",
            },
          };
          //destructuring original => res.data
          const { data } = await axios.post(
            `http://localhost:9090/api/elearning/subtdata/${sId}`,

            config
          );
          console.log(data);
          //splite data for courses dropwdown(label:course name value:course id)
          const result = [];
          for (let index = 0; index < data.length; index++) {
            const element = data[index];
            let obj = {};

            obj.value = element.subtId;
            obj.label = element.subtTitle;

            result.push(obj);
          }

          console.log(
            "data..",
            selectedCourse.value,
            selectedChapter.value + " " + selectedSubtopic.value
          );
          console.log("result", result);
          // setChaptersDataList(...data);
          // console.log("ch data list", chaptersDataList);
          setSubtopicList(result);

          // setChaptersList(data);
          // console.log(result);
          // console.log("chapters list:", chaptersList);
        } catch (error) {
          console.log(error);
        }
      };
      getSubtList();
    }
  }, [selectedChapter]);


  const selectFile = (event) => {
    setSelectedFiles(event.target.files);
    // setSelectedFile(event.target.files[0]);
  };

  const upload = (e) => {
    e.preventDefault();
    let currentFile = selectedFiles[0];
    setCurrentFile(currentFile);

    const uploadImage = async () => {
      let formData = new FormData();
      formData.append("image", selectedFiles[0]);

      try {
        const config = {
          headers: {
            "Content-type": "multipart/form-data",
          },
        };
        //destructuring original => res.data
        const { data } = await axios.post(
          "http://localhost:9090/api/elearning/file/uploadimg",
          {
            image: currentFile,
            courseId: selectedCourse.value,
            userId: userID,
            chapterId: selectedChapter.value,
            subtId: selectedSubtopic.value,
          },
          config
        );

        //getCoursesList();
        setSelectedCourse("");
        setSelectedChapter("");
        setSelectedSubtopic("");

        // setMnfId(data);
        // console.log(mnfId);
        alert(data.message);
      } catch (error) {
        console.log(error);
      }
    };

    

    uploadImage();
  };

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files);
    // setIsSelected(true);
  };

  const handleSubmission = async (e) => {
    e.preventDefault();
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setMessage("User Register Successfully");
   
  };

  

  const options = [
    { value: "0", label: "Select" },
    { value: "1", label: "Course" },
    { value: "2", label: "Chapter" },
    { value: "3", label: "Subtopic" },
  ];

  return (
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
        <Col sm={{ size: 6, offset: 10 }}>
          <Card style={{backgroundColor:"antiquewhite"}}>
            <CardHeader className="text-center">
              <h3>Upload Videos</h3>
            </CardHeader>
            <CardBody>
              <>
                <>
                  <Label for="">Select Course</Label>
                  <Select
                    value={selectedCourse}
                    onChange={(item) => {
                      setSelectedCourse(item);
                    }}
                    options={coursesList}
                    // getOptionValue={(item) => item}
                    // getOptionLabel={(item) => item}
                    placeholder={
                      selectedCourse === ""
                        ? "Select course for you want to upload"
                        : selectedCourse
                    }
                    required={true}
                  />
                </>

                <>
                  <Label for="">Select Chapter Title</Label>
                  <Select
                    value={selectedChapter}
                    onChange={(item) => {
                      setSelectedChapter(item);
                    }}
                    options={chaptersDataList}
                    // getOptionValue={(item) => item}
                    // getOptionLabel={(item) => item}
                    placeholder={
                      selectedChapter === ""
                        ? "Select chapter"
                        : selectedChapter
                    }
                  />
                </>

                <>
                  <Label for="">Select Subtopic Title</Label>
                  <Select
                    value={selectedSubtopic}
                    onChange={(item) => {
                      setSelectedSubtopic(item);
                    }}
                    options={subtopicList}
                    // getOptionValue={(item) => item}
                    // getOptionLabel={(item) => item}
                    placeholder={
                      selectedSubtopic === ""
                        ? "Select subtopic under u wanna upload "
                        : selectedSubtopic
                    }
                  />
                </>

                <>
                  <label className="btn btn-default">
                    <input type="file" onChange={selectFile} />
                  </label>

                  <button className="btn btn-success" onClick={upload}>
                    Upload
                  </button>
                </>
                <hr />
              </>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default VideoUpload;
