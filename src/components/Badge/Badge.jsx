import React from 'react'

const Badge = ({ color, label, size = 'small', link = '', icon = '0', width = '8em', margin = '0' }) => {
    return (
        <div className={`ui ${color} labels normal`} style={{ width: width, margin: margin }} >
            <a href={link} className="ui label" target={"_blank"} style={{ width: '100%', margin: '0' }}  >
                <p style={{ margin: '0' }}>{label}
                    {icon != 0 ?
                        <>
                            <i className={`icon ${icon} ${size} `} style={{ marginLeft: '0' }}></i>
                        </>
                        : <></>
                    }
                </p>
            </a>

        </div>
    )
}

export default Badge