import React from 'react'

import { createContext, useState } from 'react';


export const PopupState = createContext(null)


export default function ButtonContext({children}) {
    const [popupState, setPopupState] = useState(false)

    return (
        <PopupState.Provider value={{popupState, setPopupState}}>
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
