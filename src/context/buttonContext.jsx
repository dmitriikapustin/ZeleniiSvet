import React from 'react'

import { createContext, useState } from 'react';


export const PopupState = createContext(null)


export default function ButtonContext({children}) {
    const [popupState, setPopupState] = useState(false)
    const [currentPage, setCurrentPage] = useState('')
    const [currentComponent, setCurrentComponent] = useState('')

    return (
        <PopupState.Provider value={{popupState, setPopupState, currentPage, setCurrentPage, currentComponent, setCurrentComponent}}>
            {children}
        </PopupState.Provider>
    )
}

// const buttonContext = () => {



//   return (
//     <div>
      
//     </div>
//   )
// }

// export default buttonContext
