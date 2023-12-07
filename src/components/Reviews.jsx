export default function Reviews({product, addReview}){


function stars(rating){
   
     const emptyStar = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
</svg>
     const starsList = [emptyStar,emptyStar,emptyStar,emptyStar,emptyStar];

for (let index = 0; index < rating; index++) {
    const filledStar = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>

    starsList.shift()
    starsList.push(filledStar)
    
}
return starsList.reverse()
}




function handleClick(event){
    const form = document.querySelector("#review-form");

    form.classList.remove("hidden");

    event.target.classList.add("hidden");


}

function handleSubmit(event){
    event.preventDefault()

    const form = event.target

const review = {
    Rating: form.rating.value,
    Reviewer: form.reviewer.value,
    Text: form.text.value,
    ProductID: product.ID
}

addReview(review)

  form.classList.add("hidden");

  document.querySelector("#toggle-form").classList.remove("hidden")

  form.reset()
}



    if( product.Reviews!==undefined){
    return(
        <div className="container">
        
        
            <button id="toggle-form" onClick={(event)=>handleClick(event)} type="button" className="btn btn-secondary">Anmeld</button>

            <form id="review-form" className="hidden my-5 text-center" onSubmit={(event)=>handleSubmit(event)}>
                

                    <label className="form-label w-25 row mx-auto" htmlFor="rating">Rating</label>
                    <input className="form-control w-25 row mx-auto" name="rating" type="number"></input>

                    <label className="form-label w-25 row mx-auto" htmlFor="reviewer">Navn</label>
                    <input className="form-control w-25 row mx-auto" name="reviewer" type="text"></input>

                    <label className="form-label w-25 row mx-auto" htmlFor="text">Kommentar</label>
                    <textarea rows="5" className="form-control w-25 row mx-auto" name="text" type="text" />

                    <button  type="submit" className="btn btn-success w-25 my-2 ">Send</button>
               
            </form>

            {product.Reviews.map( (review)=>( 
                <div className="row card w-50 mx-auto my-2" key={review.ID}>
                    <div className="card-body" >
                        <h4 style={{color:"gold"}}className="card-title"> {stars(review.Rating)}</h4>
                    <h5 className="card-subtitle  mb-2 text-body-secondary"> {review.Reviewer}</h5>                    
                    <div className="card-text">{review.Text}</div>
                    
                            </div>
                    
                   
                    
                </div>
            ))}
        
        
        
        
        </div>

        

    )
}
}