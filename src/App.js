
import "./App.css";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Points from "./components/Points";
import Schedule from "./components/Schedule";
import Teaminfo from "./components/Teaminfo";
import Scoreboard from "./components/Scoreboard";
import { useState } from "react";
import { useEffect } from "react";

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';




function App() {
  // let navigate=useNavigate();
  let [ipl2022,setipl2022]=useState(null);

  useEffect(() => {
    let GetData=async()=>{
    
      let response=await fetch("https://ipl2022api.herokuapp.com/");
    
      let data=await response.text()
      data=JSON.parse(data);
      // console.log(JSON.parse(data));
      setipl2022(data);
      
  
      
     }
     GetData()

  },[])
 {/* let ipl2022 = {
    teams: [
      {
        sno: 1,
        key: "csk",
        teamName: "Chennai Super Kings",
        owner: "Chennai Super Kings Ltd.",
        headcoach:"Stephen Fleming",
        captain:"MS Dhoni",
        winners:"2010,2011,2018,2021",
        players: [
          {
            retainedPlayers: [
              {
                
                playerName:"Ruturaj Gaikwad",
                role:"Batsman",
                price:"6.0 Cr",
                country:"India",
                sno:1


              },
              {
                playerName:"MS Dhoni(c)",
                role:"WK-Batsman",
                price:"12.0 Cr",
                country:"India",
                sno:2
              },
              {
                playerName:"Ravindra Jadeja",
                role:"All Rounder",
                price:"16.0 Cr",
                country:"India",
                sno:3
              },
              {
                playerName:"Moeen Ali",
                role:"All Rounder",
                price:"8.0 Cr",
                country:"England",
                sno:4
              }
            ]
          },
          {
            auctionPool: [
              {
                playerName:"Devon Conway",
                role:"Batsman",
                price:"1.0 Cr",
                country:"New Zealand",
                sno:1
              },{
                playerName:"Subhranshu Senapati",
                role:"Batsman",
                price:"20.0 L",
                country:"India",
                sno:2
              },{
                playerName:"Hari Nishanth",
                role:"Batsman",
                price:"20.0 L",
                country:"India",
                sno:3
              },{
                playerName:"Robin Uthappa",
                role:"Batsman",
                price:"2.0 Cr",
                country:"India",
                sno:4
              },{
                playerName:"N Jagdeesan",
                role:"Wk-Batsman",
                price:"20.0 L",
                country:"India",
                sno:5
              },{
                playerName:"Ambati Rayudu",
                role:"Wk-Batsman",
                price:"6.75 Cr",
                country:"India",
                sno:6
              },{
                playerName:"Shivam Dube",
                role:"All Rounder",
                price:"4.0 Cr",
                country:"India",
                sno:7
              },{
                playerName:"Chris Jordan",
                role:"All Rounder",
                price:"3.60 Cr",
                country:"England",
                sno:8
              },{
                playerName:"Bhagat Varma",
                role:"All Rounder",
                price:"20.0 L",
                country:"India",
                sno:9
              },{
                playerName:"Mitchel Santner",
                role:"All Rounder",
                price:"1.90 Cr",
                country:"New Zealand",
                sno:10
              },{
                playerName:"Dwayne Bravo",
                role:"All Rounder",
                price:"4.40 Cr",
                country:"West Indies",
                sno:11
              },{
                playerName:"Dwaine Pretorius",
                role:"All Rounder",
                price:"50.0 L",
                country:"South Africa",
                sno:12
              },
              {
                playerName:"Maheesh Theekshana",
                role:"Bowler",
                price:"70.0 L",
                country:"Sri Lanka",
                sno:13
              },
              {
                playerName:"Rajvardhan Hangargekar",
                role:"Bowler",
                price:"1.50 Cr",
                country:"India",
                sno:14
              },
              {
                playerName:"Simarjeet Singh",
                role:"Bowler",
                price:"20.0 L",
                country:"India",
                sno:15
              },
              {
                playerName:"Adam Milne",
                role:"Bowler",
                price:"1.90 Cr",
                country:"New Zealand",
                sno:16
              },
              {
                playerName:"Mukesh Choudhary",
                role:"Bowler",
                price:"20.0 L",
                country:"India",
                sno:17
              },
              {
                playerName:"Prashant Solanki",
                role:"Bowler",
                price:"1.20 Cr",
                country:"India",
                sno:18
              },
              {
                playerName:"Tushar Deshpande",
                role:"Bowler",
                price:"20.0 L",
                country:"India",
                sno:19
              },
              {
                playerName:"KM Asif",
                role:"Bowler",
                price:"20.0 L",
                country:"India",
                sno:20
              },
              {
                playerName:"Deepak Chahar",
                role:"Bowler",
                price:"14.0 Cr",
                country:"India",
                sno:21
              }
            ]
          }
        ],
        imgSrc: "csk.png",
        points: 0,
        won: 0,
        lost: 0,
        draw: 0,
        nrr: "+0.000",
        played: 0,
        position: 1


      },
      {
        sno: 2,
        key: "mi",
        teamName: "Mumbai Indians",
        owner: "Indiawin Sports Pvt. Ltd",
        headcoach:"Mahela Jayawardene",
        captain:"Rohit Sharma",
        winners:"2013,2015,2017,2019,2020",
        players: [
          {
            retainedPlayers: [
              {
                
                playerName:"Rohit Sharma(c)",
                role:"Batsman",
                price:"16.0 Cr",
                country:"India",
                sno:1


              },
              {
                playerName:"Suryakumar Yadav",
                role:"Batsman",
                price:"8.0 Cr",
                country:"India",
                sno:2
              },
              {
                playerName:"Kieron Pollard",
                role:"All Rounder",
                price:"6.0 Cr",
                country:"West Indies",
                sno:3
              },
              {
                playerName:"Jasprit Bumrah",
                role:"Bowler",
                price:"12.0 Cr",
                country:"India",
                sno:4
              }
            ]
          },
          {
            auctionPool: [
              {
                playerName:"Tilak Varma",
                role:"Batsman",
                price:"1.70 Cr",
                country:"India",
                sno:1
              },{
                playerName:"Ramandeep Singh",
                role:"Batsman",
                price:"20.0 L",
                country:"India",
                sno:2
              },{
                playerName:"Rahul Buddi",
                role:"Batsman",
                price:"20.0 L",
                country:"India",
                sno:3
              },{
                playerName:"Anmolpreet Singh",
                role:"Batsman",
                price:"20.0 L",
                country:"India",
                sno:4
              },{
                playerName:"Dewald Brevis",
                role:"Batsman",
                price:"3.0 Cr",
                country:"South Africa",
                sno:5
              },{
                playerName:"Aryan Juyal",
                role:"Wk-Batsman",
                price:"20.0 L",
                country:"India",
                sno:6
              },{
                playerName:"Ishan Kishan",
                role:"Wk-Batsman",
                price:"15.25 Cr",
                country:"India",
                sno:7
              },{
                playerName:"Hritik Shokeen",
                role:"All Rounder",
                price:"20.0 L",
                country:"India",
                sno:8
              },{
                playerName:"Arjun Tendulkar",
                role:"All Rounder",
                price:"30.0 L",
                country:"India",
                sno:9
              },{
                playerName:"Sanjay Yadhav",
                role:"All Rounder",
                price:"50.0 L",
                country:"India",
                sno:10
              },{
                playerName:"Daniel Sams",
                role:"All Rounder",
                price:"2.60 Cr",
                country:"Australia",
                sno:11
              },{
                playerName:"Tim David",
                role:"All Rounder",
                price:"8.25 Cr",
                country:"Singapore",
                sno:12
              },
              {
                playerName:"Fabien Allen",
                role:"All Rounder",
                price:"75.0 L",
                country:"West Indies",
                sno:13
              },
              {
                playerName:"Mohd Arshad Khan",
                role:"Bowler",
                price:"20.0 L",
                country:"India",
                sno:14
              },
              {
                playerName:"Jaydev Unadkat",
                role:"Bowler",
                price:"1.30 Cr",
                country:"India",
                sno:15
              },
              {
                playerName:"Mayank Markande",
                role:"Bowler",
                price:"65.0 L",
                country:"India",
                sno:16
              },
              {
                playerName:"Jofra Archer",
                role:"Bowler",
                price:"8.0 Cr",
                country:"England",
                sno:17
              },
              {
                playerName:"Tymal Mills",
                role:"Bowler",
                price:"1.50 Cr",
                country:"England",
                sno:18
              },
              {
                playerName:"Riley Meredith",
                role:"Bowler",
                price:"1.0 Cr",
                country:"Australia",
                sno:19
              },
              {
                playerName:"Murugan Ashwin",
                role:"Bowler",
                price:"1.60 Cr",
                country:"India",
                sno:20
              },
              {
                playerName:"Basil Thampi",
                role:"Bowler",
                price:"30.0 L",
                country:"India",
                sno:21
              }
            ]
          }
        ],
        imgSrc: "mi.png",
        points: 0,
        won: 0,
        lost: 0,
        draw: 0,
        nrr: "+0.000",
        played: 0,
        position: 2
      },
      {
        sno: 3,
        key: "rcb",
        teamName: "RCB",
        owner: "Royal Challengers Sports Pvt. Ltd.",
        headcoach:"Sanjay Bangar",
        captain:"Faf du Plessis",
        winners:[],
        players: [
          {
            retainedPlayers: [
              {
                
                playerName:"Virat Kohli",
                role:"Batsman",
                price:"15.0 Cr",
                country:"India",
                sno:1


              },
              {
                playerName:"Glenn Maxwell",
                role:"All Rounder",
                price:"11.0 Cr",
                country:"Australia",
                sno:2
              },
              {
                playerName:"Mohammed Siraj",
                role:"Bowler",
                price:"7.0 Cr",
                country:"India",
                sno:3
              }
          
            ]
          },
          {
            auctionPool: [
              {
                playerName:"Suyash Prabhudessai",
                role:"Batsman",
                price:"30.0 L",
                country:"India",
                sno:1
              },{
                playerName:"Faf du Plessis(c)",
                role:"Batsman",
                price:"7.0 Cr",
                country:"South Africa",
                sno:2
              },{
                playerName:"Finn Allen",
                role:"Wk-Batsman",
                price:"80.0 L",
                country:"New Zealand",
                sno:3
              },{
                playerName:"Luvnith Sisodia",
                role:"Wk-Batsman",
                price:"20.0 L",
                country:"India",
                sno:4
              },{
                playerName:"Anuj Rawat",
                role:"Wk-Batsman",
                price:"3.40 Cr",
                country:"India",
                sno:5
              },{
                playerName:"Dinesh Karthik",
                role:"Wk-Batsman",
                price:"5.50 Cr",
                country:"India",
                sno:6
              },{
                playerName:"David Willey",
                role:"All Rounder",
                price:"2.0 Cr",
                country:"England",
                sno:7
              },{
                playerName:"Mahipal Lomror",
                role:"All Rounder",
                price:"95.0 L",
                country:"India",
                sno:8
              },{
                playerName:"Sherfane Rutherford",
                role:"All Rounder",
                price:"1.0 Cr",
                country:"West Indies",
                sno:9
              },{
                playerName:"Aneeshwar Gautam",
                role:"All Rounder",
                price:"20.0 L",
                country:"India",
                sno:10
              },{
                playerName:"Shahbaz Ahmed",
                role:"All Rounder",
                price:"2.40 Cr",
                country:"India",
                sno:11
              },{
                playerName:"Wanindu Hasaranga",
                role:"All Rounder",
                price:"10.75 Cr",
                country:"Sri Lanka",
                sno:12
              },
              {
                playerName:"Karn Sharma",
                role:"Bowler",
                price:"50.0 L",
                country:"India",
                sno:13
              },
              {
                playerName:"Jason Behrendorff",
                role:"Bowler",
                price:"75.0 L",
                country:"Australia",
                sno:14
              },
              {
                playerName:"Siddarth Kaul",
                role:"Bowler",
                price:"75.0 L",
                country:"India",
                sno:15
              },
              {
                playerName:"Chama V Milind",
                role:"Bowler",
                price:"25.0 L",
                country:"India",
                sno:16
              },
              {
                playerName:"Josh Hazlewood",
                role:"Bowler",
                price:"7.75 Cr",
                country:"Australia",
                sno:17
              },
              {
                playerName:"Harshal Patel",
                role:"Bowler",
                price:"10.75 Cr",
                country:"India",
                sno:18
              },
              {
                playerName:"Akash Deep",
                role:"Bowler",
                price:"20.0 L",
                country:"India",
                sno:19
              }
            ]
          }
        ],
        imgSrc: "rcb.png",
        points: 0,
        won: 0,
        lost: 0,
        draw: 0,
        nrr: "+0.000",
        played: 0,
        position: 3
      },
      {
        sno: 4,
        key: "kkr",
        teamName: "Kolkata Knight Riders",
        owner: "Knight Riders Sports Pvt. Ltd.",
        headcoach:"Brendon McCullum",
        captain:"Shreyas Iyer",
        winners:[],
        players: [
          {
            retainedPlayers: [
              {
                
                playerName:"Andre Russel",
                role:"Batsman",
                price:"12.0 Cr",
                country:"West Indies",
                sno:1


              },
              {
                playerName:"Venkatesh Iyer",
                role:"All Rounder",
                price:"8.0 Cr",
                country:"India",
                sno:2
              },
              {
                playerName:"Sunil Narine",
                role:"All Rounder",
                price:"6.0 Cr",
                country:"West Indies",
                sno:3
              },
              {
                playerName:"Varun Chakaravarthy",
                role:"Bowler",
                price:"8.0 Cr",
                country:"India",
                sno:4
              }
            ]
          },
          {
            auctionPool: [
              {
                playerName:"Baba Indrajith",
                role:"Batsman",
                price:"20.0 L",
                country:"India",
                sno:1
              },{
                playerName:"Pratham Singh",
                role:"Batsman",
                price:"20.0 L",
                country:"India",
                sno:2
              },{
                playerName:"Ramesh Kumar",
                role:"Batsman",
                price:"1.0 Cr",
                country:"India",
                sno:3
              },{
                playerName:"Ajinkya Rahane",
                role:"Batsman",
                price:"1.0 Cr",
                country:"India",
                sno:4
              },{
                playerName:"Rinku Singh",
                role:"Batsman",
                price:"55.0 L",
                country:"India",
                sno:5
              },{
                playerName:"Abhijeet Tomar",
                role:"Batsman",
                price:"40.0 L",
                country:"India",
                sno:6
              },{
                playerName:"Alex Hales",
                role:"Batsman",
                price:"1.50 Cr",
                country:"England",
                sno:7
              },{
                playerName:"Shreyas Iyer(c)",
                role:"Batsman",
                price:"12.25 Cr",
                country:"India",
                sno:8
              },{
                playerName:"Aman Hakim Khan",
                role:"Batsman",
                price:"20.0 L",
                country:"India",
                sno:9
              },{
                playerName:"Sheldon Jackson",
                role:"Wk-Batsman",
                price:"60.0 L",
                country:"India",
                sno:10
              },{
                playerName:"Sam Billings",
                role:"Wk-Batsman",
                price:"2.0 Cr",
                country:"England",
                sno:11
              },{
                playerName:"Anukul Roy",
                role:"All Rounder",
                price:"20.0 L",
                country:"India",
                sno:12
              },
              {
                playerName:"Nitish Rana",
                role:"All Rounder",
                price:"8.0 Cr",
                country:"India",
                sno:13
              },
              {
                playerName:"Mohammad Nabi",
                role:"All Rounder",
                price:"1.0 Cr",
                country:"Afghanistan",
                sno:14
              },
              {
                playerName:"Chamika Karunaratne",
                role:"Bowler",
                price:"50.0 L",
                country:"Sri Lanka",
                sno:15
              },
              {
                playerName:"Ashok Sharma",
                role:"Bowler",
                price:"55.0 L",
                country:"India",
                sno:16
              },
              {
                playerName:"Rasikh Salam",
                role:"Bowler",
                price:"20.0 L",
                country:"India",
                sno:17
              },
              {
                playerName:"Tim Southee",
                role:"Bowler",
                price:"1.50 Cr",
                country:"New Zealand",
                sno:18
              },
              {
                playerName:"Shivam Mavi",
                role:"Bowler",
                price:"7.25 Cr",
                country:"India",
                sno:19
              },
              {
                playerName:"Umesh Yadav",
                role:"Bowler",
                price:"2.0 Cr",
                country:"India",
                sno:20
              },
              {
                playerName:"Pat Cummins",
                role:"Bowler",
                price:"7.25 Cr",
                country:"Australia",
                sno:21
              }
            ]
          }
        ],
        imgSrc: "kkr.jpg",
        points: 0,
        won: 0,
        lost: 0,
        draw: 0,
        nrr: "+0.000",
        played: 0,
        position: 4
      },
      {
        sno: 5,
        key: "dc",
        teamName: "Delhi Capitals",
        owner: "GMR Sports Pvt. Ltd.",
        headcoach:"Ricky Pointing",
        captain:"Rishab Pant",
        winners:[],
        players: [
          {
            retainedPlayers: [
              {
                
                playerName:"Prithvi Shaw",
                role:"Batsman",
                price:"7.75 Cr",
                country:"India",
                sno:1


              },
              {
                playerName:"Rishab Pant(c)",
                role:"WK-Batsman",
                price:"16.0 Cr",
                country:"India",
                sno:2
              },
              {
                playerName:"Axar Patel",
                role:"All Rounder",
                price:"9.0 Cr",
                country:"India",
                sno:3
              },
              {
                playerName:"Anrich Nortje",
                role:"Bowler",
                price:"6.50 Cr",
                country:"South Africa",
                sno:4
              }
            ]
          },
          {
            auctionPool: [
              {
                playerName:"Mandeep Singh",
                role:"Batsman",
                price:"1.10 Cr",
                country:"India",
                sno:1
              },{
                playerName:"Yash Dhull",
                role:"Batsman",
                price:"50.0 L",
                country:"India",
                sno:2
              },{
                playerName:"Rovman Powell",
                role:"Batsman",
                price:"2.80 Cr",
                country:"West Indies",
                sno:3
              },{
                playerName:"Sarfraz Khan",
                role:"Batsman",
                price:"20.0 L",
                country:"India",
                sno:4
              },{
                playerName:"Ashwin Hebbar",
                role:"Batsman",
                price:"20.0 L",
                country:"India",
                sno:5
              },{
                playerName:"David Warner",
                role:"Batsman",
                price:"6.25 Cr",
                country:"Australia",
                sno:6
              },{
                playerName:"Tim Seifert",
                role:"Wk-Batsman",
                price:"50.0 L",
                country:"New Zealand",
                sno:7
              },{
                playerName:"Srikar Bharat",
                role:"Wk-Batsman",
                price:"2.0 Cr",
                country:"India",
                sno:8
              },{
                playerName:"Lalit Yadav",
                role:"All Rounder",
                price:"65.0 L",
                country:"India",
                sno:9
              },{
                playerName:"Vicky Ostwal",
                role:"All Rounder",
                price:"20.0 L",
                country:"India",
                sno:10
              },{
                playerName:"Ripal Patel",
                role:"All Rounder",
                price:"20.0 L",
                country:"India",
                sno:11
              },{
                playerName:"Mitchel Marsh",
                role:"All Rounder",
                price:"6.50 Cr",
                country:"Australia",
                sno:12
              },
              {
                playerName:"Khaleel Ahmed",
                role:"Bowler",
                price:"5.25 Cr",
                country:"India",
                sno:13
              },
              {
                playerName:"Lungi Ngidi",
                role:"Bowler",
                price:"50.0 L",
                country:"South Africa",
                sno:14
              },
              {
                playerName:"Chetan Sakariya",
                role:"Bowler",
                price:"4.20 Cr",
                country:"India",
                sno:15
              },
              {
                playerName:"Praveen Dubey",
                role:"Bowler",
                price:"50.0 L",
                country:"India",
                sno:16
              },
              {
                playerName:"Kamlesh Nagarkoti",
                role:"Bowler",
                price:"1.10 Cr",
                country:"India",
                sno:17
              },
              {
                playerName:"Kuldeep Yadav",
                role:"Bowler",
                price:"2.0 Cr",
                country:"India",
                sno:18
              },
              {
                playerName:"Shardul Thakur",
                role:"Bowler",
                price:"10.75 Cr",
                country:"India",
                sno:19
              },
              {
                playerName:"Mustafizur Rahman",
                role:"Bowler",
                price:"2.0 Cr",
                country:"India",
                sno:20
              }
            ]
          }
        ],
        imgSrc: "dc.jpg",
        points: 0,
        won: 0,
        lost: 0,
        draw: 0,
        nrr: "+0.000",
        played: 0,
        position: 5
      },
      {
        sno: 6,
        key: "srh",
        teamName: "Sun Risers Hyderabad",
        owner: "SUN TV Network",
        headcoach:"Tom Moody",
        captain:"Kane Williamson",
        winners:[2016],
        players: [
          {
            retainedPlayers: [
              {
                
                playerName:"Kane Williamson(c)",
                role:"Batsman",
                price:"14.0 Cr",
                country:"New Zealand",
                sno:1


              },
              {
                playerName:"Abdul Samad",
                role:"All Rounder",
                price:"4.0 Cr",
                country:"India",
                sno:2
              },
              {
                playerName:"Umran Malik",
                role:"Bowler",
                price:"4.0 Cr",
                country:"India",
                sno:3
              }
            ]
          },
          {
            auctionPool: [
              {
                playerName:"Aiden Markram",
                role:"Batsman",
                price:"2.60 Cr",
                country:"South Africa",
                sno:1
              },{
                playerName:"Shashank Singh",
                role:"Batsman",
                price:"20.0 L",
                country:"India",
                sno:2
              },{
                playerName:"Ravikumar Samarth",
                role:"Batsman",
                price:"20.0 L",
                country:"India",
                sno:3
              },{
                playerName:"Rahul Tripathi",
                role:"Batsman",
                price:"8.50 Cr",
                country:"India",
                sno:4
              },{
                playerName:"Priyam Garg",
                role:"Batsman",
                price:"20.0 L",
                country:"India",
                sno:5
              },{
                playerName:"Glen Philips",
                role:"Wk-Batsman",
                price:"1.50 Cr",
                country:"New Zealand",
                sno:6
              },{
                playerName:"Vishnu Vinod",
                role:"Wk-Batsman",
                price:"50.0 L",
                country:"India",
                sno:7
              },{
                playerName:"Nicolas Pooran",
                role:"Wk-Batsman",
                price:"10.75 Cr",
                country:"West Indies",
                sno:8
              },{
                playerName:"Marco Jansen",
                role:"All Rounder",
                price:"4.20 Cr",
                country:"South Africa",
                sno:9
              },{
                playerName:"Sean Abbott",
                role:"All Rounder",
                price:"2.40 Cr",
                country:"Australia",
                sno:10
              },{
                playerName:"Abhishek Sharma",
                role:"All Rounder",
                price:"6.50 Cr",
                country:"India",
                sno:11
              },{
                playerName:"Washington Sundar",
                role:"All Rounder",
                price:"8.75 Cr",
                country:"India",
                sno:12
              },
              {
                playerName:"Saurabh Dubey",
                role:"Bowler",
                price:"20.0 L",
                country:"India",
                sno:13
              },
              {
                playerName:"Romario Shepherd",
                role:"Bowler",
                price:"7.75 Cr",
                country:"West Indies",
                sno:14
              },
              {
                playerName:"Fazalhaq Farooqi",
                role:"Bowler",
                price:"50.0 L",
                country:"Afghanistan",
                sno:15
              },
              {
                playerName:"Jagadeesha Suchith",
                role:"Bowler",
                price:"20.0 L",
                country:"India",
                sno:16
              },
              {
                playerName:"Shreyas Gopal",
                role:"Bowler",
                price:"75.0 L",
                country:"India",
                sno:17
              },
              {
                playerName:"Kartik Tyagi",
                role:"Bowler",
                price:"4.0 Cr",
                country:"India",
                sno:18
              },
              {
                playerName:"T Natarajan",
                role:"Bowler",
                price:"4.0 Cr",
                country:"India",
                sno:19
              },
              {
                playerName:"Bhuvneshwar Kumar",
                role:"Bowler",
                price:"4.20 Cr",
                country:"India",
                sno:20
              }
            ]
          }
        ],
        imgSrc: "srh.png",
        points: 0,
        won: 0,
        lost: 0,
        draw: 0,
        nrr: "+0.000",
        played: 0,
        position: 6
      },
      {
        sno: 7,
        key: "rr",
        teamName: "Rajasthan Royals",
        owner: "Royal Multisport Pvt. Ltd.",
        headcoach:"Kumar Sangakkara",
        captain:"Sanju Samson",
        winners:[],
        players: [
          {
            retainedPlayers: [
              {
                
                playerName:"Yashasvi Jaiswal",
                role:"Batsman",
                price:"4.0 Cr",
                country:"India",
                sno:1


              },
              {
                playerName:"Sanju Samson(c)",
                role:"WK-Batsman",
                price:"14.0 Cr",
                country:"India",
                sno:2
              },
              {
                playerName:"Jos Buttler",
                role:"Wk-Batsman",
                price:"10.0 Cr",
                country:"England",
                sno:3
              }
            ]
          },
          {
            auctionPool: [
              {
                playerName:"Karun Nair",
                role:"Batsman",
                price:"1.40 Cr",
                country:"India",
                sno:1
              },{
                playerName:"Rassie van der Dussen",
                role:"Batsman",
                price:"1.0 Cr",
                country:"South Africa",
                sno:2
              },{
                playerName:"Devdutt Padikkal",
                role:"Batsman",
                price:"7.75 Cr",
                country:"India",
                sno:3
              },{
                playerName:"Simron Hetmyer",
                role:"Batsman",
                price:"8.50 Cr",
                country:"West Indies",
                sno:4
              },{
                playerName:"Dhruv Jurel",
                role:"Wk-Batsman",
                price:"20.0 L",
                country:"India",
                sno:5
              },{
                playerName:"Anunay Singh",
                role:"All Rounder",
                price:"20.0 L",
                country:"India",
                sno:6
              },{
                playerName:"James Neesham",
                role:"All Rounder",
                price:"1.50 Cr",
                country:"New Zealand",
                sno:7
              },{
                playerName:"Daryl Mitchell",
                role:"All Rounder",
                price:"75.0 L",
                country:"New Zealand",
                sno:8
              },{
                playerName:"Riyan Parag",
                role:"All Rounder",
                price:"3.80 Cr",
                country:"India",
                sno:9
              },{
                playerName:"Ravichandran Ashwin",
                role:"All Rounder",
                price:"5.0 Cr",
                country:"India",
                sno:10
              },{
                playerName:"Shubham Garwal",
                role:"Bowler",
                price:"20.0 L",
                country:"India",
                sno:11
              },{
                playerName:"Kuldip Ydav",
                role:"Bowler",
                price:"20.0 L",
                country:"India",
                sno:12
              },
              {
                playerName:"Nathan Coulter-Nile",
                role:"Bowler",
                price:"2.0 Cr",
                country:"Australia",
                sno:13
              },
              {
                playerName:"Navdeep Saini",
                role:"Bowler",
                price:"2.60 Cr",
                country:"India",
                sno:14
              },
              {
                playerName:"Kuldeep Sen",
                role:"Bowler",
                price:"20.0 L",
                country:"India",
                sno:15
              },
              {
                playerName:"Obed McCoy",
                role:"Bowler",
                price:"75.0 L",
                country:"West Indies",
                sno:16
              },
              {
                playerName:"Tejas Baroka",
                role:"Bowler",
                price:"20.0 L",
                country:"India",
                sno:17
              },
              {
                playerName:"KC Cariappa",
                role:"Bowler",
                price:"30.0 L",
                country:"India",
                sno:18
              },
              {
                playerName:"Yuzvendra Chahal",
                role:"Bowler",
                price:"6.50 Cr",
                country:"India",
                sno:19
              },
              {
                playerName:"Prasidh Krishna",
                role:"Bowler",
                price:"10.0 Cr",
                country:"India",
                sno:20
              },
              {
                playerName:"Trent Boult",
                role:"Bowler",
                price:"8.0 Cr",
                country:"New Zealand",
                sno:21
              }
            ]
          }
        ],
        imgSrc: "rr.png",
        points: 0,
        won: 0,
        lost: 0,
        draw: 0,
        nrr: "+0.000",
        played: 0,
        position: 7
      },
      {
        sno: 8,
        key: "pk",
        teamName: "Punjab Kings",
        owner: "KPH Dream Cricket Pvt. Ltd.",
        headcoach:"Anil Kumble",
        captain:"Mayank Aggarwal",
        winners:[],
        players: [
          {
            retainedPlayers: [
              {
                
                playerName:"Mayank Aggarwal(c)",
                role:"Batsman",
                price:"12.0 Cr",
                country:"India",
                sno:1


              },
              {
                playerName:"Arshdeep Singh",
                role:"Bowler",
                price:"4.0 Cr",
                country:"India",
                sno:2
              }
            ]
          },
          {
            auctionPool: [
              {
                playerName:"Prerak Mankad",
                role:"Batsman",
                price:"20.0 L",
                country:"India",
                sno:1
              },{
                playerName:"Bhanuka Rajapaksa",
                role:"Batsman",
                price:"50.0 L",
                country:"Sri Lanka",
                sno:2
              },{
                playerName:"Shahrukh Khan",
                role:"Batsman",
                price:"9.0 Cr",
                country:"India",
                sno:3
              },{
                playerName:"Shikhar Dhawan",
                role:"Batsman",
                price:"6.25 Cr",
                country:"India",
                sno:4
              },{
                playerName:"Prabhsimran Singh",
                role:"Wk-Batsman",
                price:"60.0 L",
                country:"India",
                sno:5
              },{
                playerName:"Jitesh Sharma",
                role:"Wk-Batsman",
                price:"20.0 L",
                country:"India",
                sno:6
              },{
                playerName:"Jhonny Bairstow",
                role:"Wk-Batsman",
                price:"6.75 Cr",
                country:"England",
                sno:7
              },{
                playerName:"Benny Howel",
                role:"All Rounder",
                price:"40.0 L",
                country:"England",
                sno:8
              },{
                playerName:"Baltej Singh",
                role:"All Rounder",
                price:"20.0 L",
                country:"India",
                sno:9
              },{
                playerName:"Ansh Patel",
                role:"All Rounder",
                price:"20.0 L",
                country:"India",
                sno:10
              },{
                playerName:"Liam Livingstone",
                role:"All Rounder",
                price:"11.50 Cr",
                country:"England",
                sno:11
              },{
                playerName:"Rishi Dhawan",
                role:"All Rounder",
                price:"55.0 L",
                country:"India",
                sno:12
              },
              {
                playerName:"Atharva Taide",
                role:"All Rounder",
                price:"20.0 L",
                country:"India",
                sno:13
              },
              {
                playerName:"Writtick Chatterjee",
                role:"Bowler",
                price:"20.0 L",
                country:"India",
                sno:14
              },
              {
                playerName:"Odean Smith",
                role:"Bowler",
                price:"6.0 Cr",
                country:"West Indies",
                sno:15
              },
              {
                playerName:"Sandeep Sharma",
                role:"Bowler",
                price:"50.0 L",
                country:"India",
                sno:16
              },
              {
                playerName:"Raj Bawa",
                role:"Bowler",
                price:"2.0 Cr",
                country:"India",
                sno:17
              },
              {
                playerName:"Nathan Ellis",
                role:"Bowler",
                price:"75.0 L",
                country:"Australia",
                sno:18
              },
              {
                playerName:"Vaibhav Arora",
                role:"Bowler",
                price:"2.0 Cr",
                country:"India",
                sno:19
              },
              {
                playerName:"Ishan Porel",
                role:"Bowler",
                price:"25.0 L",
                country:"India",
                sno:20
              },
              {
                playerName:"Harpreet Brar",
                role:"Bowler",
                price:"3.80 Cr",
                country:"India",
                sno:21
              },
              {
                playerName:"Rahul Chahar",
                role:"Bowler",
                price:"5.25 Cr",
                country:"India",
                sno:21
              },
              {
                playerName:"Kagiso Rabada",
                role:"Bowler",
                price:"9.25 Cr",
                country:"South Africa",
                sno:21
              }
            ]
          }
        ],
        imgSrc: "pb.jpg",
        points: 0,
        won: 0,
        lost: 0,
        draw: 0,
        nrr: "+0.000",
        played: 0,
        position: 8
      },
      {
        sno: 9,
        key: "gt",
        teamName: "Gujarat Titans",
        owner: "CVC Capital",
        headcoach:"Ashish Nehra",
        captain:"Hardik Pandya",
        winners:[],
        players: [
          {
            retainedPlayers: [
              {
                
                playerName:"Shubman Gill",
                role:"Batsman",
                price:"8.0 Cr",
                country:"India",
                sno:1


              },
              {
                playerName:"Hardik Pandya(c)",
                role:"All Rounder",
                price:"15.0 Cr",
                country:"India",
                sno:2
              },
              {
                playerName:"Rashid Khan",
                role:"Bowler",
                price:"15.0 Cr",
                country:"India",
                sno:3
              }
            ]
          },
          {
            auctionPool: [
              {
                playerName:"Sai Sudharshan",
                role:"Batsman",
                price:"20.0 L",
                country:"India",
                sno:1
              },{
                playerName:"Abhinav Manohar",
                role:"Batsman",
                price:"2.60 Cr",
                country:"India",
                sno:2
              },{
                playerName:"Jason Roy",
                role:"Batsman",
                price:"2.0 Cr",
                country:"England",
                sno:3
              },{
                playerName:"David Miller",
                role:"Batsman",
                price:"3.0 Cr",
                country:"South Africa",
                sno:4
              },{
                playerName:"Mathew Wade",
                role:"Wk-Batsman",
                price:"2.40 Cr",
                country:"Australia",
                sno:5
              },{
                playerName:"Wriddhiman Saha",
                role:"Wk-Batsman",
                price:"1.90 Cr",
                country:"India",
                sno:6
              },{
                playerName:"Dominic Drakes",
                role:"All Rounder",
                price:"1.10 Cr",
                country:"West Indies",
                sno:7
              },{
                playerName:"Vijay Shankar",
                role:"All Rounder",
                price:"1.40 Cr",
                country:"India",
                sno:8
              },{
                playerName:"Jayant Yadav",
                role:"All Rounder",
                price:"1.70 Cr",
                country:"India",
                sno:9
              },{
                playerName:"Gurkeerat Singh Mann",
                role:"All Rounder",
                price:"50.0 L",
                country:"India",
                sno:10
              },{
                playerName:"Rahul Tewatia",
                role:"All Rounder",
                price:"9.0 Cr",
                country:"India",
                sno:11
              },{
                playerName:"Varun Aaron",
                role:"Bowler",
                price:"50.0 L",
                country:"India",
                sno:12
              },
              {
                playerName:"Darshan Nalkande",
                role:"Bowler",
                price:"20.0 L",
                country:"India",
                sno:13
              },
              {
                playerName:"Yash Dayal",
                role:"Bowler",
                price:"3.20 Cr",
                country:"India",
                sno:14
              },
              {
                playerName:"Pardeep Sangwan",
                role:"Bowler",
                price:"20.0 L",
                country:"India",
                sno:15
              },
              {
                playerName:"Alzarri Joseph",
                role:"Bowler",
                price:"2.40 Cr",
                country:"West Indies",
                sno:16
              },
              {
                playerName:"Ravisrinivasan Sai Kishore",
                role:"Bowler",
                price:"3.0 Cr",
                country:"India",
                sno:17
              },
              {
                playerName:"Noor Ahmad",
                role:"Bowler",
                price:"30.0 L",
                country:"Afghanistan",
                sno:18
              },
              {
                playerName:"Lockie Ferguson",
                role:"Bowler",
                price:"10.0 Cr",
                country:"New Zealand",
                sno:19
              },
              {
                playerName:"Mohammad Shami",
                role:"Bowler",
                price:"6.25 Cr",
                country:"India",
                sno:20
              }
            ]
          }
        ],
        imgSrc: "gt.jpg",
        points: 0,
        won: 0,
        lost: 0,
        draw: 0,
        nrr: "+0.000",
        played: 0,
        position: 9
      },
      {
        sno: 10,
        key: "lsg",
        teamName: "Lucknow Super Giants",
        owner: "RPSG Group",
        headcoach:"Andy Flower",
        captain:"KL Rahul",
        winners:[],
        players: [
          {
            retainedPlayers: [
              {
                
                playerName:"KL Rahul(c)",
                role:"Wk-Batsman",
                price:"17.0 Cr",
                country:"India",
                sno:1


              },
              {
                playerName:"Marcus Stoinis",
                role:"All Rounder",
                price:"9.20 Cr",
                country:"Australia",
                sno:2
              },
              {
                playerName:"Ravi Bishnoi",
                role:"Bowler",
                price:"4.0 Cr",
                country:"India",
                sno:3
              }
            ]
          },
          {
            auctionPool: [
              {
                playerName:"Manan Vohra",
                role:"Batsman",
                price:"20.0 L",
                country:"India",
                sno:1
              },{
                playerName:"Evin Lewis",
                role:"Batsman",
                price:"2.0 Cr",
                country:"West Indies",
                sno:2
              },{
                playerName:"Manish Pandey",
                role:"Batsman",
                price:"4.60 Cr",
                country:"India",
                sno:3
              },{
                playerName:"Quinton de Kock",
                role:"Wk-Batsman",
                price:"6.75 Cr",
                country:"South Africa",
                sno:4
              },{
                playerName:"Kyle Mayers",
                role:"All Rounder",
                price:"50.0 L",
                country:"West Indies",
                sno:5
              },{
                playerName:"Karan Sharma",
                role:"All Rounder",
                price:"20.0 L",
                country:"India",
                sno:6
              },{
                playerName:"Krishnappa Gowtham",
                role:"All Rounder",
                price:"90.0 L",
                country:"India",
                sno:7
              },{
                playerName:"Ayush Badoni",
                role:"All Rounder",
                price:"20.0 L",
                country:"India",
                sno:8
              },{
                playerName:"Bhagat Varma",
                role:"All Rounder",
                price:"20.0 L",
                country:"India",
                sno:9
              },{
                playerName:"Deepak Hooda",
                role:"All Rounder",
                price:"5.75 Cr",
                country:"India",
                sno:10
              },{
                playerName:"Jason Holder",
                role:"All Rounder",
                price:"8.75 Cr",
                country:"West Indies",
                sno:11
              },{
                playerName:"Krunal Pandya",
                role:"All Rounder",
                price:"8.25 Cr",
                country:"India",
                sno:12
              },
              {
                playerName:"Dushmantha Chameera",
                role:"Bowler",
                price:"2.0 Cr",
                country:"Sri Lanka",
                sno:13
              },
              {
                playerName:"Shahbaz Nadeem",
                role:"Bowler",
                price:"50.0 L",
                country:"India",
                sno:14
              },
              {
                playerName:"Mohsin Khan",
                role:"Bowler",
                price:"20.0 L",
                country:"India",
                sno:15
              },
              {
                playerName:"Mayank Yadav",
                role:"Bowler",
                price:"20.0 L",
                country:"India",
                sno:16
              },
              {
                playerName:"Ankit Rajpoot",
                role:"Bowler",
                price:"50.0 L",
                country:"India",
                sno:17
              },
              {
                playerName:"Avesh Khan",
                role:"Bowler",
                price:"10.0 Cr",
                country:"India",
                sno:18
              },
              {
                playerName:"Mark Wood",
                role:"Bowler",
                price:"7.50 Cr",
                country:"India",
                sno:19
              }
            ]
          }
        ],
        imgSrc: "lsg.png",
        points: 0,
        won: 0,
        lost: 0,
        draw: 0,
        nrr: "+0.000",
        played: 0,
        position: 10
      }
    ],
    schedule: [
      {
        matchno: "01",
        team1: "Chennai Super Kings",
        team1img: "csk.png",
        team2: "Kolkata Knight Riders",
        team2img: "kkr.jpg",
        date: "26-March-2022",
        time: "19:30",
        location: "Wankhede Stadium, Mumbai"
      },
      {
        matchno: "02",
        team1: "Delhi Capitals",
        team1img: "dc.jpg",
        team2: "Mumbai Indians",
        team2img: "mi.png",
        date: "27-March-2022",
        time: "15:30",
        location: "Brabourne -CCI, Mumbai"
      },
      {
        matchno: "03",
        team1: "Punjab Kings",
        team1img: "pb.jpg",
        team2: "RCB",
        team2img: "rcb.png",
        date: "27-March-2022",
        time: "19:30",
        location: "DY patil Stadium, Mumbai"
      },
      {
        matchno: "04",
        team1: "Gujarat Titans",
        team1img: "gt.jpg",
        team2: "Lucknow Super Giants",
        team2img: "lsg.png",
        date: "28-March-2022",
        time: "19:30",
        location: "Wankhede Stadium, Mumbai"
      },
      {
        matchno: "05",
        team1: "Sunrisers Hyderabad",
        team1img: "srh.png",
        team2: "Rajasthan Royals",
        team2img: "rr.png",
        date: "29-March-2022",
        time: "19:30",
        location: "MCA Stadium,Pune"
      },
      {
        matchno: "06",
        team1: "RCB",
        team1img: "rcb.png",
        team2: "Kolkata Knight Riders",
        team2img: "kkr.jpg",
        date: "30-March-2022",
        time: "19:30",
        location: "DY Patil Stadium, Mumbai"
      },
      {
        matchno: "07",
        team1: "Lucknow Super Giants",
        team1img: "lsg.png",
        team2: "Chennai Super Kings",
        team2img: "csk.png",
        date: "31-March-2022",
        time: "19:30",
        location: "Brabourne-CCI, Mumbai"
      },
      {
        matchno: "08",
        team1: "Kolkata Knight Riders",
        team1img: "kkr.jpg",
        team2: "Punjab Kings",
        team2img: "pb.jpg",
        date: "01-April-2022",
        time: "19:30",
        location: "Wankhede Stadium, Mumbai"
      },
      {
        matchno: "09",
        team1: "Mumbai Indians",
        team1img: "mi.png",
        team2: "Rajasthan Royals",
        team2img: "rr.png",
        date: "02-April-2022",
        time: "19:30",
        location: "DY Patil Stadium, Mumbai"
      },
      {
        matchno: "10",
        team1: "Gujarat Titans",
        team1img: "gt.jpg",
        team2: "Delhi Capitals",
        team2img: "dc.jpg",
        date: "02-April-2022",
        time: "19:30",
        location: "MCA Stadium, Pune"
      },
      {
        matchno: "11",
        team1: "Chennai Super Kings",
        team1img: "csk.png",
        team2: "Punjab Kings",
        team2img: "pb.jpg",
        date: "03-April-2022",
        time: "19:30",
        location: "Brabourne-CCI, Mumbai"
      },
      {
        matchno: "12",
        team1: "Sunrisers Hyderabad",
        team1img: "srh.png",
        team2: "Lucknow Super Giants",
        team2img: "lsg.png",
        date: "04-April-2022",
        time: "19:30",
        location: "DY Patil Stadium, Mumbai"
      },
      {
        matchno: "13",
        team1: "Rajasthan Royals",
        team1img: "rr.png",
        team2: "RCB",
        team2img: "rcb.png",
        date: "05-April-2022",
        time: "19:30",
        location: "Wankhede Stadium, Mumbai"
      },
      {
        matchno: "14",
        team1: "Kolkata Knight Riders",
        team1img: "kkr.jpg",
        team2: "Mumbai Indians",
        team2img: "mi.png",
        date: "06-April-2022",
        time: "19:30",
        location: "MCA Stadium, Pune"
      },
      {
        matchno: "15",
        team1: "Lucknow Super Giants",
        team1img: "lsg.png",
        team2: "Delhi Capitals",
        team2img: "dc.jpg",
        date: "07-April-2022",
        time: "19:30",
        location: "DY Patil Stadium, Mumbai"
      },
      {
        matchno: "16",
        team1: "Punjab Kings",
        team1img: "pb.jpg",
        team2: "Gujarat Titans",
        team2img: "gt.jpg",
        date: "08-April-2022",
        time: "19:30",
        location: "Brabourne-CCI, Mumbai"
      },
      {
        matchno: "17",
        team1: "Chennai Super Kings",
        team1img: "csk.png",
        team2: "Sunrisers Hyderabad",
        team2img: "srh.png",
        date: "09-April-2022",
        time: "15:30",
        location: "DY Patil Stadium, Mumbai"
      },
      {
        matchno: "18",
        team1: "RCB",
        team1img: "rcb.png",
        team2: "Mumbai Indians",
        team2img: "mi.png",
        date: "09-April-2022",
        time: "19:30",
        location: "MCA Stadium, Pune"
      },
      {
        matchno: "19",
        team1: "Kolkata Knight Riders",
        team1img: "kkr.jpg",
        team2: "Delhi Capitals",
        team2img: "dc.jpg",
        date: "10-April-2022",
        time: "15:30",
        location: "Brabourne-CCI, Mumbai"
      },
      {
        matchno: "20",
        team1: "Rajasthan Royals",
        team1img: "rr.png",
        team2: "Lucknow Super Giants",
        team2img: "lsg.png",
        date: "10-April-2022",
        time: "19:30",
        location: "Wankhede Stadium, Mumbai"
      },
      {
        matchno: "21",
        team1: "Sunrisers Hyderabad",
        team1img: "srh.png",
        team2: "Gujarat Titans",
        team2img: "gt.jpg",
        date: "11-April-2022",
        time: "19:30",
        location: "DY Patil Stadium, Mumbai"
      },
      {
        matchno: "22",
        team1: "Chennai Super Kings",
        team1img: "csk.png",
        team2: "RCB",
        team2img: "rcb.png",
        date: "12-April-2022",
        time: "19:30",
        location: "DY Patil Stadium, Mumbai"
      },
      {
        matchno: "23",
        team1: "Mumbai Indians",
        team1img: "mi.png",
        team2: "Punjab Kings",
        team2img: "pb.jpg",
        date: "13-April-2022",
        time: "19:30",
        location: "MCA Stadium, Pune"
      },
      {
        matchno: "24",
        team1: "Rajasthan Royals",
        team1img: "rr.png",
        team2: "Gujarat Titans",
        team2img: "gt.jpg",
        date: "14-April-2022",
        time: "19:30",
        location: "DY Patil Stadium, Mumbai"
      },
      {
        matchno: "25",
        team1: "Sunrisers Hyderabad",
        team1img: "srh.png",
        team2: "Kolkata Knight Riders",
        team2img: "kkr.jpg",
        date: "15-April-2022",
        time: "19:30",
        location: "Brabourne-CCI, Mumbai"
      },
      {
        matchno: "26",
        team1: "Mumbai Indians",
        team1img: "mi.png",
        team2: "Lucknow Super Giants",
        team2img: "lsg.png",
        date: "16-April-2022",
        time: "15:30",
        location: "Brabourne-CCI, Mumbai"
      },
      {
        matchno: "27",
        team1: "Delhi Capitals",
        team1img: "dc.jpg",
        team2: "RCB",
        team2img: "rcb.png",
        date: "16-April-2022",
        time: "19:30",
        location: "Wankhede Stadium, Mumbai"
      },
      {
        matchno: "28",
        team1: "Punjab Kings",
        team1img: "pb.jpg",
        team2: "Sunrisers Hyderabad",
        team2img: "srh.png",
        date: "17-April-2022",
        time: "15:30",
        location: "DY Patil Stadium, Mumbai"
      },
      {
        matchno: "29",
        team1: "Gujarat Titans",
        team1img: "gt.jpg",
        team2: "Chennai Super Kings",
        team2img: "csk.png",
        date: "17-April-2022",
        time: "19:30",
        location: "MCA Stadium, Pune"
      },
      {
        matchno: "30",
        team1: "Rajasthan Royals",
        team1img: "rr.png",
        team2: "Kolkata Knight Riders",
        team2img: "kkr.jpg",
        date: "18-April-2022",
        time: "19:30",
        location: "Brabourne-CCI, Mumbai"
      }


    ]
    
  }; */}
  let [clicked,updateclick]=useState({});
  function getTeam(team) {
    clicked=team;
    updateclick(team);
    // console.log(clicked);
  }
    
    return (
      
      <>
      <Router>
      <Navbar />


        <Routes>
          {/* <Route exact path="/"  element={<Content teams={ipl2022.teams} getTeam={getTeam} />} /> */}
         { ipl2022 && <Route exact path="/"  element={<Content teams={ipl2022.teams} getTeam={getTeam} />} />}
         
          
          {/* <Route exact path="/pointstable" element={<Points points={ipl2022.teams} />} /> */}
          {ipl2022 && <Route exact path="/pointstable" element={<Points points={ipl2022.teams} />} />}

          {/* <Route exact path="/schedule" element={<Schedule ipl2022={ipl2022} />} /> */}
          {ipl2022 && <Route exact path="/schedule" element={<Schedule ipl2022={ipl2022} />} />}
          {/* <Route exact path="/teaminfo" element={<Teaminfo clicked={clicked} />} /> */}
          <Route exact path="/teaminfo" element={<Teaminfo clicked={clicked} />} />
          <Route exact path="/scoreboard" element={<Scoreboard/>} />

        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
