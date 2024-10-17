import React from 'react';
import '../css/Body&HeaderBar.css';
import '../css/MyProduct.css';
import { Link } from "react-router-dom";

function MyProduct() {
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

            <div className="profile-container">
                <div className="profile-sidebar">
                    <div className="profile-side-up">
                        <h2 className="bold">마이페이지</h2>
                        <img src="image/profile.jpg" alt="프로필 이미지"/>
                        <p className="username-side">독고순광</p>
                        <div className="profile-side-follow">
                            <div>
                                <p className="bold">내 팔로워</p>
                                <p>150</p>
                            </div>
                            <div>
                                <p className="bold">내 팔로우</p>
                                <p>20</p>
                            </div>
                        </div>
                    </div>
                    <div className="profile-side-down">
                        <div className="profile-menu">
                            <div className="profile-menu-item"><Link to="/MyProfile" className="link-style">마이페이지</Link></div>
                        </div>
                        <div className="menu">
                            <div className="profile-menu-item"><Link to="/UserInfoFix" className="link-style">회원 정보 수정</Link></div>
                            <div className="profile-menu-item"><Link to="/MyCart" className="link-style">장바구니</Link></div>
                            <div className="profile-menu-item"><Link to="/MyBookmark" className="link-style">북마크</Link></div>
                            <div className="profile-menu-item bold"><Link to="/MyProduct" className="link-style">내 상품</Link></div>
                            <div className="profile-menu-item"><Link to="/MyPost" className="link-style">내 게시글</Link></div>
                            <div className="profile-menu-item"><Link to="/MyVideo" className="link-style">내 쇼트비디오</Link></div>
                        </div>
                    </div>
                </div>

                <div className="profile-main">
                    <div className="my-product-header">
                        <h2>내 상품</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyProduct;