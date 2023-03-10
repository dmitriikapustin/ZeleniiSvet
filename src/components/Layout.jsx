import React, { useContext, useState } from 'react';

import Header from './Header'
import Footer from './Footer'

import { PopupContext, PhonesDataContext } from '../context/Context'

export default function Layout({children}) {

    return (
        <PhonesDataContext>
            <PopupContext>
                <Header />
                <main>
                    {children}
                </main>
                <Footer />
            </PopupContext>
        </PhonesDataContext>
    )
}