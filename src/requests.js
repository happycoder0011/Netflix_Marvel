const API_KEY = "5f9d78184a7217e211b2a7470d0332c6";
const hash="4588646191279f4641295cd0ac663692";
const requests ={
    fetchtcharacters:`/v1/public/characters?ts=1&apikey=${API_KEY}&hash=${hash}`,
    fetchcomics:`/v1/public/comics?ts=1&apikey=${API_KEY}&hash=${hash}`,
   
}


export default requests;