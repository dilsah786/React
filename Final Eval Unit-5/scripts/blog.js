// code for time and date 
const date = document.getElementById("date");
const time = document.getElementById("time");

const currentDate2 = new Date().toLocaleDateString("en-US", {
  month: "long",
  day: "2-digit",
  year: "numeric",
});
date.innerText = currentDate2;

const currentDate = new Date();
const currentTime = currentDate.toLocaleTimeString('en-US', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: true
});

time.innerText = currentTime

// back button code
document.getElementById("backBtn").addEventListener("click", () => {
  window.location.href = "index.html";
});
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

let localBlog = JSON.parse(localStorage.getItem("blog"))
console.log(localBlog);
let title = document.querySelector(".title");
title.innerText = localBlog.title;

let sub_title = document.querySelector(".sub_title");
sub_title.innerText = localBlog.sub_title;

let profile_pic = document.querySelector(".profile_pic");
profile_pic.src= localBlog.author.profile_pic;

let name = document.querySelector(".name");
name.innerText = localBlog.author.name;

let image = document.querySelector(".image");
image.src = localBlog.image;

let description = document.querySelector(".description");
description.innerText = localBlog.description;


// add your js code for blog page here 
 