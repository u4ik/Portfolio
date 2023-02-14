import React from 'react'
import { Badge } from '../index'
import './Sidebar.css';

const Sidebar = () => {

    const iconSize = "huge";

    return (
        <div className="sidebar-container">
            <div className="sidebar-container_
            wrap">
                <div style={{ display: 'flex', flexDirection: 'row', gap: '.5em', justifyContent: 'center' }}>

                    <Badge
                        color='blue'
                        label=''
                        icon="linkedin"
                        size='big'
                        margin=".1em .1em .1em .1em"
                        // margin="auto"
                        width='8em'
                        padding='.2em'

                        link="https://www.linkedin.com/in/amitsmangat/"
                    />
                    <Badge
                        color='grey'
                        label=''
                        icon="github"
                        size='big'
                        margin=".1em .1em .1em .1em"
                        width='8em'
                        padding='.2em'
                        link="https://github.com/u4ik"
                    />

                </div>
            </div>
        </div>
    )
}

export default Sidebar