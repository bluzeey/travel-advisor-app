import axios from 'axios'
const URL='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'


export const getPlacesData=async(sw,ne)=>{
    try {
        const {data:{data}}=await axios.get(URL,{
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng
        },
        headers: {
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
          'x-rapidapi-key': 'f466d5b6f0mshcc168a1529c8acap1b5e8ejsnf72c0338e51d'
        }
      })
        
        return data
    } catch (error) {
        console.log(error)
    }
}