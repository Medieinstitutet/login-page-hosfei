// pulls up elements from login-box
const userNameInput = document.getElementById('userNameInput');
const passwordInput = document.getElementById('passwordInput');
const loginBtn = document.getElementById('loginBtn');

// pulls up elements from signup-box
const signUpBtn = document.getElementById('signUpBtn');
const newUserName = document.getElementById('newUserName');
const newPassword = document.getElementById('newPassword');

// div that types messages
const demo = document.getElementById('demo');

if(localStorage.getItem('users')) {
    console.log('');
} else {
    let users = [ 
        {id: 0, userName: "janne", password: "test"},
        {id: 1, userName: "hossein", password: "gurka"},
        {id: 2, userName: "tomten", password: "julklapp"}
     ]
    localStorage.setItem('users', JSON.stringify(users));
}

if(localStorage.getItem('loggedInUser')) {
    printUserName();
}

 loginBtn.addEventListener('click', () => {
    let users = JSON.parse(localStorage.getItem('users'));
    let user = users.find(user => user.userName === userNameInput.value && user.password === passwordInput.value); 
  //  console.log("janne", user)

     if (user) {

        let loggedInUser = userNameInput.value;
        localStorage.setItem('loggedInUser', loggedInUser);

        printUserName();
    
    } else {
       userDoesNotExist();
       console.log('vill inte visa sig');
    } 
}); 

//////////////
// FUNCTIONS
function printUserName() {

    let loggedInUser = localStorage.getItem('loggedInUser');
    demo.innerText = 'Welcome! You are logged in  as: ' + loggedInUser + ' ';

    // creates a logout button:
    let logoutBtn = document.createElement("button")
    logoutBtn.innerText = "Log out!";
    demo.appendChild(logoutBtn);

    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("loggedInUser"); 
      demo.innerText = 'You are now logged out! ';
    })
}

function userDoesNotExist() {
    demo.innerText = 'Username or password is incorrect ';
}

// to save new users:
signUpBtn.addEventListener('click', () => {
   // console.log('click button'); 
    let users = JSON.parse(localStorage.getItem('users'));

    let newUser = {
        id: users.length + 1,
        userName: newUserName.value,
        password: newPassword.value

    }
 //   console.log('it works', newUser); 
    demo.innerText = 'Grattis till ditt nya medlemsskap! ' + 
    ' Prova att logga in nu, ' + newUser.userName + ' ;) ';

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
});