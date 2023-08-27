import React from "react";

const Pagination = ({
  id,
  username,
  full_name,
  profile_picture,
  bio,
  followers,
  following,
  posts,
  location,
  website,
  verified,
}) => {
  return (
    <div>
      <div
        style={{
          border: "2px solid red",
          marginBottom: "20px",
          marginTop:"20px",
          padding: "50px",
        }}
      >
        <h1> UserId : ID-{id}  {username}</h1>
        <h2> Name : {full_name} </h2>
        <img
          src={profile_picture}
          style={{ border: "2px solid black", borderRadius: "50%" }}
        />
        <h3> City : {location} </h3>
        <h3> Status : {verified ? "Verified" : "Not Verified"} </h3>
        <p> {bio} </p>
        <p> Followers : {followers} </p>
        <p> Following : {following} </p>
        <p>Total Posts : {posts} </p>
      </div>
    </div>
  );
};

export default Pagination;
