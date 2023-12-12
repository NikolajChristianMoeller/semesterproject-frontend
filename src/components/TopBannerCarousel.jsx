export default function TopBannerCarousel(){
    return(
    
    <div id="top-banner-carousel" className=" carousel slide text-center"  data-bs-interval="6000" data-bs-ride="carousel"  style={{maxHeight: "5vh", backgroundColor:"#e5deca", color:"black"}} >
  
  <div className="carousel-inner">

    <div className="carousel-item active">
      <p className="mt-2">1-14 DAGES LEVERING</p>
    </div>

    <div className="carousel-item">
          <p className="mt-2" >ALTID GRATIS FRAGT</p>
    </div>

   
  </div>
</div>)
}