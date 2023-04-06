import React from "react";
import hello from "./../assets/images/hero1.png"

function Home() {
    

    return(
        <>
        <div class="container">
        <div class="row featurette  dcenter-div">
          <div class="col-md-7 order-md-2 mt-10">
            <h2 class="featurette-heading">Hi, This is  <span class="text-muted textcap">mannem bhanu prakash</span></h2>
            <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
            <button type="button" class="btn btn-primary textcap">resume <i class="bi bi-cloud-download"></i></button>
          </div>
          <div class="col-md-5 order-md-1">
            <img class="featurette-image img-fluid rounded-circle" data-src="holder.js/500x500/auto" alt="500x500" style={{width: '500px', height: '500px'}} src={hello} data-holder-rendered="true"/>
          </div>
        </div>
        </div>
        </>
    )

}
export default Home