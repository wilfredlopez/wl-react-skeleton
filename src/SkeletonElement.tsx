import React from 'react'
import { useSkeletonTheme } from './SkeletonThemeContext'
import './SkeletonElement.css'
import { Shimmer } from './Shimmer'

export type SkeletonType = 'avatar' | 'text' | 'title' | 'thumbnail'

export type SkeletonThemeType = 'dark' | 'light'


type StringOrNumber = number | string

export interface SkeletonProps extends React.PropsWithChildren<{}>{
    type: SkeletonType
    maxWidth?:StringOrNumber
    size?: StringOrNumber
    theme?: SkeletonThemeType
    borderRadious?: StringOrNumber
    animated?:boolean
}

// const SkeletonTypesCss:Record<SkeletonType, React.CSSProperties> = {
//     avatar: {
//         width: 100,
//         height: 100,
//         borderRadius: '50%',

//     },
//     text: {
//         width: '100%',
//         height: 12,

//     },
//     title: {
//         width: '50%',
//         height: 20,
//         marginBottom: 15
//     },
//     thumbnail: {
//         width: 100,
//         height: 100
//     }
// }


// const getBaseCss: (theme?:SkeletonThemeType) => React.CSSProperties = (theme) => ({
//     background: typeof theme !== 'undefined' && theme === 'dark' ? '#444' : '#ddd',
//     color: typeof theme !== 'undefined' && theme === 'dark' ? 'rgb(97 95 95)' : 'rgb(202 201 201)',
//     margin: '10px 0',
//     borderRadius: 4,

// })

export const SkeletonElement = ({type, maxWidth, size, theme, borderRadious, animated, children}: SkeletonProps) => {
    const contextTheme = useSkeletonTheme()
    // const baseCss = getBaseCss(theme || contextTheme.theme)
    const selectedTheme = theme || contextTheme.theme || 'light';

    const classes = `skeleton ${type} ${selectedTheme}`

    let styles:React.CSSProperties = {
        // ...baseCss, 
        // ...SkeletonTypesCss[type],
         maxWidth: maxWidth}

    if(size){
        styles.width = size
        if(type !== 'title' && type !== 'text'){
            styles.height = size
        }
    }

    if(borderRadious){
        styles.borderRadius = borderRadious
    }

    const shouldAnimate = animated || contextTheme.animated


    return (
        <React.Fragment>

        <div className={classes} style={styles}>
            {shouldAnimate &&
            <Shimmer  theme={selectedTheme}/>
            }
           {children}
        </div>
        </React.Fragment>
    )
}


export default SkeletonElement