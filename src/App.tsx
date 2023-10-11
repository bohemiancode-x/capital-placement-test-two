import React from 'react';
import Header from './components/Header';
import {Col, Row} from 'antd';
import FilterCard from './components/filterCard';
import CandidateCard from './components/CandidateCard';
import { CandidateData } from './utils/CandidateData';

function App() {

  return (
    <div className="App min-w-[786px] font-poppins">
      <Header />
      <div className='py-8'>
        <Row>
          <Col className='px-2' span={8}>
            <div style={{background: 'white', padding: '16px', borderRadius: '8px', border: '1px solid #F3F3F3', justifyContent: 'space-between', alignItems: 'center'}} className='flex-center font-poppins'>
              <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M13.0303 11.9697C12.7374 11.6768 12.2626 11.6768 11.9697 11.9697C11.6768 12.2626 11.6768 12.7374 11.9697 13.0303L13.0303 11.9697ZM16.9697 18.0303C17.2626 18.3232 17.7374 18.3232 18.0303 18.0303C18.3232 17.7374 18.3232 17.2626 18.0303 16.9697L16.9697 18.0303ZM8.33333 13.4167C5.52589 13.4167 3.25 11.1408 3.25 8.33333H1.75C1.75 11.9692 4.69746 14.9167 8.33333 14.9167V13.4167ZM3.25 8.33333C3.25 5.52589 5.52589 3.25 8.33333 3.25V1.75C4.69746 1.75 1.75 4.69746 1.75 8.33333H3.25ZM8.33333 3.25C11.1408 3.25 13.4167 5.52589 13.4167 8.33333H14.9167C14.9167 4.69746 11.9692 1.75 8.33333 1.75V3.25ZM13.4167 8.33333C13.4167 11.1408 11.1408 13.4167 8.33333 13.4167V14.9167C11.9692 14.9167 14.9167 11.9692 14.9167 8.33333H13.4167ZM11.9697 13.0303L16.9697 18.0303L18.0303 16.9697L13.0303 11.9697L11.9697 13.0303Z" fill="#B0BABF"/>
              </svg>
              </span>
              <input className='w-[18em] text-base focus:outline-none' placeholder='Search by name, edu, exp or #tag' type="text" />
              <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10.0415 12.875H10.3415C10.3415 12.7093 10.2072 12.575 10.0415 12.575V12.875ZM10.0415 12.9583L10.0414 13.2583C10.121 13.2583 10.1973 13.2267 10.2536 13.1705C10.3099 13.1142 10.3415 13.0379 10.3415 12.9583H10.0415ZM9.9585 12.9583H9.6585C9.6585 13.1239 9.79276 13.2582 9.95842 13.2583L9.9585 12.9583ZM9.9585 12.875V12.575C9.79281 12.575 9.6585 12.7093 9.6585 12.875H9.9585ZM10.3 7.04163C10.3 6.87594 10.1657 6.74163 10 6.74163C9.83431 6.74163 9.7 6.87594 9.7 7.04163H10.3ZM9.7 10.375C9.7 10.5406 9.83431 10.675 10 10.675C10.1657 10.675 10.3 10.5406 10.3 10.375H9.7ZM10 17.2C6.02355 17.2 2.8 13.9764 2.8 10H2.2C2.2 14.3078 5.69218 17.8 10 17.8V17.2ZM2.8 10C2.8 6.02355 6.02355 2.8 10 2.8V2.2C5.69218 2.2 2.2 5.69218 2.2 10H2.8ZM10 2.8C13.9764 2.8 17.2 6.02355 17.2 10H17.8C17.8 5.69218 14.3078 2.2 10 2.2V2.8ZM17.2 10C17.2 13.9764 13.9764 17.2 10 17.2V17.8C14.3078 17.8 17.8 14.3078 17.8 10H17.2ZM9.7415 12.875V12.9583H10.3415V12.875H9.7415ZM10.0416 12.6583L9.95857 12.6583L9.95842 13.2583L10.0414 13.2583L10.0416 12.6583ZM10.2585 12.9583V12.875H9.6585V12.9583H10.2585ZM9.9585 13.175H10.0415V12.575H9.9585V13.175ZM9.7 7.04163V10.375H10.3V7.04163H9.7Z" fill="#9AA6AC"/>
              </svg>
              </span>
            </div>
            <div className='my-5 font-poppins rounded-lg text-base'>
              <div className='flex-center bg-white w-full py-4 px-3 justify-between'>
                <h2 className='font-semibold'>Filters</h2>
                <span className='opacity-70'>0 selected</span>
              </div>
              <FilterCard filter='Personal Information' collapsible />
              <FilterCard filter='Education' collapsible />
              <FilterCard filter='Work Experience' collapsible />
              <FilterCard filter='Activity Filter' collapsible />
              <FilterCard filter='Advanced Filter' />
            </div>
          </Col>
          <Col className='px-2' span={16}>
            <div className='bg-white max-h-[80vh] overflow-auto font-poppins rounded-lg'>
              <div className='flex-center gap-5 w-full px-3 py-4'>
                <input type="checkbox" name="check-all" />
                <h2 className='text-[#1D4ED8] px-2 text-lg font-semibold'>247 Candidates</h2>
                <div className='flex-center gap-5 ml-auto font-medium'>
                  <p className='text-[#1D4ED8] px-2 cursor-pointer'>Qualified</p>
                  <p className='text-[#0B0B0B] cursor-pointer px-3 border-r-2 border-l-2 border-[#F3F3F4]'>Task <span className='bg-[#F7F8FD] p-2 rounded-full m-auto px-2 font-normal text-xs'>25</span></p>
                  <p className='text-[#0B0B0B] cursor-pointer'>Disqualified <span className='bg-[#F7F8FD] p-2 rounded-full m-auto px-2 font-normal text-xs'>78</span></p>
                </div>
              </div>
              <ul>
                {CandidateData.map((candidate) => (
                     <CandidateCard 
                      name={candidate.name} 
                      location={candidate.location} 
                      degree={candidate.degree}
                      extraInfo={candidate.extraInfo}
                       />
                ))}
              </ul>
            
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
