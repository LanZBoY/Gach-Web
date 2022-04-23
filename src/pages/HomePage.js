import React from 'react';
import Bar from '../components/Bar';

const HomePage = () => {
    return (
        <>
        <Bar/>
        <header className="masthead">
            <div className="container px-4 px-lg-5 h-100">
                <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                    <div className="col-lg-8 align-self-end">
                        <h1 className="font-weight-bold">歡迎！！</h1>
                        <hr className="divider" />
                    </div>
                    <div className="col-lg-8 align-self-baseline">
                        <p className="text-white-75 mb-5">一個水利網頁的起點</p>
                    </div>
                </div>
            </div>
        </header>
        
        </>

    );
}

export default HomePage;
