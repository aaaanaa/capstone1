import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); // 기본 폼 제출 방지
        setError('');
        setLoading(true);

        try {
            const response = await axios.post('http://localhost:8080/api/users/login', {
                username,
                password,
            });
            alert(response.data); // 서버에서 받은 메시지
            // 로그인 성공 시 username을 로컬 스토리지에 저장
            localStorage.setItem('username', username);
            navigate('/'); // 로그인 성공 후 메인 페이지로 이동
        } catch (err) {
            if (err.response && err.response.data) {
                setError(err.response.data); // 서버에서 받은 에러 메시지
            } else {
                setError("알 수 없는 오류가 발생했습니다."); // 기본 에러 메시지
            }
        } finally {
            setLoading(false);
        }
    };


    const styles = {
        form: {
            margin: '140px auto',
            width: '350px',
        },
        title: {
            fontSize: '30px',
            textAlign: 'left',
        },
        label: {
            display: 'block',
            margin: '24px 0 8px',
            textAlign: 'left',
        },
        input: {
            display: 'block',
            width: '100%',
            margin: '8px 0',
            borderRadius: '6px',
            border: '1px solid #e5e5e5',
            fontSize: '14px',
            padding: '11px 15px',
        },
        button: {
            display: 'block',
            width: '100%',
            margin: '24px 0',
            backgroundColor: 'black',
            borderRadius: '6px',
            border: 'none',
            color: 'white',
            fontSize: '16px',
            padding: '10px',
            textAlign: 'center',
        },
        registerMessage: {
            color: '#ababab',
            margin: '24px 0',
            textAlign: 'center',
        },
    };

    return (
        <>
            <form id="login-form" name="login" style={styles.form} onSubmit={handleSubmit}>
                <h1 className="login-title" style={styles.title}>로그인</h1>
                <div id="username-field">
                    <label htmlFor="username" style={styles.label}>아이디</label>
                    <input
                        id="username"
                        name="username"
                        type="text"
                        placeholder="아이디"
                        style={styles.input}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div id="password-field">
                    <label htmlFor="password" style={styles.label}>비밀번호</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="비밀번호"
                        style={styles.input}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <div style={{ color: 'red' }}>{error}</div>}
                <button type="submit" style={styles.button} disabled={loading}>
                    {loading ? 'Logging in...' : '로그인'}
                </button>
                <div className="register-message" style={styles.registerMessage}>
                    아직 회원이 아니신가요? <a href="/register">회원가입</a>
                </div>
            </form>
        </>
    );
};

export default LoginPage;
