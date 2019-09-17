import React, { Component } from 'react';
import HomeMainCateLeft from './HomeMainCateLeft';
import HomeMainSlider from './HomeMainSlider';
import HomeMainRight from './HomeMainRight';
import HomeMainBanner from './HomeMainBanner';

class HomeMain extends Component {
    
     render() {
         return (
            <section className="section-main bg padding-y-sm">
    <div className="container">
    <div className="card">
      <div className="card-body">
        <div className="row row-sm">
          <HomeMainCateLeft/>
          <HomeMainSlider/>
          <HomeMainRight/>
        </div> {/* row.// */}
      </div> {/* card-body .// */}
    </div> {/* card.// */}
    <HomeMainBanner/>
  </div> {/* container .//  */}
</section>

        );
    }
}

export default HomeMain;