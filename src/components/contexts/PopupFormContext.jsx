import React, { createContext, useState } from 'react';

// const [popupForm, setPopupForm] = useState(true)
// const popupFormValue = { popupForm, setPopupForm }

export const PopupFormContext = createContext({
    popupForm: false,
    setPopupForm: () => {}
})

