import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { increment, reset } from "../../actions/cartAction";

function CourseCard({ prop }) {
  // console.log(prop);
  const dispatch = useDispatch();

  const [isDisable, setIsDisable] = useState(false);
  
  const result = [];
  let temp = []; //holding list of previous items

  const handleBuyCourse = (item) => {
    setIsDisable(true);
    item.isDisabled = true;

    console.log(item);

    result.push(item);

    temp = JSON.parse(localStorage.getItem("Cart"));

    if (temp === null || temp === undefined) {
      console.log("in if");
      localStorage.setItem("Cart", JSON.stringify(result));
    }
    if (temp != null || temp != undefined) {
      let prevArr = [];
      let currArr = [];

      //destructure to new arr
      //push item to new arr alogn with fetched arr
      currArr = [...temp, item];
      console.log("curr arr: ", currArr);

      //set with updated arr(cart list)
      localStorage.setItem("Cart", JSON.stringify(currArr));
    }

    dispatch(increment()); //incment cart count
  };

  useEffect(() => {
    var list = JSON.parse(localStorage.getItem("Cart"));
    if (list === null || list.length < 1) {
      dispatch(reset());
    }
  }, [handleBuyCourse]);

  return (
  //  <Card style={{ width: '18rem',height:'2rem'}} >
    <>
      <section style={{ backgroundColor: "#eee" }}>
        <div className="card" style={{ borderRadius: "15px" }}>
          <div
            className="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
            data-mdb-ripple-color="light"
          >
            {/* Image you can change from here */}
            <img
               src="https://cdn.elearningindustry.com/wp-content/uploads/2021/08/Top-5-Benefits-Of-eLearning-Education.png"
             // src={require(`../../assets/images/${pName}.jpg`)}
              style={{
                borderTopLeftRadius: "15px",
                borderTopRightRadius: "15px",
              }}
              className="img-fluid"
              alt="Laptop"
            />
            <a href="#!">
             
            </a>
          </div>
          <div className="card-body pb-0">
            <div className="d-flex justify-content-between">
              <div>
                <p>
                  <a href="#!" className="text-dark">
                    {prop.courseTitle}
                  </a>
                </p>
                <p className="small text-muted">{prop.courseCategory}</p>
              </div>
              <div>
                <p className="small">
                  Rated <span className="text-danger">4.0/5</span>
                </p>
              </div>
            </div>
          </div>
          <hr className="my-0" />
          <div className="card-body pb-0">
            <div className="d-flex justify-content-between">
              <p>
                <a href="#!" className="text-dark">
                  ₹{prop.coursePrice} only
                </a>
              </p>
              <p className="text-success">{prop.courseType}</p>
            </div>
          </div>
          <hr className="my-0" />
          <div className="card-body" >
            <div className="d-flex justify-content-between align-items-center pb-2 mb-1">
              
              <button
                type="button"
                className="btn btn-primary"
                
                disabled={
                  prop.isDisabled === true ? true : isDisable ? true : false
                }
                onClick={() => {
                  handleBuyCourse(prop);
                }}
              >
                {prop.courseType === "paid" ? "Buy now" : "Enroll now"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
   // </Card> 
     );
}

export default CourseCard;
