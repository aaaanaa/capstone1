import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState(''); // 비밀번호 확인 필드
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); // 로딩 상태 추가
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError('비밀번호가 일치하지 않습니다.');
            return;
        }

        setError(''); // 이전 오류 메시지 초기화
        setLoading(true); // 로딩 시작

        try {
            const response = await axios.post('http://localhost:8080/api/users/register', {
                username,
                password,
                email,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            // 로컬 스토리지에 사용자 정보 저장
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            console.log('User registered:', response.data);

            // 입력 필드 초기화
            setUsername('');
            setPassword('');
            setConfirmPassword('');
            setEmail('');

            // 성공적으로 등록된 후 로그인 페이지로 이동
            navigate('/LoginPage'); // 여기서 리디렉션
        } catch (error) {
            if (error.response) {
                console.error('Error response:', error.response.data);
                setError(error.response.data.message || '회원가입 중 오류가 발생했습니다.');
            } else if (error.request) {
                console.error('No response received:', error.request);
                setError('아이디가 중복되었습니다.');
            } else {
                console.error('Error message:', error.message);
                setError('회원가입 중 오류가 발생했습니다.');
            }
        } finally {
            setLoading(false); // 로딩 종료
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Confirm Password:</label>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            {error && <div style={{ color: 'red' }}>{error}</div>} {/* 에러 메시지 표시 */}
            <button type="submit" disabled={loading}>{loading ? 'Registering...' : 'Register'}</button> {/* 로딩 상태 표시 */}
        </form>
    );
}

export default Register;
