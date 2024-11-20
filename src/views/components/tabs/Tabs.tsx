"use client"
import { TabsProvider } from '@/context/TabsProvider';



import "./style.scss"
const Tabs = ({ children, classNames }: { children: React.ReactNode, classNames?: string }) => {

    return (
        <TabsProvider>
            <div className={`tabs ${classNames || ""}`}>
                {children}
            </div>
        </TabsProvider>
    )
}

export default Tabs