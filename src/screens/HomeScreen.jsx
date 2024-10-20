import React from "react";
import { Container } from "reactstrap";
import Carousel from "../components/carousel/Carousel";
import Welcome from "../components/typewriter/Welcome";
import "./common.css";
import Order from "../components/carousel/Order";
import Footer from "../components/footer/Footer";
import HorizonatalCard from "../components/carousel/HorizontalCard";
import AlternateLayout from "../components/carousel/AlternateLayout";

const HomeScreen = () => {
  return (
    <>
    <div className="homeScreen">
      <Carousel className="carousel" />
      <HorizonatalCard/>
      <AlternateLayout/>
      <Order/>
      
    <Footer/>
    </div>
    </>
  );
};

export default HomeScreen;
