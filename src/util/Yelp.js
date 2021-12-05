const apiKey = "mOgVgAI9ZRmj53UCTiSzHMVCYbldbjmFr9lZ-9g2bpxTnd4vBzZUvUCYjxt0IHeztSYv9ZKAHURyNhYJJAXdY_laxJtabshRWcCj-7u_DxpWxRFaO_tzUpQQaIWrYXYx";

const Yelp = {
  search(term, location, sortBy){
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
    {
      headers: {
        authorization: `Bearer ${apiKey}`
      }
    }).then(response => response.json())
    .then(responsejson => {
      if(responsejson.businesses){
        return responsejson.businesses.map((business) => {
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
          }
        })
      }
    })
  }
};

export default Yelp;
