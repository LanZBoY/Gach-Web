import React from "react";
import Bar from "../components/Bar";

const HomePage = () => {
  return (
    <>
      <Bar />
      <header className="masthead">
        <div className="px-4 py-5 my-5 text-center">
          <img
            className="d-block mx-auto mb-4"
            src="https://s3.ap-southeast-1.amazonaws.com/web-content.fcu.edu.tw/wp-content/uploads/sites/71/2021/04/09171129/mark.png"
            alt=""
          />
          <h1 className="display-5 fw-bold">水利網頁</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
              創校四系之一，多年來成功培育台灣專業水利人才，專業含括水利防災、水資源、水土保育、環境生態等領域之工程、規劃與管理。本系系友四千餘人，遍布各水利機關重要主管，為全國培育水利工程與管理之典範學系。
            </p>
          </div>
        </div>
      </header>
    </>
  );
};

export default HomePage;
