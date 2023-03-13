import React from 'react'

import { createContext, useState } from 'react';

export const AllContexts = createContext(null)

// export async function getStaticProps() {
//     const respPhones = await axios.get(`https://api.zesvet.ru/api/form-requests?populate=*`);
//     const dataPhonesResp = respPhones.data;
//     console.log(dataPhonesResp)
//     return { props: { dataGetPhones: dataPhonesResp } }
// }

export function Context({children}) {
    const [popupState, setPopupState] = useState(false)
    const [currentPage, setCurrentPage] = useState('')
    const [currentComponent, setCurrentComponent] = useState('')
    const [phonesData, setPhonesData] = useState([])


    return (
        <AllContexts.Provider value={{
            popupState, setPopupState, 
            currentPage, setCurrentPage, 
            currentComponent, setCurrentComponent,
            phonesData, setPhonesData
            }}>
            {children}
        </AllContexts.Provider>
    )
}




// export const PopupState = createContext(null)
// export function PopupContext({children}) {
//     const [popupState, setPopupState] = useState(false)
//     return (
//         <PopupState.Provider value={{popupState, setPopupState}}>
//             {children}
//         </PopupState.Provider>
//     )
// }

// export const PhonesData = createContext(null)
// export function PhonesDataContext({children}) {
//     const [phonesData, setPhonesData] = useState({})
//     // export async function getStaticProps() {
//         // const respPhones = await axios.get(`https://api.zesvet.ru/api/form-requests?populate=*`);
//         // const dataPhonesResp = respPhones.data;
//         // console.log(dataPhonesResp)
//         // return { props: { dataGetPhones: dataPhonesResp } }
//     // }
//     return (
//         <PhonesData.Provider value={{phonesData, setPhonesData}}>
//             {children}
//         </PhonesData.Provider>
//     )
// }