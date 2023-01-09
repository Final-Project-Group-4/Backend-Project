

# MLAY EXCURSSIONS FULLSTACK PROJECT

<img alignContent="center" alt="companyBanner" width="80%" height="auto" style="display: block; margin: 0 auto" src="./client/src/assets/mlay excurssions.png"  />


   
   > We used ExpressJS to create a server,and build therestfull APIs to solve our
    client needs, firstly it fetches information
    to serve only display purposes on the
    Frontend, the rendering of all the tour
    information available on the database and
    also ones that allow for the proper
    maintenance of the website, providing the
    client with the tools to erase, update and
    add meaningful data. For the database
    we used mongoDB and the connection was established
    with Mongoose.
    
    
Table of Contents

* [Backend Project](#Backend-Project)
   * [Key Features](#key-features)
   * [User Registration & Login](#user-registration-&-login)
   * [Technologies Used](#technologies-used)

## Key features 

* Server Side Programming
* Admin permissions for managing own content
* Contact forms for inquiries 
 
<!--         
## Installation 
```
    1. Clone the repo
    2. Run `npm i`
    3. Open the terminal 
    4. Run node server.js
    5. Open another terminal for the client folder
    6. Run `npm run start` 
``` -->

## User Registration & Login

>We Provide the client with a URL where he will have access to protected routes. The client has admin access that allows him to add, remove or update the Tours Page. We used bcrypt, to generate a hashed password and JWT to create a token to provide to the user on registration to be stored on the frontend for accessing the protected routes. Another way we used JWT is when we need a token that will be given to the user via email when he decides to change his password.

<img src="./client/src/assets/jwt.svg" width="80" height="80"></img>


## Technologies used 

<div style="width:90%; backgroundColor:red">
<img src="./client/src/assets/github.svg" width="30" height="30"></img>
<img src="./client/src/assets/cdnlogo.com_node-js.svg" width="80" height="80"></img>
<img src="./client/src/assets/mongodb-ar21.svg" width="90" height="50"></img>
<img src="./client/src/assets/512px-Sass_Logo_Color.svg.png" width="50" height="50"></img>
<img src="./client/src/assets/reactjs-ar21.svg" width="90" height="50"></img>
<img src="./client/src/assets/figma-ar21.svg" width="90" height="auto"></img>
<img src="./client/src/assets/cdnlogo.com_javascript.svg" width="30" height="auto"></img>
<img src="./client/src/assets/material-ui-seeklogo.com.svg" width="40" height="auto"></img>
</div>

<!-- Tour:
GetAllTours: Get : http://localhost:4000/api/tours
GetSingleTour: Get: http://localhost:4000/api/tours/:id
createTour: Post: http://localhost:4000/api/tours
updateTour: Patch/put: http://localhost:4000/api/tours/:id
createTour: Delete : http://localhost:4000/api/tours/:id

Gallery :
GetAllImages: Get : http://localhost:4000/api/gallery
GetSingleImage: Get: http://localhost:4000/api/gallery/:id
createImage: Post: http://localhost:4000/api/gallery
deleteGallery: Delete : http://localhost:4000/api/gallery/:id


User :
Login: Post: http://localhost:4000/api/admin -->
