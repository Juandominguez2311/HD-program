"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBasketShopping,
  faUserLarge,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className=" z-[99999] sticky h-[60px] mb-5%">
      <div className=" p-3 px-4 gap-6 flex items-center justify-between">
        <div className="flex items-center relative">
          <Image src="/simplimuvLogo.png" alt="Logo" width={150} height={100} />
        </div>
        {/* Centered content */}
        <div className="flex items-center gap-10 text-[1.5rem] px-2 hidden lg:flex justify-center">
          <div>
            <Link href="/">Bikes</Link>
          </div>

          <div>
            <Link href="/?item=2">Accessories</Link>
          </div>

          <div>
            <Link href="/">Apparel</Link>
          </div>
        </div>

        {/* Left content */}
        <div className="flex items-end gap-10 text-[1.5rem] hidden lg:flex justify-end">
          <div>
            <FontAwesomeIcon icon={faDollarSign} data-testid="faDollarSign" />
            USD
          </div>
          <div>
            <FontAwesomeIcon
              icon={faBasketShopping}
              data-testid="faBasketShopping"
            />
          </div>
          <div>
            <FontAwesomeIcon icon={faUserLarge} data-testid="faUserLarge" />
          </div>
        </div>
      </div>
    </div>
  );
}
