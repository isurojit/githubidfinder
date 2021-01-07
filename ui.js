class UI{
    constructor(profile) {
        this.profile = document.querySelector('#profile');
    }

    //Display profile in UI
    showProfile(user){
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class"row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${user.avatar_url}">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                </div>
                <div class="col-md-9>
                    <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                    <span class="badge badge-primary">Public Gists: ${user.public_gists}</span>
                    <span class="badge badge-primary">Followers: ${user.followers}</span>
                    <span class="badge badge-primary">Following: ${user.following}</span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Company:${user.company}</li>
                        <li class="list-group-item">Website/Blog:${user.blog}</li>
                        <li class="list-group-item">Location:${user.location}</li>
                        <li class="list-group-item">Member Since:${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
        `;
    }

    //show repos
    showRepos(repos){
        let output = '';
        repos.forEach((repo)=>{
            output +=`
            <div class='card card-body mb-2">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank"> ${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge badge-primary">Star: ${repo.targazers_count}</span>
                        <span class="badge badge-primary">Fork: ${repo.forks_count}</span>
                        <span class="badge badge-primary">Watches: ${repo.watchers_count}</span>
                    </div>
                </div>
            </div>
            `;
        });
        //output the repo
        document.querySelector('#repos').innerHTML = output;
    }

    //Show alert Msg
    showAlert(msg, className){
        //clear any remaining alerts
        this.clearAlertMsg();
        //create element
        const div = document.createElement('div');
        //add class
        div.className =className;
        //Add text
        div.appendChild(document.createTextNode(msg));
        //get parent
        const container = document.querySelector('.searchContainer');
        //get the search box
        const search = document.querySelector('.search');
        //insert alert
        container.insertBefore(div, search);

        //timeout after 3 sec
        setTimeout(()=>{
            this.clearAlertMsg()
        }, 3000);
    }

    //clear alert msg
    clearAlertMsg(){
        const currentAlert = document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
        }
    }

    //Clear profile
    clearProfile(){
        this.profile.innerHTML='';
    }
}