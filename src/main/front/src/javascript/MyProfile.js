import React from 'react';
import '../css/Body&HeaderBar.css';
import '../css/MyProfile.css';
import { Link } from "react-router-dom";

function MyProfile() {
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
                    </div>
                    <div className="profile-side-down">
                        <div className="profile-menu">
                            <div className="profile-menu-item bold"><Link to="/MyProfile" className="link-style">마이페이지</Link></div>
                        </div>
                        <div className="menu">
                            <div className="profile-menu-item"><Link to="/UserInfoFix" className="link-style">회원 정보 수정</Link></div>
                            <div className="profile-menu-item"><Link to="/MyCart" className="link-style">장바구니</Link></div>
                            <div className="profile-menu-item"><Link to="/MyBookmark" className="link-style">북마크</Link></div>
                            <div className="profile-menu-item"><Link to="/MyProduct" className="link-style">내 상품</Link></div>
                            <div className="profile-menu-item"><Link to="/MyPost" className="link-style">내 게시글</Link></div>
                            <div className="profile-menu-item"><Link to="/MyVideo" className="link-style">내 쇼트비디오</Link></div>
                        </div>
                    </div>
                </div>

                <div className="profile-main">
                    <div className="profile-header">
                        <div className="profile-info">
                            <img src="image/profile.jpg" alt="프로필 이미지"/>
                            <div className="user-info">
                                <p className="username-main">독고순광</p>
                                <p className="introduce">비누 공방을 운영하고 있습니다.<br/>전화로 문의하기 &gt; 031-1234-4567</p>
                            </div>
                        </div>
                        <div className="profile-stats">
                            <div className="profile-edit-btn"><Link to="/ProfileFix" className="link-style">프로필 수정</Link></div>
                            <div className="profile-follow">
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
                    </div>

                    <div className="tabs">
                        <div className="tab selected">상품</div>
                        <div className="tab">게시물</div>
                        <div className="tab">쇼트비디오</div>
                    </div>
                    <div className="posts">
                        <div className="post">
                            <Link to="/ProductPage" className="link-style">
                            <img className="post-product-image" src="image/product-soap.png" alt="게시글 이미지"/>
                            <div className="post-product-actions">
                                <img src="image/like.png" alt="좋아요 아이콘"/>
                                <img src="image/dibs.png" alt="북마크 아이콘"/>
                                <img src="image/share.png" alt="공유 아이콘"/>
                            </div>
                            <p>친환경적이어서 피부에 안전한 비누</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyProfile;