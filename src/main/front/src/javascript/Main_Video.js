import React from 'react';
import '../css/Body&HeaderBar.css';
import '../css/Main_Video.css';
import {Link} from "react-router-dom";

function Main_Post() {
    // 로컬 스토리지에서 username 가져오기
    const username = localStorage.getItem('username') || '사용자'; // 기본값 '사용자' 설정
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
                    <Link to="/MyProfile" className="link-style">
                        <p>{username}</p> {/* 여기서 username 사용 */}
                    </Link>
                </div>
            </div>
            <div className="center">
                <div className="left-sidebar">
                    <h2 className="category">식품<img src="image/plus.png" alt="플러스 아이콘"/></h2>
                    <h2 className="category">패션<img src="image/plus.png" alt="플러스 아이콘"/></h2>
                    <h2 className="category">뷰티<img src="image/plus.png" alt="플러스 아이콘"/></h2>
                    <h2 className="category">스포츠<img src="image/plus.png" alt="플러스 아이콘"/></h2>
                    <h2 className="category">가구/인테리어<img src="image/plus.png" alt="플러스 아이콘"/></h2>
                    <h2 className="category">생활<img src="image/plus.png" alt="플러스 아이콘"/></h2>
                    <h2 className="category">건강<img src="image/plus.png" alt="플러스 아이콘"/></h2>
                    <h2 className="category">도서<img src="image/plus.png" alt="플러스 아이콘"/></h2>
                    <div className="footer">
                        <ul>
                            <li><img src="image/setting.png" alt="쇼츠 아이콘"/> 쇼츠</li>
                            <li><img src="image/setting.png" alt="북마크 아이콘"/> 북마크</li>
                            <li><img src="image/setting.png" alt="프로필 수정 아이콘"/> 프로필 수정</li>
                            <li><img src="image/setting.png" alt="기념일 수정 아이콘"/> 기념일 수정</li>
                            <li><img src="image/setting.png" alt="설정 아이콘"/> 설정</li>
                        </ul>
                    </div>
                </div>

                <div className="middle">
                    <div className="tab-menu">
                        <div className="cursorOn"><Link to="/" className="link-style">상품</Link></div>
                        <div className="cursorOn"><Link to="/MainPost" className="link-style">게시글</Link></div>
                        <div className="select">쇼트비디오</div>
                    </div>
                        <div className="post-section">
                            <div className="post-header">
                                <div className="user-info">
                                    <img src="image/profile.jpg" alt="프로필 이미지"/>
                                    <div>
                                        <p className="username">권순광</p>
                                        <p className="view">조회수 123K</p>
                                    </div>
                                </div>
                                <div className="follow-btn">팔로우</div>
                            </div>
                            <div className="post-actions">
                                <img src="image/like.png" alt="좋아요 아이콘"/>
                                <img src="image/dibs.png" alt="북마크 아이콘"/>
                                <img src="image/share.png" alt="공유 아이콘"/>
                            </div>
                            <div className="post-content">
                                친환경적이어서 피부에 안전한 비누 많이들 구매하세요~~~<br/>
                                2개 구매시 할인 이벤트 중입니다!!
                            </div>
                            <div className="comment-section">
                                <div className="comment">
                                    <img src="image/soap-explanation.png" alt="댓글 작성자 이미지"/>
                                    <p><strong>김채영:</strong> 3번째 재구매 중입니다! 너무 좋아요~!</p>
                                </div>
                            </div>
                    </div>

                </div>

                <div className="right-sidebar">
                    <div className="section">
                        <h3>추천 카테고리</h3>
                        <ul>
                            <li><img src="image/setting.png" alt="카테고리 아이콘"/>카테고리1</li>
                            <li><img src="image/setting.png" alt="카테고리 아이콘"/>카테고리2</li>
                            <li><img src="image/setting.png" alt="카테고리 아이콘"/>카테고리3</li>
                            <li><img src="image/setting.png" alt="카테고리 아이콘"/>카테고리4</li>
                            <li><img src="image/setting.png" alt="카테고리 아이콘"/>카테고리5</li>
                            <li><img src="image/setting.png" alt="카테고리 아이콘"/>카테고리6</li>
                            <li><img src="image/setting.png" alt="카테고리 아이콘"/>카테고리7</li>
                            <li><img src="image/setting.png" alt="카테고리 아이콘"/>카테고리8</li>
                        </ul>
                    </div>
                    <div className="section">
                        <h3>추천 작가</h3>
                        <ul>
                            <li><img src="image/setting.png" alt="작가 아이콘"/>작가1</li>
                            <li><img src="image/setting.png" alt="작가 아이콘"/>작가2</li>
                            <li><img src="image/setting.png" alt="작가 아이콘"/>작가3</li>
                            <li><img src="image/setting.png" alt="작가 아이콘"/>작가4</li>
                            <li><img src="image/setting.png" alt="작가 아이콘"/>작가5</li>
                            <li><img src="image/setting.png" alt="작가 아이콘"/>작가6</li>
                            <li><img src="image/setting.png" alt="작가 아이콘"/>작가7</li>
                            <li><img src="image/setting.png" alt="작가 아이콘"/>작가8</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main_Post;