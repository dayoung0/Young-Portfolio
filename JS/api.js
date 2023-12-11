

const url = 'https://api.jikan.moe/v4/top/anime';

async function getData(){


    try{
const response = await fetch(url);
const data = await response.json();
if(response.status === 200){
console.log('success', data);
}else
{console.log('Server error', data.error.message)
}


    }catch(error){
        console.log('Fetch Error', error)

    }

}
getData();



const baseUrl = "https://api.jikan.moe/v4/top/anime";
const pageNumber = 1;  // Replace this with the page number you want to retrieve

// Assuming you have other parameters like "type," "filter," etc.
const params = new URLSearchParams({
 // type: "your_type_value",
 // filter: "your_filter_value",
 // rating: "your_rating_value",
 // sfw: true,  // or false depending on your needs
  page: pageNumber,
//  limit: 10  // Replace with your desired limit
});

const url2 = `${baseUrl}?${params.toString()}`;

fetch(url2)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Process the data for the next page
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
