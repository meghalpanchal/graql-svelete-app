const requestGraphApi = (query, variables) => {
    return new Promise((resolve,reject) => {
        fetch(
            "https://rnd-ns2-tech-challenge-next-be.vercel.app/api/graphql",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                query,
                variables,
              }),
            }
          )
            .then((response) => response.json())
            .then((response) => {
             resolve (response.data);
              
            }).catch((error)=> {
                reject(error);
            })
    }) 
}

export {requestGraphApi};
