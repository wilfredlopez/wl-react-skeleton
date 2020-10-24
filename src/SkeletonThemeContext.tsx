import React, { PropsWithChildren } from 'react'
import { SkeletonThemeType } from './SkeletonElement'


export interface SkeletonThemeContextInterface{
    theme: SkeletonThemeType
    setTheme: (theme: SkeletonThemeType) => void
}

const defaultContext:SkeletonThemeContextInterface = {
    theme: 'light',
    setTheme: ()=> {}
}

export const SkeletonThemeContext = React.createContext(defaultContext)


export function SkeletonThemeProvider(props: PropsWithChildren<{}>){
    const [theme, changeTheme] = React.useState<SkeletonThemeType>('light')


    function setTheme(theme: SkeletonThemeType){
        return changeTheme(theme)
    }

    return <SkeletonThemeContext.Provider value={{
        theme: theme,
        setTheme: setTheme
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