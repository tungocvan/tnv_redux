import React, { Component } from 'react';
//import JsonDataToLocalStore from './JsonDataToLocalStore';
// import { database } from './FireBase';
// import FireBaseToLocalStore from './FireBaseToLocalStore';
export class FooterButton extends Component {
   
render() {
        
        return (
            <aside className="col-sm-3 col-md-3 white">
                {/* <h5 className="title">Customer Services</h5> */}
                {/* <ul className="list-unstyled"> */}
                {/* <li><a className="btn btn-facebook" title="Facebook" target="_blank" href="/"><i className="fab fa-facebook-f  fa-fw" /></a>
                 <a className="btn btn-instagram" title="Instagram" target="_blank" href="/"><i className="fab fa-instagram  fa-fw" /></a>
                 <a className="btn btn-youtube" title="Youtube" target="_blank" href="/"><i className="fab fa-youtube  fa-fw" /></a>
                 <a className="btn btn-twitter" title="Twitter" target="_blank" href="/"><i className="fab fa-twitter  fa-fw" /></a></li> */}
                 {/* {this.updateUrlToFireBase('https://azshopweb.com/json/test.json','tbl_Van')} */}
                 {/* <FireBaseToLocalStore tbl={'tbl_Van/'} store={'van2'}/>    */}
                {/* <JsonDataToFireBase url='https://ipinfo.io/' tbl='tbl_Van1' store='tblVan1' />     */}
                {/* </ul>  */}
                <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.972482785349!2d105.96315971483108!3d9.597637682465846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a052095cc4c647%3A0x5876bfb5dff1528e!2zMTE4IFBow7ogTOG7o2ksIFBoxrDhu51uZyAyLCBTw7NjIFRyxINuZywgOTYwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1564026419277!5m2!1svi!2s" width={320} height={176} frameBorder={0} style={{border: 0}} allowFullScreen />
                {/* <JsonDataToLocalStore url='http://azshopweb.com/json/ip.php' store='tblIp' /> */}
            </aside>
        );
    }
}

export default FooterButton;
