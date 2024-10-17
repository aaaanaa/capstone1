import React, {useState} from 'react';
import '../css/Body&HeaderBar.css';
import '../css/ProfileFix.css';
import { Link } from "react-router-dom";

function ProfileFix() {

    const [profileImage, setProfileImage] = useState('image/profile.jpg');

    const changeImage = (event) => {
        const reader = new FileReader();
        reader.onload = () => {
            setProfileImage(reader.result);
        };
        reader.readAsDataURL(event.target.files[0]);
    };

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

            <div className="profile-section">
                <div className="profile-fix-header">
                    <h1>프로필 수정</h1>
                    <div className="profile-select">
                        <img src={profileImage} alt="현재 프로필 이미지" id="current-profile"/>
                        <input type="file" id="profile-image" name="profile-image" accept="image/*"
                               onChange={changeImage} />
                    </div>
                    <div className="input-profile">
                        <label htmlFor="nickname">닉네임</label>
                        <input type="text" id="nickname" placeholder="닉네임을 입력하세요"/>
                    </div>
                    <div className="input-profile">
                        <label htmlFor="introduce">소개</label>
                        <textarea id="introduce" placeholder="본인 소개"></textarea>
                    </div>
                    <div className="profile-modify">
                        <Link to="/MyProfile" className="profile-button">프로필 수정</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileFix;