"use client";
import Link from 'next/link'
import { useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import { IoMdClose } from 'react-icons/io'


export default function Nav(props) {
    const [nav, setNav] = useState(true);

    function handleNav() {
        setNav(!nav);
    };
    return(
        <>
        
         <header className="absolute top-0 left-0 w-full flex mx-auto justify-center flex-col bg-transparent text-white items-center ">
         <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap" rel="stylesheet"/>
         <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap" rel="stylesheet"/>
            <nav className=" justify-between items-center p-5 w-full mx-auto hidden lg:flex">
            <div className="flex items-center gap-5">
                <Link href="/">
                <img 
                    src="/images/logo/logo1.png"
                    width={278}
                    height={44}
                    alt="logo 1010"
                    className="ml-[56px]"
                />
                </Link>
            </div>
            <div className="nav-link flex gap-5 uppercase font-josefin">
                <Link className="p-2" href="/about">About Us</Link>
                <Link className="p-2" href="/outlet">OUR ESTABLISHMENTS</Link>
                <Link className="p-2" href="/gallerys">Galleries</Link>
                <Link className="p-2" href="/contact">Contact</Link>
            </div>
            
            </nav>

            {/* responsive */}
            <nav className="fixed top-0 backdrop-blur-lg bg-gray-800/40 lg:hidden h-14  w-full z-20">
                <div className="flex items-center justify-between mt-1  px-5 ">
                    
                    <div className='p-3 mr-[-20px]'>
                        {
                            nav? ( <BiMenuAltRight onClick={handleNav} size={30} /> ) : ( <IoMdClose onClick={handleNav} size={30} /> )
                        }
                    </div>
                </div>
              
            
                <div className={nav? "font-josefin uppercase gap-5 flex relative left-[-1000px] ease-in duration-300 flex-col mt-1 bg-gray-800/30" : "font-josefin uppercase gap-5 flex relative left-0 ease-in duration-300 flex-col mt-1 bg-gray-800/40 backdrop-blur-lg"}>
                    <Link className="p-5 hover:bg-slate-500" href="/">Home</Link>
                    <Link className="p-5 hover:bg-slate-500" href="/about">About Us</Link>
                    <Link className="p-5 hover:bg-slate-500" href="/outlet">OUR ESTABLISHMENTS</Link>
                    <Link className="p-5 hover:bg-slate-500" href="/gallerys">Galleries</Link>
                    <Link className="p-5 hover:bg-slate-500" href="/contact">Contact</Link>
                </div>
            </nav>
            
            </header>
        </>
    )
}