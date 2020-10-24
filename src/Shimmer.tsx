import React from 'react'
import './Shimmer.css';
import { SkeletonThemeType } from './SkeletonElement'

interface Props {
    theme?: SkeletonThemeType
}

export const Shimmer = ({theme}: Props) => {
    return (
        <div className="shimmer-wrapper">
                <div className={`shimmer ${theme}`}></div>
        </div>
    )
}
