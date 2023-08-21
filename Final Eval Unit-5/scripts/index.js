// code for time and date 
const date = document.getElementById("date");
const time = document.getElementById("time");

// Format the date as desired (e.g., YYYY-MM-DD)
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

// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
const blogsURL = `${baseServerURL}/blogs`;

let DeletApi = `${blogsURL}/`;
let mainSection = document.getElementById("data-list-wrapper");

let blogsData = [];

async function getBlogs (){
  try{
    let result = await fetch(blogsURL);
    let res = await result.json();
    blogsData = res;
    displayData(res);
    console.log(res);

  }catch(err){
    console.log(err);
  }
}
getBlogs(blogsData)

function displayData (data){
  mainSection.innerHTML = "";
  data.map((elem)=>{

    let card_list = document.createElement("div");
    card_list.className="card-list";

   
    let card = document.createElement("div");
    card.className = "card";

    let card_img = document.createElement("div");
    card_img.className = "card_img";

    let image = document.createElement("img");
    image.src = elem.image;

    card_img.append(image);

    let card_body = document.createElement("div");
    card_body.className = "card_body";

    let title = document.createElement("p");
    title.className = "title";
    title.innerText = elem.title;

    //card_body.append(title);

    let sub_title = document.createElement("p");
    sub_title.className = "sub_title";
    sub_title.innerText = elem.sub_title;

    let category = document.createElement("p");
    category.className = "category";
    category.innerText = elem.category;

    let profile_pic = document.createElement("img");
    profile_pic.setAttribute("class","profile_pic");
    profile_pic.src = elem.author.profile_pic;

    let name = document.createElement("p");
    name.className = "name";
    name.innerText = elem.author.name;

    
    let publish_date = document.createElement("p");
    publish_date.className = "publish_date";
    publish_date.innerText = elem.publish_date;

    let readBtn = document.createElement("button");
    readBtn.className = "readBtn";
    readBtn.innerText = "Read More";
    readBtn.addEventListener("click",()=>{
      window.location.href = "./blog.html"
      localStorage.setItem("blog",JSON.stringify(elem))
    })

    
    let deleteBtn = document.createElement("button");
    deleteBtn.className = "deleteBtn";
    deleteBtn.setAttribute("data-id",`${elem.id}`)
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener("click",async () =>{
        try{
         await fetch(`${blogsURL}`),{
          method : "DELETE"
         }
          
         
         console.log("Deleted " + elem.id);

       displayData(blogsData);
  
        }catch(err){
          console.log(err);
        }
       })
    
     

     card_body.append(title,sub_title,category,profile_pic,name,publish_date,readBtn,deleteBtn);

    card.append(card_img,card_body);
    card_list.append(card);


    mainSection.append(card_list);


  })
}

//filter and sort
let ascending = `?_sort=publish_date&_order=desc`
let descending = `?_sort=publish_date&_order=asc`

let newestFirst = document.getElementById("newest-first");
newestFirst.addEventListener("click",async () =>{
  try{
    let result  = await fetch (`${blogsURL}${ascending}`);
    let res = await result.json();
    console.log("I am fetching Ascending");
   displayData(res);
  }catch(err){
    console.log(err);
  }
})
let oldestFirst = document.getElementById("oldest-first");
oldestFirst.addEventListener("click",async () =>{
  try{
    let result  = await fetch (`${blogsURL}${descending}`);
    let res = await result.json();
    console.log("I am fetching Ascending");
   displayData(res);
  }catch(err){
    console.log(err);
  }
})
let International = `?category=International`
let Business = `?category=Business`
let Sports = `?category=Sports`
let Entertainment = `?category=Entertainment`
let Health = `?category=Health`

let filterInternational = document.getElementById("filter-International");
filterInternational.addEventListener("click",async ()=>{
  try{
    let result = await fetch(`${blogsURL}${International}`);
    let res = await result.json();
    console.log(res);
    displayData(res);

  }catch(err){
    console.log(err);
  }
})


let filterBusiness = document.getElementById("filter-Business");
filterBusiness.addEventListener("click",async ()=>{
  try{
    let result = await fetch(`${blogsURL}${Business}`);
    let res = await result.json();
    console.log(res);

    displayData(res);

  }catch(err){
    console.log(err);
  }
})

let filterEntertainment = document.getElementById("filter-Entertainment");
filterEntertainment.addEventListener("click",async ()=>{
  try{
    let result = await fetch(`${blogsURL}${Entertainment}`);
    let res = await result.json();
    console.log(res);
    displayData(res);

  }catch(err){
    console.log(err);
  }
})

let filterSports = document.getElementById("filter-Sports");
filterSports.addEventListener("click",async ()=>{
  try{
    let result = await fetch(`${blogsURL}${Sports}`);
    let res = await result.json();
    console.log(res);
    displayData(res);

  }catch(err){
    console.log(err);
  }
})

let filterHealth = document.getElementById("filter-Health");
filterHealth.addEventListener("click",async ()=>{
  try{
    let result = await fetch(`${blogsURL}${Health}`);
    let res = await result.json();
    console.log(res);
    displayData(res);

  }catch(err){
    console.log(err);
  }
})



 
// add your js code for index page here 