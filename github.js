class GitHub{
    constructor(){
        this.client_id = '408889995251955492a8';
        this.client_secret = '53186ebf468fcd482275733a6c00bde2c4475497';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret =${this.client_secret}`);

        const profile = await profileResponse.json();

        return{
            profile //it is basicall profile : profile
        }
    }
}