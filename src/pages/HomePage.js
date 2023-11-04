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
        <div>
            <div className='title-header'>
                <div className='title-header-content'>
                    <h1>Record Travel</h1>
                    <div className='login-signup-menu'>
                        <button id="btn" onClick={LoginopenModal}>로그인</button>
                        <button id="btn" onClick={SignUpopenModal}>회원가입</button>
                    </div>
                </div>
            </div>
            
            <div className='contents'>
                <div className='description'>
                    <IoAirplaneSharp className="plane-icon" size="24"/>
                    <p id='p1'>여행을 기록하세요</p> 
                    <p id='p2'>Record Travel.</p>
                </div>
                
                <div className='menu-section'>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/IntroPage">소개</Link>
                            </li>
                            <li>
                                <Link to="/TravelPage">여행 기록</Link>
                            </li>
                            <li>
                                <Link to="/MyPage">My</Link>
                            </li>
                            <li>
                                <Link to="/AddPage">문의</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='rt-content'>
                    
                </div>
             

            </div>

            {LoginisModalOpen && (
                <div className='modal-container'>
                    <div className='modal-content'>
                        {/* 모달 내용 */}
                        <h2 className='modal-title'>로그인</h2>
                        <input type='text' placeholder='아이디' className='modal-input'></input>
                        <input type='text' placeholder='비밀번호' className='modal-input'></input>
                        <input type='text' placeholder='비밀번호 확인' className='modal-input'></input>
                        <button className='modal-button'>로그인</button>
                        <button onClick={LogincloseModal} className='modal-close-button'>닫기</button>
                    </div>
                </div>
            )}

            {SignUpisModalOpen && (
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
            )}
        
        </div>
    )
}

export default Home;