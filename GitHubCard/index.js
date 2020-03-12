/* Step 1: using axios, send a GET request to the following URL 
           (replacing the placeholder with your Github name):
           https://api.github.com/users/<your name>
*/

const followersArray = [  
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"
];

axios.get('https://api.github.com/users/thomasjohnp')
.then(response => {
  let card = createCard(response.data)
  entryPoint.appendChild(card)
  })

.catch(error => {
  console.log("the data was not returned", error);
})

followersArray.forEach(person => {
  axios.get(`https://api.github.com/users/${person}`)
  .then(response => {
    entryPoint.append(createCard(response.data));
  })
  .catch(error => {
    console.log("the data was not returned", error);
  })
})


function createCard(arg) {
  const cardObj = document.createElement("div");
  const userImg = document.createElement("img");
  const cardInfo = document.createElement("div");
  const name = document.createElement("h3");
  const userName = document.createElement("a");
  const userLocation = document.createElement("p");
  const profile = document.createElement("p");
  const profLink = document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");

  cardObj.classList.add("card");
  userImg.src = arg.avatar_url;
  cardInfo.classList.add("card-info");
  name.classList.add("name");
  userName.classList.add("username");

  name.textContent = `${arg.name}`;
  userName.textContent = `${arg.login}`;
  userLocation.textContent = `Location: ${arg.location}`;
  //profile.textContent = "Profile: ";
  userName.setAttribute("href", arg.html_url);
  //profLink.textContent = "github";
  userName.style.textDecoration = "none";
  userName.style.paddingBottom = "2%";
  followers.textContent = `Followers: ${arg.followers}`;
  following.textContent = `Following: ${arg.following}`;
  bio.textContent = `Bio: ${arg.bio}`;

  cardObj.append(userImg, cardInfo);
  cardInfo.append(name, userName, userLocation, profile, followers, following, bio);
  profile.append(profLink);

  return cardObj;
}

const entryPoint = document.querySelector(".cards");

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/


/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
