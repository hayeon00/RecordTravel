import React from 'react';
import './TravelPage.css';
import { AiOutlinePlusCircle } from "react-icons/ai";

function TravelPage() {
  return (
    <div>
      <div className='title-header'>
        <div className='title-header-content'>
            <h1>Record Travel</h1>
        </div>
      </div>
      <div className='contents'>
        <div className='sub-title'>
          <h3>기록 남기기</h3>
        </div>
        <div className='tripBox'>
          <div className='add-location-box'>
            <p>여행지 추가하기</p>
            <AiOutlinePlusCircle className="plus-icon" size="60"/>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default TravelPage;