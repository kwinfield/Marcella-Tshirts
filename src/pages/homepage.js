import React from 'react';
import ProductListing from '../features/product-listing';

import { Helmet } from 'react-helmet'

export default function HomePage(props) {
  return <div>
            <Helmet>
                <title>Marcella | Lee - HomePage</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <div className='jumbotron m-0 p-0'>
              <h1 className='title'>Marcella Lee</h1>
            </div>
            <h1 className='text-center mt-5'>Spring Fashion 2019</h1>
            <div className='container col-md-10 mt-5'>
              <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="d-block w-100" src={require('../images/bscarousel1.jpg')} alt="First slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={require('../images/bscarousel2.jpg')} alt="Second slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={require('../images/bscarousel3.jpg')} alt="Third slide" />
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
              <h1 className='text-center mt-5'>Specials</h1>
              <div className='container row mt-5 justify-content-between col-12 mx-auto'>
                <div className="card col-md-3">
                  <img className="card-img-top" src={require('../images/samplesaleitem1.jpg')} alt="Card image cap" />
                  <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>
                <div className="card col-md-3">
                  <img className="card-img-top" src={require('../images/samplesaleitem2.jpg')} alt="Card image cap" />
                  <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>
                <div className="card col-md-3">
                  <img className="card-img-top" src={require('../images/samplesaleitem3.jpg')} alt="Card image cap" />
                  <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row text-center mt-5 justify-content-around container mx-auto">
              <div className='col-md-4 mt-5'>
                <img height={600} src={require('../images/aboutusimage.jpg')} alt=""/>
              </div>
              <div className='col-md-4'>
                <h2 className='aboutus'>About Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut suscipit diam. Donec pulvinar neque vitae euismod imperdiet. Curabitur tempus hendrerit metus vitae lobortis. Ut mollis nunc neque, sit amet malesuada mauris malesuada vitae. Curabitur vitae eros lectus. Suspendisse potenti. Vivamus consectetur nibh a quam ultrices luctus. Suspendisse ac nibh sem.</p>
              </div>
            </div>
         </div>
};
