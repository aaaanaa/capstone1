import React from 'react';
import '../css/Body&HeaderBar.css';
import '../css/UserInfoFix.css';
import { Link } from "react-router-dom";

function UserInfoFix() {
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
                            <div className="profile-menu-item bold"><Link to="/UserInfoFix" className="link-style">회원 정보 수정</Link></div>
                            <div className="profile-menu-item"><Link to="/MyCart" className="link-style">장바구니</Link></div>
                            <div className="profile-menu-item"><Link to="/MyBookmark" className="link-style">북마크</Link></div>
                            <div className="profile-menu-item"><Link to="/MyProduct" className="link-style">내 상품</Link></div>
                            <div className="profile-menu-item"><Link to="/MyPost" className="link-style">내 게시글</Link></div>
                            <div className="profile-menu-item"><Link to="/MyVideo" className="link-style">내 쇼트비디오</Link></div>
                        </div>
                    </div>
                </div>

                <div className="profile-main">
                    <div className="userinfo-header">
                        <h2>회원 정보 수정</h2>
                        <form>
                            <label htmlFor="name">이름 <span style={{color: 'red'}}>*</span></label>
                            <input type="text" id="name" name="name" placeholder="새 이름 입력" required/>

                            <label htmlFor="password">비밀번호 <span style={{color: 'red'}}>*</span></label>
                            <input type="password" id="password" name="password" placeholder="새 비밀번호 입력" required/>

                            <label htmlFor="email">이메일 <span style={{color: 'red'}}>*</span></label>
                            <input type="email" id="email" name="email" placeholder="새 이메일 입력" required/>

                            <label htmlFor="phone">전화번호 <span style={{color: 'red'}}>*</span></label>
                            <input type="tel" id="phone" name="phone" pattern="\d{3}-\d{3,4}-\d{4}"
                                   placeholder="ex) 010-1234-5678" required/>

                            <label htmlFor="address">배송 주소 <span style={{color: 'red'}}>*</span></label>
                            <textarea id="address" name="address" rows="3" placeholder="상세주소까지 입력해주세요"
                                      required></textarea>

                            <label htmlFor="birthday">생일 <span style={{color: 'red'}}>*</span></label>
                            <input type="date" id="birthday" name="birthday" value="2000-01-01" required/>

                            <label htmlFor="gender">성별 </label>
                            <select id="gender" name="gender">
                                <option value="">선택 안함</option>
                                <option value="male">남성</option>
                                <option value="female">여성</option>
                            </select>

                            <div className="userinfo-change">
                                <Link to="/MyProfile" className="userinfo-change-button">정보 수정하기</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserInfoFix;