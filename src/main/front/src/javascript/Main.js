import React from 'react';
import '../css/Body&HeaderBar.css';
import '../css/Main.css';
import { Link } from "react-router-dom";

const Main = () => {
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
                    <Link to="/MyProfile" className="link-style"> <p>{username}</p> {/* 여기서 username 사용 */} </Link>
                </div>
            </div>
            <div className="center">
                <div className="left-sidebar">
                    <div className="category">
                        <h2>식품<img src="image/plus.png" alt="플러스 아이콘"/></h2>
                        <div className="subcategory">
                            <ul>
                                <li>디저트/음료</li>
                                <li>수제먹거리</li>
                                <li>농축수산물</li>
                            </ul>
                        </div>
                    </div>
                    <div className="category">
                        <h2>패션/주얼리<img src="image/plus.png" alt="플러스 아이콘"/></h2>
                        <div className="subcategory">
                            <ul>
                                <li>주얼리</li>
                                <li>의류</li>
                                <li>패션잡화</li>
                            </ul>
                        </div>
                    </div>
                    <div className="category">
                        <h2>홈리빙<img src="image/plus.png" alt="플러스 아이콘"/></h2>
                        <div className="subcategory">
                            <ul>
                                <li>홈인테리어</li>
                                <li>주방/생활</li>
                            </ul>
                        </div>
                    </div>
                    <div className="category">
                        <h2>케이스/문구<img src="image/plus.png" alt="플러스 아이콘"/></h2>
                        <div className="subcategory">
                            <ul>
                                <li>케이스/악세서리</li>
                                <li>문구/취미</li>
                                <li>기념일/파티</li>
                                <li>일러스트/사진</li>
                                <li>차량용품</li>
                            </ul>
                        </div>
                    </div>
                    <div className="category">
                        <h2>뷰티<img src="image/plus.png" alt="플러스 아이콘"/></h2>
                        <div className="subcategory">
                            <ul>
                                <li>기초/색조/향수</li>
                                <li>헤어/바디/클렌징</li>
                            </ul>
                        </div>
                    </div>
                    <div className="category">
                        <h2>반려동물<img src="image/plus.png" alt="플러스 아이콘"/></h2>
                        <div className="subcategory">
                            <ul>
                                <li>사료/간식</li>
                                <li>반려패션</li>
                                <li>반려용품</li>
                            </ul>
                        </div>
                    </div>
                    <div className="category">
                        <h2>영유아동<img src="image/plus.png" alt="플러스 아이콘"/></h2>
                        <div className="subcategory">
                            <ul>
                                <li>영유아패션</li>
                                <li>영유아용품</li>
                                <li>답례품/기념품</li>
                            </ul>
                        </div>
                    </div>
                    <div className="category">
                        <h2>공예<img src="image/plus.png" alt="플러스 아이콘"/></h2>
                        <div className="subcategory">
                            <ul>
                                <li>인테리어 공예</li>
                                <li>주방 공예</li>
                                <li>생활 공예</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer">
                        <ul>
                            <li><img src="image/bookmark.png" alt="북마크 아이콘"/> 북마크</li>
                            <li>
                                <Link to="/LoginPage" className="link-style"><img src="image/profile-set.png"
                                                                                  alt="프로필 수정 아이콘"/></Link>
                                <Link to="/LoginPage" className="link-style">
                                    <li>로그인/로그아웃</li>
                                </Link>
                            </li>
                            <li><img src="image/calendar-set.png" alt="기념일 수정 아이콘"/> 기념일 수정</li>
                            <li><img src="image/setting.png" alt="설정 아이콘"/> 설정</li>
                        </ul>
                    </div>
                </div>
                <div className="middle">
                    <div className="tab-menu">
                        <div className="select">상품</div>
                        <div className="cursorOn"><Link to="/MainPost" className="link-style">게시글</Link></div>
                        <div className="cursorOn"><Link to="/MainVideo" className="link-style">쇼트비디오</Link></div>
                    </div>

                    <div className="banner">
                        <div className="arrow">&lt;</div>
                        <div className="banner-image">배너</div>
                        <div className="arrow">&gt;</div>
                    </div>

                    <div className="product">
                        <div className="product-item cursorOn">
                            <Link to="/ProductPage" className="link-style">
                                <img src="image/product-soap.png" alt="상품 이미지"/>
                                <p>친환경 비누</p>
                                <p className="price">10,000원</p>
                                <div className="rating">
                                    <img src="image/star.png" alt="별점 아이콘"/>
                                    <img src="image/star.png" alt="별점 아이콘"/>
                                    <img src="image/star.png" alt="별점 아이콘"/>
                                    <img src="image/star.png" alt="별점 아이콘"/>
                                    <img src="image/star.png" alt="별점 아이콘"/>
                                    <span>(30)</span>
                                </div>
                            </Link>
                        </div>
                        <div className="product-item  cursorOn">
                            <Link to="/ProductPage" className="link-style">
                                <img src="image/product-snack.png" alt="상품 이미지"/>
                                <p>수제 마카롱</p>
                                <p className="price">15,000원</p>
                                <div className="rating">
                                    <img src="image/star.png" alt="별점 아이콘"/>
                                    <img src="image/star.png" alt="별점 아이콘"/>
                                    <img src="image/star.png" alt="별점 아이콘"/>
                                    <img src="image/star.png" alt="별점 아이콘"/>
                                    <img src="image/star.png" alt="별점 아이콘"/>
                                    <span>(13)</span>
                                </div>
                            </Link>
                        </div>
                        <div className="product-item  cursorOn">
                            <Link to="/ProductPage" className="link-style">
                                <img src="image/product-bracelet.png" alt="상품 이미지"/>
                                <p>스틸 팔찌</p>
                                <p className="price">9,800원</p>
                                <div className="rating">
                                    <img src="image/star.png" alt="별점 아이콘"/>
                                    <img src="image/star.png" alt="별점 아이콘"/>
                                    <img src="image/star.png" alt="별점 아이콘"/>
                                    <img src="image/star.png" alt="별점 아이콘"/>
                                    <img src="image/star.png" alt="별점 아이콘"/>
                                    <span>(60)</span>
                                </div>
                            </Link>
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

export default Main;