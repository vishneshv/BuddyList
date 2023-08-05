var users =[
    {
      "userid": "usr0001",
      "name": "Vishnesh Vojjala",
      "profilepicture": "https://media.licdn.com/dms/image/D5635AQGW4eyaxdJ_QA/profile-framedphoto-shrink_400_400/0/1684661173682?e=1691478000&v=beta&t=8ZH6g_CFtx-aweabh4UWuL6lY64pMvokcRXGy8LrPjo",
      "statusmessage": "Eat Code Sleep Repeat",
      "presence": 2
    },
    {
      "userid": "usr0002",
      "name": "stove hughes",
      "profilepicture": "https://randomuser.me/api/portraits/men/2.jpg",
      "statusmessage": "a positive mindset brings positive things.",
      "presence": 2
    },
    {
      "userid": "usro0003",
      "name": "emma smith",
      "profilepicture": "https://randomuser.me/api/portraits/women/3.jpg",
      "statusmessage": "coding is my passion!",
      "presence": 3
    },
    {
      "userid": "usr0004",
      "name": "john doe",
      "profilepicture": "https://randomuser.me/api/portraits/men/4.jpg",
      "statusmessage": "exploring the world!",
      "presence": 4
    },
    {
      "userid": "usr0005",
      "name": "alice cooper",
      "profilepicture": "https://randomuser.me/api/portraits/women/5.jpg",
      "statusmessage": "music lover",
      "presence": 5
    },
    {
      "userid": "usr0006",
      "name": "lisa roberts",
      "profilepicture": "https://randomuser.me/api/portraits/women/6.jpg",
      "statusmessage": "learning something new every day",
      "presence": 3
    },
    {
      "userid": "usr0007",
      "name": "michael jackson",
      "profilepicture": "https://randomuser.me/api/portraits/men/7.jpg",
      "statusmessage": "king of pop",
      "presence": 4
    },
    {
      "userid": "usr0008",
      "name": "olivia williams",
      "profilepicture": "https://randomuser.me/api/portraits/women/8.jpg",
      "statusmessage": "reading is my escape",
      "presence": 3
    },
    {
      "userid": "usr0009",
      "name": "david miller",
      "profilepicture": "https://randomuser.me/api/portraits/men/9.jpg",
      "statusmessage": "sports enthusiast",
      "presence": 2
    },
    {
      "userid": "usr00010",
      "name": "sophia anderson",
      "profilepicture": "https://randomuser.me/api/portraits/women/10.jpg",
      "statusmessage": "always smiling",
      "presence": 1
    },
    {
      "userid": "usro00011",
      "name": "william thompson",
      "profilepicture": "https://randomuser.me/api/portraits/men/11.jpg",
      "statusmessage": "coffee lover",
      "presence": 1
    },
    {
      "userid": "usr00012",
      "name": "mia harris",
      "profilepicture": "https://randomuser.me/api/portraits/women/12.jpg",
      "statusmessage": "exploring the universe",
      "presence": 1
    },
    {
      "userid": "usr00013",
      "name": "ethan smith",
      "profilepicture": "https://randomuser.me/api/portraits/men/13.jpg",
      "statusmessage": "code. sleep. repeat.",
      "presence": 2
    },
    {
      "userid": "usr00014",
      "name": "emily parker",
      "profilepicture": "https://randomuser.me/api/portraits/women/14.jpg",
      "statusmessage": "nature lover",
      "presence": 4
    },
    {
      "userid": "usro0015",
      "name": "noah jones",
      "profilepicture": "https://randomuser.me/api/portraits/men/15.jpg",
      "statusmessage": "adventure awaits!",
      "presence": 4
    }
]

var useridarray=[];

