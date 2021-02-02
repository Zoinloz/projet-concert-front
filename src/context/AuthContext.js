import React from 'react';

export default React.createContext({
    isAuth: false,
    // isAuth: () => { },
    setIsAuth: (value) => { },

    // CHANGEMENT TEST STACY
    isAdmin: () => { },
    // username: ''
});