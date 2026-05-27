import React, { useEffect } from 'react';
import contactInfo from '../../assets/data/contactInfo.json';
import TopToBottom from './TopToBottom';
import Image from 'next/image';

function BackToTop({ className }) {
    useEffect(() => {
        TopToBottom('.back-to-top');
    });
    return (
        <>
            <div className={`back-to-top ${className || ''}`}>
                <a
                    aria-label="whatsapp"
                    rel="noreferrer"
                    target="_blank"
                    href={contactInfo.whatsapplink}
                >
                    <Image src='/images/icons/whatsapp-white.svg' width='42' height={48} alt='whatsapp' />
                </a>{' '}
            </div>{' '}
        </>
    );
}

export default BackToTop;
