"use client"
import Image from 'next/image';

export function Header(){
    return(
        <header className="flex">
            <nav className="flex-row justify-between px-272 py-7 text-textDefault">

              <ul className="flex gap-12 items-center">
                <a href="#">
                  <Image 
                    src={require("../../../public/icons/header-logo.svg")}
                    width={42}
                    height={67}
                    alt="Instagram logo"/>
                </a>
                <li className="hover:text-redEmphasis cursor-pointer">HOME</li>
                <li className="hover:text-redEmphasis cursor-pointer">ABOUT</li>
                <li className="hover:text-redEmphasis cursor-pointer">DOWNLOAD</li>
                <li className="hover:text-redEmphasis cursor-pointer">FORUM</li>
              </ul>

            </nav>

            <div className="flex gap-8">
              <button>
                <a href="#">
                  <Image
                    src={require("../../../public/icons/instagram.svg")}
                    width={24}
                    height={24}
                    alt="Instagram logo"
                  />
                </a>
              </button>
              <button>
                <a href="#">
                  <Image
                    src={require("../../../public/icons/facebook.svg")}
                    width={24}
                    height={24}
                    alt="Instagram logo"
                  />
                </a>
              </button>
              <button>
                <a href="#">
                  <Image
                    src={require("../../../public/icons/twitter.svg")}
                    width={24}
                    height={24}
                    alt="Instagram logo"
                  />
                </a>
              </button>
              <button>
                <a href="#">
                  <Image
                    src={require("../../../public/icons/youtube.svg")}
                    width={24}
                    height={24}
                    alt="Instagram logo"
                  />
                </a>
              </button>
            </div>

        </header>
    )
}