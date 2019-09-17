import React, { Component } from 'react';
import FileUploadForm  from "./FileUploadForm";
export class AdminBanner extends Component {
    render() {
        return (
            <div>
                <FileUploadForm url={'https://azshopweb.com/khachhang/upload/upload.php?id=banner'} tk={"Cập nhật Banner"} />
            </div>
        );
    }
}

export default AdminBanner;
