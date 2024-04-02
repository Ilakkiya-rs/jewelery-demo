import React from 'react'
import './layout.css'
import { useNavigate } from "react-router-dom"
const Layout = () => {
    let navigate = useNavigate()
    return (
        <div className='section'>
            <div className="layout-container">
                <div className="about-section">
                    <div className="section-heading dotted-border grey-border text-center mrgb9x">
                        <div className="logo-design mrgb3x">
                            <h2 className="text-shadow small-circle">BQ</h2>
                        </div>
                        <h1>About Our product</h1>
                    </div>
                    <div className="section-detail">
                        <div className="row">
                            <div className="col-md-4 col-sm-6">
                                <div className="about-item">
                                    <div className="upper-text clearfix">
                                        <div className="left-text pull-left">
                                            <span className="primary-text">Mobile Computers</span>
                                            <h5 className="uppercase letterspace4x sub-heading">Flexible Aplication for various Industries</h5>
                                        </div>
                                        <div className="right-text pull-right">
                                            <span className="large-heading">01</span>
                                        </div>
                                    </div>
                                    <div className="lower-text">
                                        <p>We handheld devices based on Android system make your data collection as easy as possible.</p>
                                    </div>
                                    
                                </div>
                                <div className="layout-button"  onClick={() =>  navigate("/product-categories") }>
                                        Products <span className="arrow">&#8594;</span>
                                    </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="about-item">
                                    <div className="upper-text clearfix">
                                        <div className="left-text pull-left">
                                            <span className="primary-text">UHF RFID Readers</span>
                                            <h5 className="uppercase letterspace4x sub-heading">Powerful UFH reading</h5>
                                        </div>
                                        <div className="right-text pull-right">
                                            <span className="large-heading">02</span>
                                        </div>
                                    </div>
                                    <div className="lower-text">
                                        <p>printers are compact, user-friendly, reliable and durable. The printers efficiently print barcodes, RFID tags, bills, wristbands, etc., </p>
                                    </div>
                                </div>
                                <div className="layout-button"  onClick={() =>  navigate("/product-categories") }>
                                        Products <span className="arrow">&#8594;</span>
                                    </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="about-item">
                                    <div className="upper-text clearfix">
                                        <div className="left-text pull-left">
                                            <span className="primary-text">Biometric Readers</span>
                                            <h5 className="uppercase letterspace4x sub-heading">Barcode Reader</h5>
                                        </div>
                                        <div className="right-text pull-right">
                                            <span className="large-heading">03</span>
                                        </div>
                                    </div>
                                    <div className="lower-text">
                                        <p>Deliver flexible UHF data collection function, enhance efficiency and streamline management.</p>
                                    </div>
                                    
                                </div>
                                <div className="layout-button"  onClick={() =>  navigate("/product-categories") }>
                                        Products <span className="arrow">&#8594;</span>
                                    </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout

