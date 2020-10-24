import React, { PropsWithChildren } from 'react'
import { SkeletonThemeType } from './SkeletonElement'


export interface SkeletonThemeContextInterface{
    theme: SkeletonThemeType
    setTheme: (theme: SkeletonThemeType) => void
    animated:boolean,
    setAnimated: (animated:boolean) => void
}

const defaultContext:SkeletonThemeContextInterface = {
    theme: 'light',
    setTheme: ()=> {},
    animated: true,
    setAnimated: () => {}
}

export const SkeletonThemeContext = React.createContext(defaultContext)


export function SkeletonThemeProvider(props: PropsWithChildren<{}>){
    const [theme, changeTheme] = React.useState<SkeletonThemeType>('light')
    const [animated, changeAnimated] = React.useState<boolean>(true)


    function setTheme(theme: SkeletonThemeType){
        return changeTheme(theme)
    }

    function setAnimated(shouldDo: boolean){
        return changeAnimated(shouldDo)
    }

    return <SkeletonThemeContext.Provider value={{
        theme: theme,
        setTheme: setTheme,
        animated,
        setAnimated
    }}>
        {props.children}
    </SkeletonThemeContext.Provider>
}

export const useSkeletonTheme = () => {
    const context = React.useContext(SkeletonThemeContext)


    return {
        ...context
    }
}