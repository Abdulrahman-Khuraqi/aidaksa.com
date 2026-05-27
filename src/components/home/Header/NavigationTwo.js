import React from 'react';
import { Link } from 'react-router-dom';

function Navigation({ lang = false, headerInfo }) {
    return (
        <>
            {lang ? (
                <ul>
                    {headerInfo.linksAr.map((link) => (
                        <li>
                            <Link to={`${link.to}`}>{link.title}</Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <ul>
                    {headerInfo.linksEn.map((link) => (
                        <li>
                            <Link offset={-50} spy smooth duration={250} to={`${link.to}`}>
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}

export default Navigation;
