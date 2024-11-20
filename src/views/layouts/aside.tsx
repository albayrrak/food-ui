"use client"
import React from 'react'
import "./aside.scss"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import classNames from 'classnames'
const Aside = () => {
    const path = usePathname()

    return (
        <aside>
            <Link href={"/"} className='logo'>
                <Image src={require("@/assets/images/Logo.svg")} alt="logo" width={56} height={56} />
            </Link>
            <div className='menu'>
                <Link href={"/"} className={classNames('link', { "active": path === "/" })}>
                    <div className='icon'>
                        <Image src={path === "/" ? require("@/assets/icons/home-white-icon.svg") : require("@/assets/icons/home-icon.svg")} alt='' width={19} height={20} />
                    </div>
                </Link>
                <Link href={"/discount"} className='link'>
                    <div className='icon'>
                        <Image src={require("@/assets/icons/discount-icon.svg")} alt='' width={19} height={20} />
                    </div>
                </Link>
                <Link href={"/dashboard"} className={classNames('link', { "active": path === "/dashboard" })}>
                    <div className='icon'>
                        <Image src={path === "/dashboard" ? require("@/assets/icons/dashboard-white-icon.svg") : require("@/assets/icons/dashboard-icon.svg")} alt='' width={19} height={20} />
                    </div>
                </Link>
                <Link href={"/message"} className='link'>
                    <div className='icon'>
                        <Image src={require("@/assets/icons/message-icon.svg")} alt='' width={19} height={20} />
                    </div>
                </Link>
                <Link href={"/notification"} className='link'>
                    <div className='icon'>
                        <Image src={require("@/assets/icons/notification-icon.svg")} alt='' width={19} height={20} />
                    </div>
                </Link>
                <Link href={"/settings"} className='link'>
                    <div className='icon'>
                        <Image src={require("@/assets/icons/settings-icon.svg")} alt='' width={19} height={20} />
                    </div>
                </Link>
                <Link href={"/logout"} className='link'>
                    <div className='icon'>
                        <Image src={require("@/assets/icons/logout-icon.svg")} alt='' width={19} height={20} />
                    </div>
                </Link>
            </div>
        </aside>
    )
}

export default Aside