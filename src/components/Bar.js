import React from "react";
const Bar = () => {
  return (
    <>
      <header
        id="bar-header"
        className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom bg-secondary text-white"
      >
        <div className="col-1"></div>
        <div className="col-7">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
          >
            <img
              src="https://s3.ap-southeast-1.amazonaws.com/web-content.fcu.edu.tw/wp-content/uploads/sites/71/2021/04/09171129/mark.png"
              width="45px"
              height="45px"
              alt="Logo"
            />
            <span className="fs-4 text-white">水利網頁</span>
          </a>
        </div>
        <div className="col-3">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a href="/" className="nav-link text-white" aria-current="page">
                首頁
              </a>
            </li>
            <li className="nav-item">
              <a href="/pdf_view" className="nav-link text-white">
                PDF檔案
              </a>
            </li>
            <li className="nav-item">
              <a href="/photo" className="nav-link text-white">
                圖片檔案
              </a>
            </li>
            <li className="nav-item">
              <a href="/video" className="nav-link text-white">
                影片專區
              </a>
            </li>
          </ul>
        </div>
        <div className="col-1"></div>
      </header>
    </>
  );
};

export default Bar;
