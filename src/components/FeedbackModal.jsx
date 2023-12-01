export default function FeedbackModal({state}){

    function successOrFail(state){
      if(state==="success"){
        return (
          <div className="alert alert-success hidden" role="alert" id="alert-success">
                                <p>Operation completed successfully!</p>
                        </div>
        )
        
      }else {return (
        <div className="alert alert-warning hidden" role="alert" id="alert-error">
                            <p>Error completing operation, please try again later!</p>
                        </div>
      )}
    }
    return(
      <div className="modal" tabIndex="-1" id="testmodal">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        {successOrFail(state)}         
      </div>
    </div>
  </div>
</div>  

    )
}