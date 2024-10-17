import React from 'react';
/* import axios from 'axios'; */
/* import LoginPage from "./LoginPage"; */
import './App.css';
import { Routes, Route } from "react-router-dom";
import Main from "./javascript/Main";
import MainPost from "./javascript/Main_Post";
import MainVideo from "./javascript/Main_Video";
import MyProfile from "./javascript/MyProfile";
import ProductPage from "./javascript/ProductPage";
import PurchasePage from "./javascript/PurchasePage";
import DeliveryPage from "./javascript/DeliveryPage";
import UserInfoFix from "./javascript/UserInfoFix";
import ProfileFix from "./javascript/ProfileFix";
import MyCart from "./javascript/MyCart";
import MyBookmark from "./javascript/MyBookmark";
import MyProduct from "./javascript/MyProduct";
import MyPost from "./javascript/MyPost";
import MyVideo from "./javascript/MyVideo";
import LoginPage from "./LoginPage";
import Register from "./Register";
import UsersList from "./UsersList";
import CreatePost from "./javascript/CreatePost";


function App() {
    return (
        <Routes>
            {/* 메인 페이지 */}
            <Route path="/" element={<Main />} />
            {/* 메인_포스트 페이지 */}
            <Route path="/MainPost" element={<MainPost />} />
            {/* 메인_비디오 페이지 */}
            <Route path="/MainVideo" element={<MainVideo />} />
            {/* 내 프로필 페이지 */}
            <Route path="/MyProfile" element={<MyProfile />} />
            {/* 상품 상세 페이지 */}
            <Route path="/ProductPage" element={<ProductPage />} />
            {/* 상품 구매 페이지 */}
            <Route path="/PurchasePage" element={<PurchasePage />} />
            {/* 구매 완료 페이지 */}
            <Route path="/DeliveryPage" element={<DeliveryPage />} />
            {/* 프로필 수정 페이지 */}
            <Route path="/ProfileFix" element={<ProfileFix />} />
            {/* 회원 정보 수정 페이지 */}
            <Route path="/UserInfoFix" element={<UserInfoFix />} />
            {/* 내 장바구니 페이지 */}
            <Route path="/MyCart" element={<MyCart />} />
            {/* 내 북마크 페이지 */}
            <Route path="/MyBookmark" element={<MyBookmark />} />
            {/* 내 상품 페이지 */}
            <Route path="/MyProduct" element={<MyProduct />} />
            {/* 내 게시글 페이지 */}
            <Route path="/MyPost" element={<MyPost />} />
            {/* 내 쇼트비디오 페이지 */}
            <Route path="/MyVideo" element={<MyVideo />} />

                {/* 게시글 작성 페이지 */}
                <Route path="/CreatePost" element={<CreatePost />} />

            <Route path="/LoginPage" element={<LoginPage />} />
            {/* 로그인 페이지 */}
            <Route path="/Register" element={<Register />} />
            {/* 회원가입 페이지 */}
            <Route path="/UsersList" element={<UsersList />} />
            {/* 사용자 목록 페이지 */}
        </Routes>
    );
}

export default App;

/*
function App() {
    return (
        <div className="App">
            <Main />
        </div>
    );
}

export default App;

*/


/*
이 아래 아마 쓸데 없는것

class App extends Component {
    render() {
        return <div id={"App"}></div>;
    }
    componentDidMount() {
        const FixRatio = () => {
            const root = document.querySelector("#root");
            const app = document.querySelector("#app");

            let width = root.clientWidth;
            let height = width * 0.5625;

            if (height > root.clientHeight) {
                height = root.clientHeight;
                width = height * 1.7777;
            }

            app.style.width = `${width}px`
            app.style.height = `${height}px`
        };
        window.onresize = FixRatio;
        FixRatio();
    }
}
export default App;


*/
/*
function selectData(){
  axios.post('/testData',["가","나","다"])
      .then(function (res){
        console.log(res)
      });
}

function App() {

  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <button onClick={() =>selectData()}>조회</button>
          </div>
        </header>
      </div>
  );
}

export default App;
*/