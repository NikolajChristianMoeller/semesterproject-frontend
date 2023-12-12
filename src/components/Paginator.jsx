export default function Paginator({count, setPage, page, loadProducts}){
    const pageSize = 20
    const pages = Math.ceil(count / pageSize);

    const buttons = []

    for(let p = 0; p < pages; p++){
        buttons.push(<button onClick={ async ()=>{
            page.limit = p*pageSize
            setPage(page)
            loadProducts()
        }}
        key={`page${p}`} className="btn btn-primary" id={`pages${p+1}`}>{`${p+1}`}</button>)
    }
    return(
    <div className="row mt-5">
        <div className="btn-group mx-auto w-50 " role="group" aria-label="First group">
            {buttons}
        </div>
    </div>


    )

}