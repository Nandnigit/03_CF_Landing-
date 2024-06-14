import React from 'react'
import './Home.css'
import image from './video_icon3.gif'

function Home() {
  return (
    <>
      
        <div className=' flex justify-start px-5 md:px-16 py-40 min-h-screen' id='homebg'>
            <div className=' flex flex-col md:px-10 py-10 gap-4 align-middle md:w[40%] '>
                <h1 className=' font-extrabold text-5xl text-yellow-400 md:w-[40%] '>AI-Enabled Resume and Cover Letter Builders & Templates</h1>
                <div className=' text-white text-2xl'>Upgrade your career now with our Robust AI </div>
                <div>
                    <button className=' px-8 py-3 font-bold text-xl rounded-xl bg-sky-300 text-black'>Get Start For Free</button>
                </div>
            </div>
            <div></div>
        </div>


        <div className=' flex justify-start px-5 md:px-16 py-40 min-h-screen ' id='homebg2'>
          <div className=' flex flex-col md:px-10 py-10 gap-7'>
            <h1 className=' font-extrabold text-5xl '>Check AI Resume Score</h1>
            <div>
                <h1 className=' font-semibold text-2xl'>Why Its Important</h1>
                <div className=' font-medium text-lg'>Let you Know Your Resume Status</div>
                <div className=' font-medium text-lg'>It's Quick & Easy</div>
                <div className=' font-medium text-lg'>Gives Your Real Time Data</div>
            </div>
            <div>
                <button className=' px-9 py-3 border-2 bg-sky-400 text-xl font-bold text-black rounded-xl'>Click Here To Start</button>
            </div>
          </div>

        </div>


        <div className=' px-5 md:px-16 py-20 text-white min-h-screen' id='homebg3'>
           <h1 className=' font-bold text-white text-4xl text-center'>Our AI Solutions</h1>
           <div className=' flex flex-col md:flex-row  gap-5 justify-center px-5 py-10 '>
            <div className='  bg-orange-400 rounded-2xl flex flex-col gap-3 px-5 py-5'>
                <h1 className=' font-bold text-3xl'>Analyze Resume</h1>
                <h2 className=' font-semibold text-xl '>Why It is Important</h2>
                <ul>
                    <li>Check all Keywords</li>
                    <li>Very Prompt</li>
                    <li>Fully Automatic</li>
                    <li>Precise Results</li>
                </ul>
                <div>
                    <img src={image} className=' h-44 w-44' />
                </div>
            </div>
            <div className=' bg-green-500 rounded-2xl flex flex-col gap-3 px-5 py-5'>
                <div>
                    <img src='https://resumekraft.com/wp-content/uploads/2023/08/resume-ai.png' className=' w-44 h-40'/>
                </div>
            <h1 className=' font-bold text-3xl'>AI Suggestion</h1>
                <h2 className=' font-semibold text-xl '>How It Works</h2>
                <ul>
                    <li>Check all Keywords</li>
                    <li>Very Prompt</li>
                    <li>Fully Automatic</li>
                    <li>Precise Results</li>
                </ul>
            </div>
            <div className=' bg-blue-500 rounded-2xl flex flex-col gap-3 px-5 py-5'>
            <h1 className=' font-bold text-3xl'>Automatic Guide</h1>
                <h2 className=' font-semibold text-xl '>AI as Assistant</h2>
                <ul>
                    <li>It Guides in Process</li>
                    <li>Solve Errors</li>
                    <li>Suggest You</li>
                    <li>One Click & Done</li>
                </ul>
                <div>
                    <img src='https://media.licdn.com/dms/image/D4D12AQHZNhbBpw6HqA/article-cover_image-shrink_600_2000/0/1708550155150?e=2147483647&v=beta&t=CNTVoZburHFzilgPeDmR7Mo2cPi9Zri7nD9SBwAEZbA' className=' w-52 h-40'></img>
                </div>
            </div>
           </div>

        </div>
      
    </>
  )
}

export default Home
