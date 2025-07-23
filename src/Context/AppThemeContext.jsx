import React, { createContext } from "react";

export const AppThemeContext = createContext()

const AppThemeContextProvider = ({children}) => {
    const [app_theme, setAppTheme] = useState('dark')

    return (
        <AppThemeContext.Provider value={
            {app_theme: app_theme}
        }>
            {children}
        </AppThemeContext.Provider>
    )
}
export default AppThemeContextProvider