import axios from 'axios';


export const getLink= async (formatStr)=>{
    try {
        const linkFormatter= `https://api.shrtco.de/v2/shorten?url=${formatStr}`;
        const res = await axios.get(linkFormatter, {
            headers: {
            Accept: 'application/json',
            },
        });
        return res;   
    } catch (error) {
        console.lod(error)
    }
}