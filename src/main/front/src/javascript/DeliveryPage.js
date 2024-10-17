import React from 'react';
import '../css/Body&HeaderBar.css';
import '../css/DeliveryPage.css';
import { Link } from "react-router-dom";

function DeliveryPage() {
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

            <div className="delivery-main">
                <h1>구매 완료</h1>
                <p>주문이 성공적으로 완료되었습니다!</p>

                <div className="order-details">
                    <div className="delivery-item-info">
                        <img src="image/product-soap.png" alt="상품 이미지"/>
                        <div>
                            <p><strong>친환경 비누</strong></p>
                            <p><strong>개수:</strong> 2</p>
                            <p><strong>금액:</strong> 11,400원</p>
                        </div>
                    </div>
                    <p><strong>총 금액:</strong> 11,400원</p>
                    <p><strong>주문 번호:</strong> 123456</p>
                    <p><strong>배송 위치:</strong> 서울특별시 금천구 시흥 00동 000-0 101호</p>
                </div>
            </div>
        </div>
    );
}

export default DeliveryPage;