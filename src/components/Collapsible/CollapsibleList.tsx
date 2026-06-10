import './CollapsibleList.css'

import {Collapse} from '@mui/material'
import {type ReactNode, useState} from 'react'

interface CollapsibleListProps {
    children: ReactNode
    visibleItems?: number
    expandText?: string
    collapseText?: string
}

export function CollapsibleList(
    {
        children,
        visibleItems = 4,
        expandText = 'Развернуть',
        collapseText = 'Свернуть'
    }: CollapsibleListProps
) {
    const [isExpanded, setIsExpanded] = useState(false)

    const itemsArray = Array.isArray(children) ? children : [children]
    const visibleItemsList = itemsArray.slice(0, visibleItems)
    const hiddenItemsList = itemsArray.slice(visibleItems)

    const toggleCollapse = () => setIsExpanded(!isExpanded)

    return (
        <>
            {visibleItemsList}
            <Collapse in={isExpanded} timeout={300}>
                {hiddenItemsList}
            </Collapse>

            {!isExpanded && (
                <button
                    onClick={toggleCollapse}
                    className={'collapsable-list-button'}
                >
                    {expandText}
                </button>
            )}
            {isExpanded && (
                <button
                    onClick={toggleCollapse}
                    className={'collapsable-list-button'}
                >
                    {collapseText}
                </button>
            )}
        </>
    )
}