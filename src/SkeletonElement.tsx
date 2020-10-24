import React from 'react'
import { useSkeletonTheme } from './SkeletonThemeContext'

export type SkeletonType = 'avatar' | 'text' | 'title' | 'thumbnail'

export type SkeletonThemeType = 'dark' | 'light'

export interface SkeletonProps extends React.PropsWithChildren<{}>{
    type: SkeletonType
    maxWidth?:string | number
    size?: number | string
    theme?: SkeletonThemeType
}

const SkeletonTypesCss:Record<SkeletonType, React.CSSProperties> = {
    avatar: {
        width: 100,
        height: 100,
        borderRadius: '50%',

    },
    text: {
        width: '100%',
        height: 12,

    },
    title: {
        width: '50%',
        height: 20,
        marginBottom: 15
    },
    thumbnail: {
        width: 100,
        height: 100
    }
}


const getBaseCss: (theme?:SkeletonThemeType) => React.CSSProperties = (theme) => ({
    background: typeof theme !== 'undefined' && theme === 'dark' ? '#444' : '#ddd',
    color: typeof theme !== 'undefined' && theme === 'dark' ? 'rgb(97 95 95)' : 'rgb(202 201 201)',
    margin: '10px 0',
    borderRadius: 4,

})

export const SkeletonElement = ({type, maxWidth, size, theme, children}: SkeletonProps) => {
    const classes = `skeleton ${type}`
    const contextTheme = useSkeletonTheme()
    const baseCss = getBaseCss(theme || contextTheme.theme)

    let styles:React.CSSProperties = {...baseCss, ...SkeletonTypesCss[type], maxWidth: maxWidth}

    if(size){
        styles.height = size
        if(type !== 'title' && type !== 'text'){
            styles.width = size
        }
    }


    return (

        <div className={classes} style={styles}>
           {children}
        </div>
    )
}


export default SkeletonElement