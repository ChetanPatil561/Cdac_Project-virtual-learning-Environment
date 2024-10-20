import React from 'react'
import Footer from '../footer/Footer'

function About() {
  
  return (
    <> 
      <main role="main" className='mt-5'>
           
           <div className="container about_text">
           <hr />
               <div className="row">
                   <div className="col-md-4  ">
                       <div className="text-center mt-2">
                           <img 
                           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDjLcfTSSYNL6SUYLsb4PgMKK_f5rtamjkRA&usqp=CAU" 
                           alt={"Logo"} className="bd-placeholder-img  " width="140" height="140" />
                           <h2>Vision</h2>
                       </div>
                       <p className="text-justify">
                       "At our elearning platform, we envision a world where education knows no boundaries. Our mission is to empower learners of all ages and backgrounds to embark on a journey of knowledge and growth. 
                        
                     By offering a diverse range of high-quality courses, expert instructors, and an interactive learning environment, we aim to create a space where curiosity is nurtured and skills are honed. 
                       
                       We believe in the transformational power of education, and our vision is to make learning accessible, engaging, and transformative for every individual, fostering a community of lifelong learners who thrive in an ever-evolving world."
                       </p>

                   </div>
                   <div className="col-md-4  ">
                       <div className="text-center mt-2">
                           <img 
                           src="https://cdn-icons-png.flaticon.com/512/3588/3588639.png" 
                           alt={"Logo"} className="bd-placeholder-img " width="140" height="140" />
                           <h2>Mission</h2>
                       </div>
                       <p className="text-justify">
                       "At our elearning platform, our mission is to provide accessible and exceptional learning experiences that empower individuals to reach their full potential. Through a diverse array of meticulously crafted courses, interactive tools, and passionate instructors, we strive to make education a catalyst for personal and professional growth. Our commitment is to create a dynamic and inclusive online community where learners can explore, discover, and master new skills. We aim to revolutionize the way people learn, fostering a culture of continuous learning that transcends borders and empowers minds."
                       </p>

                   </div>
                   <div className="col-md-4  ">
                       <div className="text-center mt-2">
                           <img 
                           src="https://cdn-icons-png.flaticon.com/512/2068/2068627.png" 
                           alt={"Logo"} className="bd-placeholder-img" width="140" height="140" />
                           <h2>Why Us</h2>
                       </div>
                       <p className="text-justify">
                       "Why choose us? Our elearning platform stands out as a beacon of innovation and excellence in education. With a carefully curated selection of courses designed to cater to diverse interests and learning styles, we ensure that every learner finds their path to success. Our dedicated team of experienced educators and industry experts ensures that you receive top-notch instruction and insights. We offer a seamless and user-friendly interface, making learning enjoyable and convenient. Join our vibrant community of learners and unlock your potential in an environment that encourages collaboration, growth, and lifelong learning."

                       </p>
                   </div>
               </div>

               <hr />

           </div>

       </main>


    
    
    </>
  )
}

export default About







