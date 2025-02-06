import React from 'react'
import { SocialIcon } from 'react-social-icons'

export default function Footer() {
    return (
        <footer className="mt-3 bg-[#012c4f] text-white py-4">
          <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center max-w-full">
            <div className="w-full lg:w-1/2 text-center text-white/50">
              &copy; {new Date().getFullYear()} Californila | Web Design by{" "}
              <a href="https://ishkaster.com" target="_blank" className="text-yellow-300">Ishkaster Media</a> • All Rights Reserved
            </div>
            <div className="w-full lg:w-1/2 flex justify-center mt-4 lg:mt-0"> 
                <SocialIcon url="https://www.facebook.com/californila"  bgColor="none" fgColor="gray" style={{ height: 40, width: 40 }}/> 
                <SocialIcon url="https://www.instagram.com/californila/"  bgColor="none" fgColor="gray" style={{ height: 40, width: 40 }}/>
                <SocialIcon url="https://www.youtube.com/channel/UCpFjc4B5jkXbTlvbXzcJsWQ" bgColor="none" fgColor="gray" style={{ height: 40, width: 40 }}/> 
                <SocialIcon url="https://twitter.com/californila" network="x" bgColor="none" fgColor="gray" style={{ height: 40, width: 40 }}/> 
                <SocialIcon url="https://www.tiktok.com/@californila" bgColor="none" fgColor="gray" style={{ height: 40, width: 40 }}/> 
            </div>
          </div>
        </footer>
    );
}
