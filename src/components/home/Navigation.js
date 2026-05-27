import React from 'react';
import { scroller } from 'react-scroll';
import { useIntl } from 'react-intl';

function Navigation({ headerInfo,lang }) {

    const scrollToSection = (section, offset) => {
        scroller.scrollTo(section, {
            smooth: true,
            spy: true,
            duration: 250,
            offset: offset,
        });
    };

    // تحديد الروابط بناءً على اللغة الحالية
    const links = lang ? headerInfo.linksAr : headerInfo.linksEn;

    return (
        <ul>
            {links.map((link) => (
                <li key={link.to || link.url}>
                    {link.url ? (
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                            {link.title}
                            {link.badge && <span className="badge ms-1 bg-primary">{link.badge}</span>}
                        </a>
                    ) : (
                        <button type="button" onClick={() => scrollToSection(link.to, link.offset)}>
                            {link.title}
                            {link.badge && <span className="badge ms-1 bg-primary">{link.badge}</span>}
                        </button>
                    )}
                </li>
            ))}
        </ul>
    );
}

export default Navigation;
