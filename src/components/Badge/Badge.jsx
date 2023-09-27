import React from 'react'

const Badge = ({ clickable=true,color, label, size = 'small', link = '', icon = '0', width = '8em', margin = '0', padding = '0' }) => {
    return (
        <div className={`ui ${color} labels normal`} style={{ width: width, margin: margin }} >
            <a href={clickable ? link : undefined} className="ui label" target={"_blank"} style={{cursor:'default', width: '100%', margin: '0', padding: padding }}  >
                <p style={{
                    margin: '0',
                    display: 'flex',
                    justifyContent: label === 'GitHub' || label === 'LinkedIn' ? '' : 'center',
                    gap: '1em',
                    alignItems: 'center'
                }}>
                    {icon != 0 ?
                        <>
                            <i className={`icon ${icon} ${size} `} style={{ margin: '0' }}></i>
                        </>
                        : <></>
                    }
                    {label}
                </p>
            </a>

        </div>
    )
}

export default Badge