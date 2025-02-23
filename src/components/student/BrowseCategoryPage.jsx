import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Card, Button, CardTitle, CardText } from "reactstrap";
import CourseCard from "./CourseCard";

function BrowseCategoryPage() {
  let params = useParams();
  // alert(params.courseCatId);

  const [coursesListByCat, setCoursesListByCat] = useState([]);

  useEffect(() => {
    const getCoursesByCatID = async () => {
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        //destructuring original => res.data
        const { data } = await axios.post(
          `http://localhost:9090/api/elearning/student/getcourses/${params.courseCatId}`
        );

        console.log(data);

        setCoursesListByCat(data);
        // setCoursesList(result);
      } catch (error) {
        console.log(error);
      }
    };

    getCoursesByCatID();
  }, [params.courseCatId]);

  return (
    <Container className="py-5">
      <Row className="my-5">
        <h3 className="text-primary">{params.courseCatName}</h3>
        <hr />

        {coursesListByCat.map((item) => {
          return (
            <div class="col-xl-3 col-sm-6 py-2" key={item.courseId}>
              <CourseCard prop={item} />
            </div>
          );
        })}

       
      </Row>
    </Container>
  );
}

export default BrowseCategoryPage;
