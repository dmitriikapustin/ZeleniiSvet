import React, { useContext, useState } from 'react';

import Header from './Header'
import Footer from './Footer'

import { Context } from '../context/Context'

export default function Layout({ children }) {

    return (
        <Context>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </Context>
    )
}