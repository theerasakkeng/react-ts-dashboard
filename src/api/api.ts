import axios from "axios";
const getData = async () => {
    try {
        let res = await axios.get('https://covid19.ddc.moph.go.th/api/Cases/today-cases-all')

    }catch(err)
    {
        console.log(err)
    }
    // return new Promise((resolve, reject) => {
    //     axios.defaults.headers.common["Content-Type"] =
    //         "application/x-www-form-urlencoded";
    //     axios.get('https://covid19.ddc.moph.go.th/api/Cases/today-cases-all').then((res) => {
    //         resolve(res.data)
    //     }).catch((err) => {
    //         reject(err.response)
    //     })
    // })
}
export default getData;