const apiKey = "WHGKbARW6AxIK-AZX9PtwvQRZS7Fu-4k6vU46hI5xlu-80CG7Rvkpb-4qoUz3b6hhvxSEmlja56O8roCVMjn4FpYlwEe5LyWvWqqLR4Juh92hmxHBlNeVW4uBOpLYXYx";

const Yelp = {
  search(term, location, sortBy){
    fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
    {
      headers: {
        authorization: `Bearer ${apiKey}`
      }
    }
    ).then(response => response.json())
    .then(responsejson => {
      console.log(responsejson)
    })
  }
};

export default Yelp;
