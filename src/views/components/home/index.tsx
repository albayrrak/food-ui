"use client"

import React, { useEffect } from 'react'

import Input from '../forms/input'
import Tabs from '../tabs/Tabs'
import { TabMenu, TabMenuItem } from '../tabs/TabMenuItem'
import { TabContainer, TabContent } from '../tabs/TabContainer'
import Image from 'next/image'
import classNames from 'classnames'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

import "./style.scss"
import ChooseCard from '../choose-card'
import { chooseItem } from '@/constant/choose-item'

const Home = () => {
    const [stickyHeader, setStickyHeader] = React.useState(false)
    const home = React.useRef<HTMLDivElement>(null)
    const tl = gsap.timeline();

    useEffect(() => {
        home.current?.addEventListener('scroll', handleScroll)
        return () => {
            home.current?.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useGSAP(
        () => {
            tl.from('.home-top', { y: -100, opacity: 0, duration: 1, ease: 'power3.out' })
        },

    );

    const handleScroll = () => {
        console.log('scroll', home.current?.scrollTop);
        if (home.current) {
            if (home.current.scrollTop > 0) {
                setStickyHeader(true)
            } else {
                setStickyHeader(false)
            }

        }
    }

    return (
        <div ref={home} className={classNames('home', { "sticky": stickyHeader })}>
            <section className={classNames('home-top', { "sticky": stickyHeader })}>
                <div className='title'>
                    <h1 className='heading-medium'>Jaegar Resto</h1>
                    <h4 className='body-ln text-lighter'>Tuesday, 2 Feb 2021</h4>
                </div>
                <Input icon="search-icon.svg" placeholder="Search" />

            </section>
            <section className='home-content'>
                <Tabs>
                    <TabMenu >
                        <TabMenuItem >
                            <span className='body-ms'>Hot Dishes</span>
                        </TabMenuItem>
                        <TabMenuItem >
                            <span className='body-ms'>Cold Dishes</span>
                        </TabMenuItem>
                        <TabMenuItem>
                            <span className='body-ms'>Soup</span>
                        </TabMenuItem>
                        <TabMenuItem>
                            <span className='body-ms'>Grill</span>
                        </TabMenuItem>
                        <TabMenuItem>
                            <span className='body-ms'>Appetizer</span>
                        </TabMenuItem>
                        <TabMenuItem>
                            <span className='body-ms'>Dessert</span>
                        </TabMenuItem>
                    </TabMenu>
                    <TabContainer >
                        <TabContent classNames='tab-choose'>
                            <div className='choose-top'>
                                <h2 className='heading-medium'>Choose Dishes</h2>
                                <div className="selectbox">
                                    <div className='icon'>
                                        <Image src={require("@/assets/icons/expand-arrow-icon.svg")} alt="down-arrow" width={10} height={10} />
                                    </div>
                                    <span className='body-mm'>test</span>
                                </div>
                            </div>
                            <div className='choose-content'>
                                {chooseItem.map((item, index) => {
                                    return <ChooseCard key={index} image={item.image} title={item.title} price={item.price} available={item.available} />
                                })}

                            </div>
                        </TabContent>
                        <TabContent>
                            content2
                        </TabContent>
                        <TabContent>
                            content3
                        </TabContent>
                    </TabContainer>
                </Tabs>
            </section>
        </div>
    )
}

export default Home