function toupdate() {

var main = document.getElementById('abcdef');
for (let i = 0; i < users.length; i++) {
  let user = users[i];


var image = document.createElement("img");
image.src = user.profilepicture;

var commonClassName = 'img2';
const cClassName = `${commonClassName}`;
image.classList.add(cClassName);

var k=user.userid;
useridarray.push(k);
var uniqueClassName = `${k}`;
image.id =uniqueClassName ;

var pres=user.presence;
if(pres==1){
  image.style.border = '5px solid rgb(6, 249, 46)';
}
else if(pres==2){
  image.style.border = '5px solid #FF0000';
}
else if(pres==3){
  image.style.border = '5px solid #f6fa04';
}
else{
  image.style.border = '5px solid #808080';
}

var name = document.createElement("h2");
name.textContent =user.name;
var about = document.createElement("p");
about.textContent =  user.statusmessage;
var statusid=uniqueClassName +'id';
about.setAttribute("id", statusid);

var commonClass = 'aboutid';
const statuscommonName = `${commonClass}`;
about.classList.add(statuscommonName);

var t1 = document.createElement("span");
t1.appendChild(name);
t1.appendChild(about);


var newElement = document.createElement('a');
newElement.href = '';
var iconElement = document.createElement('i');
iconElement.className = 'fa fa-ellipsis-v';
iconElement.setAttribute('aria-hidden', 'true');
newElement.appendChild(iconElement);
dots="dots";
newElement.setAttribute("id",dots);

var t2 = document.createElement("div");
t2.appendChild(image);
t2.appendChild(t1);
t2.appendChild(newElement);

t2.setAttribute("id", "er");
var maindivid = uniqueClassName;
t2.classList.add(maindivid);

main.appendChild(t2);
}
  }

  
function updatePresenceStatus(status){
    var pres=status.presence;
  var p=document.getElementById(status.userid);
  if(pres==1){
    p.style.border = '5px solid rgb(6, 249, 46)';
  }
  else if(pres==2){
    p.style.border = '5px solid #FF0000';
  }
  else if(pres==3){
    p.style.border = '5px solid #f6fa04';
  }
  else{
    p.style.border = '5px solid #808080';
  }
  return('Presence Updated');
  }

function updateStatusMessage(status){
    var msg=status.statusMessage;
    var pou=document.getElementById(status.userid+"id");
    pou.textContent=msg;
    console.log("status updated");
  }

function deleteUserid(userid){
    const parentDiv = document.getElementById("abcdef");
    console.log(parentDiv);
    const childDivToDelete = parentDiv.querySelector(`.${userid}`);
      abcdef.removeChild(childDivToDelete);
      return("User Deleted")
  }

function addUser(user){
  var main = document.getElementById('abcdef');
  var image = document.createElement("img");
  image.src = user.profilepicture;
  
  var commonClassName = 'img2';
  const cClassName = `${commonClassName}`;
  image.classList.add(cClassName);
  
  var k=user.userid;
  useridarray.push(k);
  var uniqueClassName = `${k}`;
  image.id =uniqueClassName ;
  
  var pres=user.presence;
  if(pres==1){
    image.style.border = '5px solid rgb(6, 249, 46)';
  }
  else if(pres==2){
    image.style.border = '5px solid #FF0000';
  }
  else if(pres==3){
    image.style.border = '5px solid #f6fa04';
  }
  else{
    image.style.border = '5px solid #808080';
  }
  
  var name = document.createElement("h2");
  name.textContent =user.name;
  var about = document.createElement("p");
  about.textContent =  user.statusmessage;
  var statusid=uniqueClassName +'id';
  about.setAttribute("id", statusid);
  
  var commonClass = 'aboutid';
  const statuscommonName = `${commonClass}`;
  about.classList.add(statuscommonName);
  
  
  
  var t1 = document.createElement("span");
  t1.appendChild(name);
  t1.appendChild(about);
  
  var t2 = document.createElement("div");
  t2.appendChild(image);
  t2.appendChild(t1);
  t2.setAttribute("id", "er");
  
  var maindivid = uniqueClassName;
  t2.classList.add(maindivid);
  
  
  main.appendChild(t2);
} 