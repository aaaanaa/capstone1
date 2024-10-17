import React from 'react';
import '../css/Body&HeaderBar.css';
import '../css/PurchasePage.css';
import { Link } from "react-router-dom";

function PurchasePage() {
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
            <div className="purchase-main">
                <div className="purchase-section">
                    <div className="consumer-info">
                        <div>
                            <span className="purchase-section-title">구매자 정보</span>
                            <span>권순광</span>
                            <span>010-5511-5756</span>
                            <span>서울특별시 금천구 시흥 00동 000-0 101호</span>
                        </div>
                        <button>배송지 변경</button>
                    </div>
                </div>

                <div className="purchase-section">
                    <div className="item-info">
                        <img src="image/product-soap.png" alt="상품 이미지"/>
                        <div>
                            <span className="purchase-section-title">상품 정보</span>
                            <span>친환경 비누</span>
                            <span>2개</span>
                            <span>11,400원</span>
                        </div>
                    </div>
                </div>

                <div className="purchase-section">
                    <div className="payment-info">
                        <div>
                            <span className="purchase-section-title">결제 정보</span>
                            <div>
                                <label><input type="radio" name="payment-method" checked/> 계좌 이체</label>
                                <label><input type="radio" name="payment-method"/> 신용/체크카드</label>
                            </div>
                            <div>
                                <label htmlFor="card-number">카드번호 </label>
                                <input type="text" id="card-number" name="card-number" placeholder="카드번호를 입력하세요"/>
                            </div>
                        </div>
                        <div className="total-amount">
                            총 결제금액: 11,400원
                        </div>
                    </div>
                </div>

                <Link to="/DeliveryPage" className="payment-button link-style">결제하기</Link>
            </div>
        </div>
    );
}

export default PurchasePage;