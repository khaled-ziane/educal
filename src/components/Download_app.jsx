import React from 'react'
import './download_app.css'

function Download_app() {
    return (
        <>
            <div className="download">
                <div className="download-container">
                    <div className="download-title">
                        <h1>Start Learning by <br />
                            Downloading Apps.</h1>
                    </div>
                    <div className="download-apps">
                        <div className="store apple-store">
                            <i className="fab fa-apple"></i>
                            <p>Apple Store</p>
                        </div>
                        <div className="store play-store">
                            <i className="fab fa-google-play"></i>
                            <p>Play Store</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Download_app
