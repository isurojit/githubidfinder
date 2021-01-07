class GitHub{
    constructor(){
        this.client_id = '408889995251955492a8';
        this.client_secret = '53186ebf468fcd482275733a6c00bde2c4475497';
        this.repos_count =5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret =${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret =${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return{
            profile, //it is basicall profile : profile
            repos
        }
    }
}