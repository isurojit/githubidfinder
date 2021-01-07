//initi GitHub
const github = new GitHub();

//Search input
const searchUser = document.querySelector('#search-user');

//Search input event listner
searchUser.addEventListener('keyup', (e) =>{
    //Get input text
    const userText = e.target.value;

    if(userText !== ''){
        //Make http call
        github.getUser(userText)
        .then(data =>{
            if(data.profile.message === 'Not Found'){
                //show alert
                alert('Not found')
            }else{
                //show profile

            }
        })
    }else{
        //Clear profile
    }
});