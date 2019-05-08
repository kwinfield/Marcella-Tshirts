import React from 'react';
import { Helmet } from 'react-helmet'

import ProductListing from '../features/product-listing'

export default function ShopPage(props) {
  return <div>
            <Helmet>
                <title>Marcella | Lee - HomePage</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <div className='shopJumbotron m-0 p-0'>
              <h1 className='shopTitle'>Shop Now</h1>
            </div>
            <div className='container mt-5'>
              <ProductListing />
            </div>
         </div>
}
