// import React from 'react'

// export const LoadApi = async() => {
//     try {
//       const res= await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=d2436f3&s=movie&page=1");
//     const data=res.json();
//     return data;
//     } catch (error) {
//         console.log(error)
//     }
  
// }
import React from 'react';

export const LoadApi = async () => {
    try {
        let allData = [];
        for (let page = 1; page <= 6; page++) {
            const res = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}&s=movie&page=${page}`);
            const data = await res.json();
            if (data.Search) {
                allData = [...allData, ...data.Search];
            }
        }

        return allData;
    } catch (error) {
        console.log(error);
        return [];
    }
};
