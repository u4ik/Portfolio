import React from 'react'

const Badge = ({ color, label, icon = '0' }) => {
    return (
        <div className={`ui ${color} labels normal`} style={{ width: '8em' }} >
            <a className="ui label " style={{ width: '100%' }}  >
                <p style={{ margin: '0' }}>{label}
                    {icon != 0 ?
                        <>
                            <i className={`icon ${icon} `} style={{ marginLeft: '.5em' }}></i>
                        </>
                        : <></>
                    }
                </p>
            </a>

        </div>
    )
}

export default Badge