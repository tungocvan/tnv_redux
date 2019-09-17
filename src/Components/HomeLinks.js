import React, { Component } from 'react';
import { database } from '../Components/FireBase';
class HomeLinks extends Component {
    constructor(props) {
      super(props);
      this.state ={
        tk:[]
      }
    }
    
    componentWillMount() {
      this.dataRef = database.ref('tbl_tknh');
      this.dataRef.on('value',(dulieu) => {
         let tknh = dulieu.val();
         var tk=[];
         for (const key in tknh) {
          // console.log(tknh[key].name);
           tk.push(tknh[key].name);
         }
         this.setState({
          tk: tk,
      }) 
      })
    }
    
    
    render() {
        // if(this.state.tk){
        //   console.log('tk1: '+ this.state.tk[0]);
        //   console.log('tk2: '+ this.state.tk[1]);
        //   console.log('tk3: '+ this.state.tk[2]);
        //   console.log('tk4: '+ this.state.tk[3]);
          
          
        // }
        return (
            <section className="section-links bg padding-y-sm">
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <header className="section-heading heading-line">
          <h4 className="title-section bg text-uppercase">Thông Tin Ngân Hàng - Chủ TK : PHAN VĂN TÍN - Chi nhánh Sóc Trăng</h4>
        </header>
        <ul className="list-icon row">
          <li style={{paddingLeft:25}} className="col-md-3 bank"><a href="/"><img style={{width:100}} alt="anh"  src="http://azshopweb.com/khachhang/upload/uploads/2.png" /><span>Số TK : {this.state.tk[0]}</span></a></li>
          <li style={{paddingLeft:25}} className="col-md-3 bank"><a href="/"><img style={{width:100}} alt="anh"  src="http://azshopweb.com/khachhang/upload/uploads/3.png" /><span>Số TK : {this.state.tk[1]}</span></a></li>
          <li style={{paddingLeft:25}} className="col-md-3 bank"><a href="/"><img style={{width:100}} alt="anh"  src="http://azshopweb.com/khachhang/upload/uploads/4.png" /><span>Số TK : {this.state.tk[2]}</span></a></li>
          <li style={{paddingLeft:25}} className="col-md-3 bank"><a href="/"><img style={{width:100}} alt="anh"  src="http://azshopweb.com/khachhang/upload/uploads/1.png" /><span>Số TK : {this.state.tk[3]}</span></a></li>
        </ul>
      </div> {/* col // */}
      </div>
    {/* <figure className="mt-3 banner p-3 bg-secondary">
      <div className="text-lg text-center white">Another banner can be here</div>
    </figure> */}
  </div>{/* container // */}
</section>

        );
    }
}

export default HomeLinks;