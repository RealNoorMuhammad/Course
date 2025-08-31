import React from "react";
import { Link } from "react-router-dom";
import Coursestructure from "../Course/Coursestructure";

export default function Cources() {
  // Funny / Satirical Course Data
  const courses = [
    {
      time: "0.1s",
      img: "/img/trt.png", // replace with your image
      readlink: "/courses/trt-adderall",
      join: "/courses/trt-adderall",
      price: "$999.99",
      review: 420,
      title: "TRT + Adderall for Sales Success™",
      teachername: "Addy Selliot",
      duration: "5.5 Hrs",
      totalstudent: "120",
    },
    {
      time: "0.2s",
      img: "/img/trj.png",
      readlink: "/courses/rug-playbook",
      join: "/courses/rug-playbook",
      price: "$999.99",
      review: 133,
      title: "Rug the Market: The TRJ Rugs Playbook",
      teachername: "TRJ Rugs",
      duration: "3 Hrs",
      totalstudent: "75",
    },
    {
      time: "0.3s",
      img: "/img/grif.png",
      readlink: "/courses/no-fun",
      join: "/courses/no-fun",
      price: "$12.47",
      review: 69,
      title: "Save $100K by Never Having Fun",
      teachername: "Griftin Stiffman",
      duration: "1.5 Hrs",
      totalstudent: "333",
    },
    {
      time: "0.4s",
      img: "/img/tate.png",
      readlink: "/courses/matrix",
      join: "/courses/matrix",
      price: "$9,999.99",
      review: 99,
      title: "Escape the Matrix by Creating One",
      teachername: "Andru Tete",
      duration: "10 Hrs",
      totalstudent: "88",
    },
    {
      time: "0.5s",
      img: "/img/post.png",
      readlink: "/courses/post-die-repeat",
      join: "/courses/post-die-repeat",
      price: "$777.77",
      review: 420,
      title: "Post. Die. Repeat.",
      teachername: "Goy V",
      duration: "2 Hrs",
      totalstudent: "150",
    },
    {
      time: "0.6s",
      img: "/img/exit.png",
      readlink: "/courses/exit-liquidity",
      join: "/courses/exit-liquidity",
      price: "$420.69",
      review: 256,
      title: "Exit Liquidity Mastery",
      teachername: "Orangujeet",
      duration: "4 Hrs",
      totalstudent: "64",
    },
    {
      time: "0.7s",
      img: "/img/xyour.png",
      readlink: "/courses/debt",
      join: "/courses/debt",
      price: "$9,997",
      review: 100,
      title: "100X Your Life, 1000X Your Debt",
      teachername: "Grift Cardebt",
      duration: "6 Hrs",
      totalstudent: "90",
    },
    {
      time: "0.8s",
      img: "/img/Lease.png",
      readlink: "/courses/tiktok-hustler",
      join: "/courses/tiktok-hustler",
      price: "$997",
      review: 333,
      title: "Lease, Flex, Exit: The TikTok Hustler's Playbook",
      teachername: "Brizz Scamz",
      duration: "7 Hrs",
      totalstudent: "77",
    },
    {
      time: "0.9s",
      img: "/img/How.png",
      readlink: "/courses/how-to-get-rich",
      join: "/courses/how-to-get-rich",
      price: "$2,997",
      review: 222,
      title: "How to Get Rich Teaching Others How to Get Rich",
      teachername: "Yman Gadzero",
      duration: "9 Hrs",
      totalstudent: "210",
    },
    {
      time: "1.0s",
      img: "/img/Dopamine.png",
      readlink: "/courses/dopamine",
      join: "/courses/dopamine",
      price: "$6,969",
      review: 111,
      title: "Dopamine Celibacy: Become a Millionaire Without Busting",
      teachername: "Lube Ballsmar",
      duration: "12 Hrs",
      totalstudent: "69",
    },
    {
      time: "1.1s",
      img: "/img/Get.png",
      readlink: "/courses/followers-buy-top",
      join: "/courses/followers-buy-top",
      price: "$3,333",
      review: 444,
      title: "Get Followers to Buy the Top",
      teachername: "Alex Backfart",
      duration: "3 Hrs",
      totalstudent: "54",
    },
    {
      time: "1.2s",
      img: "/img/The.png",
      readlink: "/courses/midwit",
      join: "/courses/midwit",
      price: "0.42 ETH",
      review: 77,
      title: "The Midwit's Path to Influence",
      teachername: "Murug",
      duration: "5 Hrs",
      totalstudent: "33",
    },
    {
      time: "1.3s",
      img: "/img/Risk.png",
      readlink: "/courses/degen",
      join: "/courses/degen",
      price: "$100",
      review: 101,
      title: "Risk Management Is for Pussies: Degen Dopamine Mastery",
      teachername: "Broki",
      duration: "4 Hrs",
      totalstudent: "88",
    },
    {
      time: "1.4s",
      img: "/img/faze.png",
      readlink: "/courses/teenagers",
      join: "/courses/teenagers",
      price: "$420.69",
      review: 55,
      title: "How to Fit In with Teenagers at 45 type shit",
      teachername: "FaZe Bankrupt",
      duration: "8 Hrs",
      totalstudent: "66",
    },
  ];

  return (
    <>
      {/* ************** COURSES ***************/}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Courses
            </h6>
            <h1 className="mb-5">Popular Courses</h1>
          </div>
          <div className="row g-4 justify-content-center">
            {courses.map((course, index) => (
              <Coursestructure key={index} data={course} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
