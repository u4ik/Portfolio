import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ConfirmModal } from '../../components'
import ResId from './Resume_Helper'

const Resume = () => {
    const handleDownload = (option) => {
        window.open(option === 'download' ? `https://drive.google.com/uc?export=download&id=${ResId}` : `https://drive.google.com/file/d/${ResId}/view`, option === 'download' ? '' : '_blank')
    }
    return (
        <ConfirmModal text={'Would you like to download my resume?'} callback={handleDownload} navigatePath={"/"} />
    )
}

export default Resume