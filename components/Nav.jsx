"use client";
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
export default function Nav(props) {
const [selectedProduct, setSelectedProduct] = useState('');

  const handleClick = (value) => {
    setSelectedProduct(value);
    if(value === "Product"){
        window.location.href = "/"
    }else if(value === "Silo"){
        window.location.href = "/silo"
    }else if(value === "SirLoin"){
        window.location.href = "/sirloin"
    }
  };
    return(
        <>
        
         <header className="absolute top-0 left-0 w-full flex mx-auto justify-center flex-col bg-transparent text-white items-center ">
            <nav className=" justify-between items-center p-5 w-full mx-auto hidden sm:flex">
            <div className="flex items-center gap-5">
                <Link href="/">
                <Image 
                    src="/images/logo/logo1.png"
                    width={278}
                    height={44}
                    alt="logo 1010"
                    className="ml-[56px]"
                />
                </Link>
                <select className="bg-transparent" name="name" id="1010">
                    <option value={props.id}>{props.id}</option>
                </select>
            </div>
            <div className="nav-link flex gap-5 ">
                <Link className="p-2" href="/articles">Articles</Link>
                <select name="SelectOpt" id="SelectOpt" value={selectedProduct} onChange={(e) => handleClick(e.target.value)} className="p-2 bg-transparent text-white">
                    <option value="Product" className='text-black'>Product</option>
                    <option value="Silo"  className='text-black'>Silo</option>
                    <option value="SirLoin"  className='text-black'>Sir Loin</option>
                </select>
                <Link className="p-2 " href="/gallerys">Gallerys</Link>
                <Link className="p-2" href="/contact">Contact Us</Link>
            </div>
            <div>
                <Image
                    src="/images/logo/logo10101.png"
                    width={81}
                    height={65}
                    className="mr-[56px]"
                    alt="logo 1010"
                />
            </div>
            </nav>
            <nav>
            <div className="flex mt-7 sm:hidden">
                <Link href="/">
                <Image 
                    src="/images/logo/logo1.png"
                    width={200}
                    height={44}
                    alt="logo 1010"
                />
                </Link>
            </div>
            </nav>
            </header>
        </>
    )
}