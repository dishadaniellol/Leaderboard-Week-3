import React, { useState } from 'react';
import backIcon from '../assets/back.svg';
import menuIcon from '../assets/Menu.svg';
import upArrow from '../assets/up.svg';
import downArrow from '../assets/down.svg';
import podium1 from '../assets/Top1.svg';
import podium2 from '../assets/Top2.svg';
import podium3 from '../assets/Top3.svg';
import goldMedal from '../assets/first.svg';
import silverMedal from '../assets/second.svg';
import bronzeMedal from '../assets/third.svg';

export function Leaderboard() {
    const [isCompanyView, setCompanyView] = useState(true);
    const [topThree, setTopThree] = useState(["Eiden", "Jackson", "Emma Aria"]);
    const [topThreeScores, setTopThreeScores] = useState([2430, 1847, 1674]);
    const [runnerUps, setRunnerUps] = useState(["Sebastian", "Jason", "Natalie", "Serenity", "Hannah"]);
    const [runnerUpScores, setRunnerUpScores] = useState([1124, 875, 774, 723, 559]);
    const [scoreIncreased, setScoreIncreased] = useState([true, false, true, true, false]);

    const switchView = (value) => {
        setCompanyView(value);
    };

    return (
        <div className='flex flex-col bg-blue-100 min-h-screen'>
            {/* Header */}
            <div className='flex flex-nowrap justify-between w-full p-3'>
                <button className='hover:bg-gray-300 rounded-full pr-4 pl-4'>
                    <img src={backIcon} alt="Back" className='h-[20px] lg:h-[25px]' />
                </button>
                <p className='text-[#2C2C2C] text-[20px] xl:text-[40px] lg:text-[30px] font-inter font-semibold'>Leaderboard</p>
                <button className='hover:bg-gray-300 rounded-full pr-4 pl-4'>
                    <img src={menuIcon} alt="Menu" className='h-[20px] lg:h-[25px]' />
                </button>
            </div>

            {/* Category Button */}
            <div className='flex justify-center w-full'>
                <div className='w-[250px] sm:w-[400px] lg:w-[500px]'>
                    <button
                        className='bg-white p-5 pb-[5px] rounded-2xl rounded-r-none w-[50%] hover:bg-slate-200'
                        onClick={() => switchView(true)}>
                        <div className='flex flex-wrap justify-center'>
                            <div className='flex justify-center items-center pb-[3px] w-full text-[15px] lg:text-[18px] 2xl:text-[1.2vw] 2xl:pb-[5px] font-medium font-inter'>
                                Organisation
                            </div>
                            {isCompanyView ? (
                                <div className='h-[4px] w-[50%] lg:w-[40%] 2xl:w-[35%] bg-[#3B5987] rounded-sm'></div>
                            ) : (
                                <div className='h-[4px] w-[50%] lg:w-[40%] 2xl:w-[35%] rounded-sm'></div>
                            )}
                        </div>
                    </button>

                    <button
                        className='bg-white p-5 pb-[5px] rounded-2xl rounded-l-none w-[50%] hover:bg-slate-200'
                        onClick={() => switchView(false)}>
                        <div className='flex flex-wrap justify-center'>
                            <div className='flex justify-center items-center pb-[3px] w-full text-[15px] lg:text-[18px] 2xl:text-[1.2vw] 2xl:pb-[5px] font-medium font-inter'>
                                Department
                            </div>
                            {isCompanyView ? (
                                <div className='h-[4px] w-[50%] lg:w-[40%] 2xl:w-[35%] rounded-sm'></div>
                            ) : (
                                <div className='h-[4px] w-[50%] lg:w-[40%] 2xl:w-[35%] bg-[#3B5987] rounded-sm'></div>
                            )}
                        </div>
                    </button>
                </div>
            </div>

            <div className='flex flex-wrap justify-between w-full mt-5'>
                <div className='flex flex-col md:flex-row lg:flex-row justify-between w-full'>
                    {/* Winners */}
                    <div className='flex flex-wrap justify-center lg:h-[620px] lg:w-[1020px]'>
                        <div className='flex pr-3 pl-3 md:pr-0 md:pl-0 sm:w-[60%] lg:w-[65%] justify-around'>
                            <div>
                                <img src={podium2} className='h-[100px] w-[100px] sm:h-[125px] md:h-[100px] sm:w-[120px] xl:h-[185px] lg:h-[120px] lg:w-[150px] relative top-[100px] lg:top-[180px] sm:top-[105px]  xl:top-[220px] md:top-[180px]' />
                                <img src={silverMedal} className='h-[10px] w-[100px] sm:h-[10px] sm:w-[119px]  xl:w-[150px]  xl:h-[15px] lg:h-[10px] lg:w-[145px] relative top-[88px] lg:top-[166px]  xl:top-[200px] sm:top-[90px] md:top-[168px]'/>
                            </div>
                            <div>
                                <img src={podium1} className='h-[100px]  w-[110px] sm:h-[140px] sm:w-[120px] md:h-[120px] xl:h-[230px] lg:h-[160px] lg:w-[150px] relative top-[40px] lg:top-[90px]  xl:top-[100px] md:top-[110px] ' />
                                <img src={goldMedal} className='h-[10px] w-[110px] sm:h-[10px] sm:w-[120px] lg:h-[10px] xl:h-[15px] lg:w-[150px] relative top-[28px] lg:top-[73px] sm:top-[23px] xl:top-[70px] md:top-[95px]' />
                            </div>
                            <div>
                                <img src={podium3} className='h-[100px] w-[100px] sm:h-[125px] md:h-[100px] sm:w-[120px] xl:h-[185px] lg:h-[120px] lg:w-[150px] relative top-[100px] lg:top-[180px] sm:top-[105px]  xl:top-[220px] md:top-[180px]' />
                                <img src={bronzeMedal} className='h-[10px] w-[100px] sm:h-[10px] sm:w-[119px]  xl:w-[150px]  xl:h-[15px] lg:h-[10px] lg:w-[145px] relative top-[88px] lg:top-[166px]  xl:top-[200px] sm:top-[90px] md:top-[168px]'/>
                            </div>
                        </div>

                        <div className='flex items-end pr-3 pl-3 md:pr-0 md:pl-0 sm:w-[60%] lg:w-[65%] pb-5 lg:pb-[200px]'>
                            <div className='flex flex-wrap justify-center items-center content-center bg-[#3d5c8b] pb-3 mr-[2px] h-[150px] lg:h-[160px]  xl:h-[250px] w-[33%] md:w-[150px] xl:w-[240px] self-end rounded-2xl  rounded-r-none'>
                                <div className='text-white text-center w-full xl:text-[25px] font-normal mt-5 font-inter'>{topThree[1]}</div>
                                <div className='text-white lg:text-[25px] md:text-[20px] font-semibold mt-3 font-inter'>{topThreeScores[1]}</div>
                            </div>
                            <div className='flex flex-wrap justify-center items-center content-center bg-[#3B5987] pb-3 h-[200px] xl:h-[360px] w-[33%] md:w-[150px] xl:w-[260px]  rounded-b-none rounded-[40px_40px_0px_0px] lg:rounded-[40px_40px_0px_0px] xl:rounded-[60px_60px_0px_0px]'>
                                <div className='text-white text-center w-full xl:text-[25px] font-normal font-inter'>{topThree[0]}</div>
                                <div className='text-white lg:text-[25px] md:text-[20px]  font-semibold mt-3 font-inter'>{topThreeScores[0]}</div>
                            </div>
                            <div className='flex flex-wrap justify-center items-center content-center bg-[#3B5987] pb-3 ml-[2px] h-[150px] lg:h-[160px] xl:h-[250px] w-[33%] md:w-[150px] xl:w-[240px] self-end rounded-2xl rounded-l-none'>
                                <div className='text-white text-center w-full lg:text-[19px] xl:text-[25px] font-normal mt-5 font-inter'>{topThree[2]}</div>
                                <div className='text-white lg:text-[25px]  md:text-[20px]  font-semibold mt-3 font-inter'>{topThreeScores[2]}</div>
                            </div>
                        </div>
                    </div>

                    {/* Participants */}
                    <div className='bg-[#3B5987] pr-6 pl-6 mt-5 lg:mb-[100px] xl:mt-[100px] lg:mr-[105px] xl:mr-[260px] md:mr-[50px] w-full lg:w-[47vw] md:w-[54vw] lg:h-[450px]  xl:w-[26vw] rounded-t-3xl lg:rounded-[50px_50px_50px_50px] md:rounded-[50px_50px_50px_50px] xl:h-[550px] md:h-[400px]'>
                        <div className='flex flex-col'>
                            {runnerUps.map((person, index) => (
                                <div key={index} className={`flex justify-between text-white pt-4 xl:pt-8 lg:pt-4  md:pt-2 md:pb-3 pb-3 ${index === 0 ? 'border-t-0' : 'border-t-[1px]'}`}>
                                    <div className='flex'>
                                        <div className='flex justify-center items-center border-white border-[3px] xl:border-[5px] rounded-full md:text-[15px] text-[21px] h-[60px] w-[60px] font-medium font-inter'>
                                            #{index + 4}
                                        </div>
                                        <p className='flex items-center ml-3 '>{person}</p>  
                                    </div>

                                    <div className='flex flex-wrap items-center justify-end'>
                                        <p className='w-full text-center text-[10px] md:text-[13px] lg:text-[16px] font-bold'>{runnerUpScores[index]}</p>
                                        {scoreIncreased[index] ? (
                                            <img src={upArrow} alt="Positive" className='mr-2 ' />
                                        ) : (
                                            <img src={downArrow} alt="Negative" className='mr-2' />
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}