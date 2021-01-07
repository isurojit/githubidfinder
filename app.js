//initi GitHub
const github = new GitHub();
//initi UI
const ui = new UI();

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
                ui.showAlert('User Not Found','alert alert-danger');
                
            }else{
                //show profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })
    }else{
        //Clear profile
        ui.clearProfile();
    }
});