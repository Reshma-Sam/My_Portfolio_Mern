import {useState,createContext, useContext} from 'react'

const ThemeContext = createContext()

const ThemeProvider = ({children}) => {
    const light = "light"; 
    const [theme, setTheme] = useState(light)

    return (
        <ThemeContext.Provider value={[theme,setTheme]}>
            {children}
        </ThemeContext.Provider>
    )
}

//custom hook (for export)
const useTheme = () => useContext(ThemeContext)

export {useTheme, ThemeProvider};