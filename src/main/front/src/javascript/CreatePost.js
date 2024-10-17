// import React from 'react';
// import '../css/Body&HeaderBar.css';
// import '../css/CreatePost.css';
// import { Link } from "react-router-dom";
// import Main_Post from "./Main_Post";
//
// function CreatePost() {
//     return (
//         <div>
//             <div className="header">
//                 <p className="main-logo"><Link to="/" className="link-style">공방친구</Link></p>
//                 <div className="search-box">
//                     <label>
//                         <input type="text" placeholder="찾고 싶은 상품을 검색하세요"/>
//                     </label>
//                     <img src="image/search.png" alt="검색 아이콘"/>
//                 </div>
//                 <div className="profile">
//                     <Link to="/MyProfile" className="link-style"><img src="image/profile.jpg" alt="프로필 아이콘"/></Link>
//                     <Link to="/MyProfile" className="link-style"><p>권순광</p></Link>
//                 </div>
//             </div>
//             <form action="/board/CreatePost" method="post">
//                 writer: <input type="text" name="nickName"/> <br/> <!--boardWriter == nickname-->
//                 pass: <input type="text" name="boardPass"/> <br/>
//                 title: <input type="text" name="boardTitle"/> <br/>
//                 contents: <textarea name="postContent" cols="30" rows="10"></textarea> <br/>
//                 <input type="submit" value="글작성"/>
//             </form>
//         </div>
//     );
// }
//
// export default CreatePost;

import React from 'react';
import { Link } from 'react-router-dom'; // Link 컴포넌트 import
import '../css/CreatePost.css';

function CreatePost() {
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
            {/*<div className="post-writing-section">     */}
            <div className="middle">
                <div className="post-create">
                    <h2>글 작성하기</h2>
                    <div className="action-buttons">
                        <button className="edit-btn">수정</button>
                        <button className="delete-btn">삭제</button>
                    </div>
                    <form>
                    <div>
                            <label htmlFor="nickName">작성자: </label>
                            <textarea id="nickName" placeholder="이름을 입력하세요" rows="1" className="textarea"></textarea>
                        </div>
                        <div>
                            <label htmlFor="postContent">내용을 입력하세요: </label>
                        </div>
                        <div>
                            <textarea id="postContent" placeholder="내용을 입력하세요" rows="10"
                                      className="full-width-textarea"></textarea>
                        </div>
                        <div className="submit-btn"><Link to="/MainPost" className="link-style">저장</Link></div>
                    </form>
                    <div className="cancel-btn"><Link to="/MainPost" className="link-style">취소</Link></div>
                </div>
            </div>
        </div>
    );
}

export default CreatePost;