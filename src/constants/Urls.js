const baseURL='https://jsonplaceholder.typicode.com'
const flightURL='https://api.spacexdata.com'
const flight='/v3/launches'
const posts='/posts'
const urls={
    posts:{
       base: posts,
        byId:(id)=>`${posts}/${id}`
    },
    flights:{
        base:flight
    }

}

export {baseURL,urls,flightURL}