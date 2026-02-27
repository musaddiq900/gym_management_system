"use client"
import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { themes } from "@/data/themes"

type ThemeContextType = {
  themeKey: string
  themeGradient: string
  setTheme: (key: string) => void
}

const ThemeContext = createContext<ThemeContextType>({
  themeKey: "red",
  themeGradient: themes.red.gradient,
  setTheme: () => {}
})

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeKey, setThemeKey] = useState("red")
  const [themeGradient, setThemeGradient] = useState(themes.red.gradient)

  useEffect(() => {
    const saved = localStorage.getItem("agencyTheme")
    if (saved && themes[saved as keyof typeof themes]) {
      setThemeKey(saved)
      setThemeGradient(themes[saved as keyof typeof themes].gradient)
    }
  }, [])

  const setTheme = (key: string) => {
    if (themes[key as keyof typeof themes]) {
      localStorage.setItem("agencyTheme", key)
      setThemeKey(key)
      setThemeGradient(themes[key as keyof typeof themes].gradient)
    }
  }

  return (
    <ThemeContext.Provider value={{ themeKey, themeGradient, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)