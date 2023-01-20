import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ConfirmModal } from '../../components'

const Resume = () => {
    const handleDownload = (option) => {
        // TODO : PUT RESUME DOWNLOAD STUFF HERE 
        window.location.href = option === 'download' ? 'https://drive.google.com/uc?export=download&id=18FCn0Cip3jjsVL1niVhcbP5UWXWzFljI' :
            'https://drive.google.com/file/d/18FCn0Cip3jjsVL1niVhcbP5UWXWzFljI/view'

    }

    return (
        <ConfirmModal text={'Would you like to download my resume?'} callback={handleDownload} navigatePath={"/"} />
    )
}

export default Resume