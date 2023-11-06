//Carolina Turner CSCE 242
const express = require("express");
//setting up with express method 
const app = express();

app.use(express.static("public"));

app.get("/" , (req,res)=>{
    res.sendFile(__dirname+ "/index.html");
});

app.get("/api/singers", (req, res) => {
    const singers = [];
    singers[0]={
        name :"Paul McCartney",
        band:"The Beatles",
        best_song:"Hey Jude",
        active:"1957-Present",
        born: "Liverpool, England",
        genre: ["Classic Rock", "Psychedelic Rock", "Pop"],
        img: "images/paulmccartney.jpg"
    };
    singers[1]={
        name :"Elton John",
        band:"Solo Artist",
        best_song:"Yellow Brick Road",
        active:"1962-Present",
        born: "Pinner, Middlesex, England",
        genre: ["Classic Rock", "Pop"],
        img: "images/eltonjohn.jpg"
    };
    singers[2]={
        name :"Tom DeLonge",
        band:"Blink-182",
        best_song:"Misery",
        active:"1992-Present",
        born: "Poway, California",
        genre: ["Pop Punk", "Alternative Rock"],
        img: "images/blink-182.jpg"
    };
    singers[3]={
        name :"Matt Shultz",
        band:"Cage The Elephant",
        best_song:"Japanese Buffalo",
        active:"2001-Present",
        born: "Bowling Green, Kentucky",
        genre: ["Indie Rock", "Psychedelic Rock", "Alternative Rock"],
        img: "images/cagetheelephant.jpg"
    };
    singers[4]={
        name :"Billy Joel",
        band:"Solo Artist",
        best_song:"Piano Man",
        active:"1964-Present",
        born: "New York City, New York",
        genre: ["Classic Rock", "Jazz", "Pop"],
        img: "images/billyjoel.jpg"
    };
      
    res.json(singers);
  });

app.listen(3000, ()=>{
    console.log("testing");

});