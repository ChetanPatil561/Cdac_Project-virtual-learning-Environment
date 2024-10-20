import React from 'react';
import './AlternateLayout.css'; // Import CSS file

const data = [
  {
    image: 'https://img.freepik.com/free-vector/script-writing-software-engineering-coding-workshop-code-created-workshop-online-programming-course-apps-games-development-class-concept_335657-818.jpg?w=1480&t=st=1684493125~exp=1684493725~hmac=7ca68c028d1360e4a05c8b9c7eb3eea084660a5c2e8014c1622c05fa75f6174e',
    heading: 'Discover an enhanced test-taking experience',
    description: 'Flexible assessment types and customizable feedback support educators’ unique approaches while providing learners with control of strategies best suited for their assessment success—all resulting in easier and more effective teaching and learning..',
  },
  {
    image: 'https://img.freepik.com/free-photo/daily-life-business-people-office_53876-47111.jpg?w=1480&t=st=1684493313~exp=1684493913~hmac=f71ada5b9b606714cd4a443ec8a6b97b3327cffa77c35a3c8fee7aad3fb5f3de',
    heading: 'Deliver an inclusive learning environment',
    description: 'Personalized learning experiences, which offer learners the flexibility to access courses on the go, empower expression within an equitable, all-encompassing ecosystem—built with accessibility in mind.',
  },
  {
    image: 'https://img.freepik.com/free-photo/e-learning-education-networking-website-study-concept_53876-167089.jpg?w=1380&t=st=1684493352~exp=1684493952~hmac=8a0f55900154276ab69fed608fd27c01ddf6bc27f11cf9a7324bb80877d31d04',
    heading: 'Inject autonomy and action',
    description: 'Data insights drive success and provide engaging learning experiences. Learners can track their own progress, identify next steps, and get the support they need. Instructors can identify disengaged or struggling learners even sooner..',
  },
  // Add more data objects as needed
];

const AlternateLayout = () => {
  return (
    <div>
        
      {data.map((item, index) => (
        <div key={index} className="sectionContainer">
          <div className="sectionLeft">
            {index % 2 === 0 ? (
              <img src={item.image} alt={item.heading} />
            ) : (
              <>
                <h2>{item.heading}</h2>
                <p>{item.description}</p>
              </>
            )}
          </div>
          <div className="sectionRight">
            {index % 2 === 0 ? (
              <>
                <h2>{item.heading}</h2>
                <p>{item.description}</p>
              </>
            ) : (
              <img src={item.image} alt={item.heading} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AlternateLayout;
