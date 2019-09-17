import React, { Component } from 'react';
import FileUploadForm  from "./FileUploadForm";
export class AdminBannerChay extends Component {
    render() {
        return (
            <div>
                <FileUploadForm url={'https://azshopweb.com/khachhang/upload/upload.php?id=banner1'} tk={"Cập nhật Banner 1"} />
                <hr />
                <FileUploadForm url={'https://azshopweb.com/khachhang/upload/upload.php?id=banner2'} tk={"Cập nhật Banner 2"} />
                <hr />
                <FileUploadForm url={'https://azshopweb.com/khachhang/upload/upload.php?id=banner3'} tk={"Cập nhật Banner 3"} />
                <hr />
                <FileUploadForm url={'https://azshopweb.com/khachhang/upload/upload.php?id=banner4'} tk={"Cập nhật Banner 4"} />
            </div>
        );
    }
}

export default AdminBannerChay;
