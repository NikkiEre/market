const baseUrl = "https://fakestoreapi.com/";

export const fetchRequest = async (url) => {
    const answer = await fetch(baseUrl + url)
        .then(response => {
            if(response.ok) {
              return response.json()  
            } else {
              throw("error");
            }
        })
        .catch(err => {
            throw err;
        })
        .finally(() => console.log("load off"))

    console.log(answer);
    return answer;
}