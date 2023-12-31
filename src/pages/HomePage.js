import React from 'react';
import { useState } from 'react';
import { IoAirplaneSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Home = () =>{
    const [LoginisModalOpen, setLoginModalOpen] = useState(false);
    const [SignUpisModalOpen, setSignUpModalOpen] = useState(false);

    const LoginopenModal = () => {
        setLoginModalOpen(true);
    };

    const SignUpopenModal = () => {
        setSignUpModalOpen(true);
    };
    
    const LogincloseModal = () => {
        setLoginModalOpen(false);
    }; 

    const SignUpcloseModal = () => {
        setSignUpModalOpen(false);
    }; 

    return(
        <div className='root'>
            <div className='title-header'>
                <div className='title-header-content'>
                    <h1><span>Record</span> Travel</h1>
                    <div className='menu-section'>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/TravelPage">여행 기록</Link>
                                </li>
                                <li>
                                    <Link to="/MyPage">커뮤니티</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            
            <div className='contents'>
                <div className='description'>
                    <IoAirplaneSharp className="plane-icon" size="24"/>
                    <p id='p1'>여행을 기록하고 싶다면,</p> 
                    <p id='p2'>Record Travel</p>
                    <p id='p3'>여행을 남기고 싶지 않으신가요?</p>
                    <p id='p4'>추억을 기록해드려요</p>
                    <button className="login-btn" onClick={LoginopenModal}>로그인 하기</button>
                </div>
            </div>

            {LoginisModalOpen && (
                <div className='modal-overlay'>
                    <div className='modal-container'>
                        <div className='modal-content'>
                            {/* 모달 내용 */}
                            <h2 className='modal-title'>로그인</h2>
                            <input type='text' placeholder='아이디' className='modal-input'></input>
                            <input type='text' placeholder='비밀번호' className='modal-input'></input>
                            <input type='text' placeholder='비밀번호 확인' className='modal-input'></input>
                            <p className='nonmember'>회원이 아니신가요? <button className="singup-btn" onClick={SignUpopenModal}>회원가입하기</button></p>
                            <button className='modal-button'>로그인</button>
                            <button onClick={LogincloseModal} className='modal-close-button'>닫기</button>
                        </div>
                    </div>
                </div>
            )}

            {SignUpisModalOpen && (
                <div className='modal-overlay'>
                    <div className='modal-container'>
                        <div className='modal-content'>
                            {/* 모달 내용 */}
                            <h2 className='modal-title'>회원가입</h2>
                            <input type='text' placeholder='아이디' className='modal-input'></input>
                            <input type='text' placeholder='비밀번호' className='modal-input'></input>
                            <input type='text' placeholder='비밀번호 확인' className='modal-input'></input>
                            <button className='modal-button'>가입</button>
                            <button onClick={SignUpcloseModal} className='modal-close-button'>닫기</button>
                        </div>
                    </div>
                </div>
            )}
        
        </div>
    )
}

export default Home;