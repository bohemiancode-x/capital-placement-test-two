import React from 'react';

interface Props {
    name: string;
    location: string;
    degree: string;
    extraInfo?: boolean;
}

const CandidateCard = ({name, location, degree, extraInfo }: Props) => {
  return (
    <div className='flex-center border-t-2 border-[#EEEEEE] gap-5 px-3 py-4'>
        <input className='cursor-pointer opacity-70' type="checkbox" name='check' />
        <span className='text-[#D0E1FF] bg-[#EDF4FF] p-3 rounded-full text-2xl font-semibold'>AS</span>
        <div className='flex flex-col items-start gap-2'>
            <h3 className='text-black font-semibold text-xl'>{name}</h3>
            <p className='text-sm text-black font-medium'>{location}</p>
            <p className='text-black font-normal text-sm'>{degree}</p>
            <div className='flex-center gap-3 text-xs text-[#1D4ED8]'>
                <span className=''>#top_candidate</span>
                <span>#top_candidate</span>
            </div>
            <div className='flex-center gap-3 text-xs text-[#037092]'>
                <span className='bg-[#F3FAFC] p-2 rounded-full'>New York</span>
                <span>Marketing</span>
                <span>London</span>
            </div>
        </div>
        {extraInfo && <div className='text-xs flex-center gap-3 ml-auto'>
            <span className='flex-center gap-1 text-[#305dc8] bg-[#F7F8FD] p-2 rounded-xl'>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1.75 7C1.75 9.8995 4.1005 12.25 7 12.25C9.8995 12.25 12.25 9.8995 12.25 7C12.25 4.1005 9.8995 1.75 7 1.75C4.1005 1.75 1.75 4.1005 1.75 7Z" stroke="#305DC6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                4
            </span>
            <span className='flex-center gap-1 bg-[#E3EBFF] text-[#1D4ED8] p-2 rounded-xl'>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.46066 2.97036L2.90616 3.19735L2.46066 2.97036ZM2.97038 2.46049L3.19737 2.906L2.97038 2.46049ZM2.97038 11.5395L3.19737 11.094H3.19737L2.97038 11.5395ZM2.46066 11.0296L2.01515 11.2566L2.46066 11.0296ZM11.5398 11.0296L11.0943 10.8027L11.5398 11.0296ZM11.0297 11.5395L10.8027 11.094L11.0297 11.5395ZM11.5398 2.97036L11.0943 3.19735L11.5398 2.97036ZM11.0297 2.46049L11.2567 2.01499L11.0297 2.46049ZM7.00016 5.91667C6.72402 5.91667 6.50016 6.14052 6.50016 6.41667C6.50016 6.69281 6.72402 6.91667 7.00016 6.91667V5.91667ZM9.3335 6.91667C9.60964 6.91667 9.8335 6.69281 9.8335 6.41667C9.8335 6.14052 9.60964 5.91667 9.3335 5.91667V6.91667ZM7.00016 4.16667C6.72402 4.16667 6.50016 4.39052 6.50016 4.66667C6.50016 4.94281 6.72402 5.16667 7.00016 5.16667V4.16667ZM9.3335 5.16667C9.60964 5.16667 9.8335 4.94281 9.8335 4.66667C9.8335 4.39052 9.60964 4.16667 9.3335 4.16667V5.16667ZM4.16683 11.6667C4.16683 11.9428 4.39069 12.1667 4.66683 12.1667C4.94297 12.1667 5.16683 11.9428 5.16683 11.6667H4.16683ZM5.16683 2.33333C5.16683 2.05719 4.94297 1.83333 4.66683 1.83333C4.39069 1.83333 4.16683 2.05719 4.16683 2.33333L5.16683 2.33333ZM11.1668 4.20001V9.80001H12.1668V4.20001H11.1668ZM9.80028 11.1667H4.20028V12.1667H9.80028V11.1667ZM2.8335 9.80001V4.20001H1.8335V9.80001H2.8335ZM4.20028 2.83333H9.80028V1.83333H4.20028V2.83333ZM2.8335 4.20001C2.8335 3.86506 2.83388 3.64392 2.84773 3.47446C2.8611 3.31084 2.88448 3.2399 2.90616 3.19735L2.01515 2.74336C1.90967 2.95038 1.86947 3.16756 1.85105 3.39303C1.83311 3.61266 1.8335 3.88156 1.8335 4.20001H2.8335ZM4.20028 1.83333C3.88182 1.83333 3.61287 1.83294 3.39319 1.85089C3.1677 1.8693 2.95043 1.90949 2.74338 2.01499L3.19737 2.906C3.23989 2.88433 3.31087 2.86094 3.47459 2.84757C3.64412 2.83372 3.86533 2.83333 4.20028 2.83333V1.83333ZM2.90616 3.19735C2.97014 3.07178 3.07206 2.96985 3.19737 2.906L2.74338 2.01499C2.42965 2.17484 2.17487 2.42989 2.01515 2.74336L2.90616 3.19735ZM4.20028 11.1667C3.86534 11.1667 3.64413 11.1663 3.47461 11.1524C3.31088 11.139 3.2399 11.1157 3.19737 11.094L2.74338 11.985C2.95042 12.0905 3.16769 12.1307 3.39318 12.1491C3.61286 12.1671 3.88182 12.1667 4.20028 12.1667V11.1667ZM1.8335 9.80001C1.8335 10.1185 1.83311 10.3874 1.85105 10.607C1.86947 10.8324 1.90967 11.0496 2.01515 11.2566L2.90616 10.8027C2.88448 10.7601 2.8611 10.6892 2.84773 10.5255C2.83388 10.3561 2.8335 10.135 2.8335 9.80001H1.8335ZM3.19737 11.094C3.07204 11.0301 2.97013 10.9282 2.90616 10.8027L2.01515 11.2566C2.17489 11.5701 2.42967 11.8251 2.74338 11.985L3.19737 11.094ZM11.1668 9.80001C11.1668 10.135 11.1665 10.3561 11.1527 10.5256C11.1393 10.6893 11.1159 10.7602 11.0943 10.8027L11.9853 11.2566C12.0908 11.0496 12.131 10.8323 12.1493 10.6069C12.1672 10.3873 12.1668 10.1184 12.1668 9.80001H11.1668ZM9.80028 12.1667C10.1187 12.1667 10.3876 12.1671 10.6072 12.1491C10.8326 12.1307 11.0497 12.0905 11.2567 11.985L10.8027 11.094C10.7601 11.1157 10.6892 11.1391 10.5257 11.1524C10.3563 11.1663 10.1352 11.1667 9.80028 11.1667V12.1667ZM11.0943 10.8027C11.0305 10.9279 10.9284 11.03 10.8027 11.094L11.2567 11.985C11.5701 11.8253 11.8254 11.5705 11.9853 11.2566L11.0943 10.8027ZM12.1668 4.20001C12.1668 3.88161 12.1672 3.6127 12.1493 3.39311C12.131 3.16767 12.0908 2.95043 11.9853 2.74336L11.0943 3.19735C11.1159 3.23984 11.1393 3.31073 11.1527 3.47438C11.1665 3.64387 11.1668 3.86501 11.1668 4.20001H12.1668ZM9.80028 2.83333C10.1352 2.83333 10.3563 2.83372 10.5257 2.84757C10.6892 2.86093 10.7601 2.8843 10.8027 2.906L11.2567 2.01499C11.0497 1.90952 10.8326 1.86931 10.6072 1.85089C10.3876 1.83294 10.1187 1.83333 9.80028 1.83333V2.83333ZM11.9853 2.74336C11.8254 2.42955 11.5701 2.17467 11.2567 2.01499L10.8027 2.906C10.9284 2.97002 11.0305 3.07212 11.0943 3.19735L11.9853 2.74336ZM7.00016 6.91667H9.3335V5.91667H7.00016V6.91667ZM7.00016 5.16667H9.3335V4.16667H7.00016V5.16667ZM5.16683 11.6667L5.16683 2.33333L4.16683 2.33333L4.16683 11.6667H5.16683Z" fill="#1D4ED8"/>
                </svg>
                5 Programs
            </span>
        </div>}
  </div>
  )
}

export default CandidateCard