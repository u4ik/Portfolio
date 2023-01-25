import React from 'react'
import { Badge } from '../index'
import './Sidebar.css';

const Sidebar = () => {

    const iconSize = "huge";

    return (
        <div className="sidebar-container">
            <div className="sidebar-container_
            wrap">
                <Badge
                    color='blue'
                    label=''
                    icon="linkedin"
                    size='big'
                    margin=".2em .2em .2em 0em"
                    width='4em'
                    link="https://www.linkedin.com/in/amitsmangat/"
                />
                <Badge
                    color='grey'
                    label=''
                    icon="github"
                    size='big'
                    margin=".5em .2em .2em 0em"
                    width='4em'
                    link="https://github.com/u4ik"
                />

            </div>
        </div>
    )
}

export default Sidebar