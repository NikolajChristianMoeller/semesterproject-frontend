export default function Feedback(){

   
    return(
     <div>
       <div className="alert alert-success hidden" role="alert" id="feedback-success">
                                <p>Operation completed successfully!</p>
                        </div>
      <div className="alert alert-warning hidden" role="alert" id="feedback-error">
                            <p>Error completing operation, please try again later!</p>
                        </div>

{/*Delete Feedback*/}
          <div className="alert alert-success hidden" role="alert" id="feedback-delete-success">
                                <p>Delete completed successfully!</p>
                        </div>     

<div className="alert alert-warning hidden" role="alert" id="feedback-delete-error">
                            <p>Error deleting item, please try again later!</p>
                        </div>

{/*Create Feedback*/}

<div className="alert alert-success hidden" role="alert" id="feedback-create-success">
                                <p>Create completed successfully!</p>
                        </div>     

<div className="alert alert-warning hidden" role="alert" id="feedback-create-error">
                            <p>Error creating item, please try again later!</p>
                        </div>

{/*Update Feedback*/}

<div className="alert alert-success hidden" role="alert" id="feedback-update-success">
                                <p>Item updated completed successfully!</p>
                        </div>     

<div className="alert alert-warning hidden" role="alert" id="feedback-update-error">
                            <p>Error updating item, please try again later!</p>
                        </div>
     </div>
    )
}