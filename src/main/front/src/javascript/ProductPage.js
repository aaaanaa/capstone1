import React from 'react';
import '../css/Body&HeaderBar.css';
import '../css/ProductPage.css';
import { Link } from "react-router-dom";

function ProductPage() {
    return (
        <div>
            <div className="header">
                <p className="main-logo"><Link to="/" className="link-style">공방친구</Link></p>
                <div className="search-box">
                    <label>
                        <input type="text" placeholder="찾고 싶은 상품을 검색하세요"/>
                    </label>
                    <img src="image/search.png" alt="검색 아이콘"/>
                </div>
                <div className="profile">
                    <Link to="/MyProfile" className="link-style"><img src="image/profile.jpg" alt="프로필 아이콘"/></Link>
                    <Link to="/MyProfile" className="link-style"><p>권순광</p></Link>
                </div>
            </div>

            <div className="product-middle">
                <div className="product-top">
                    <div className="product-image">
                        <img src="image/product-soap.png" alt="상품 이미지" />
                    </div>
                    <div className="product-info">
                        <p>상품 가격 및 배송 정보</p>
                        <div className="product-button">
                            <Link to="/PurchasePage" className="button-link">장바구니</Link>
                            <Link to="/PurchasePage" className="button-link">구매하기</Link>
                        </div>
                    </div>
                </div>

                <div className="product-explanation">
                    <div className="product-tab">
                        <div className="tab select">상품상세</div>
                        <div className="tab">상품후기 (0)</div>
                        <div className="tab">상품문의</div>
                        <div className="tab">배송/교환/반품 안내</div>
                    </div>
                    <p>피부에 민감한 사람들을 위해 준비했습니다</p>
                    <img src="image/product-soap.png" className="image-ex" alt="상품 설명" />
                    <img src="image/soap-explanation.png" className="image-ex" alt="상품 설명2" />
                </div>
            </div>
        </div>
    );
}

export default ProductPage;