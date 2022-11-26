export const color = (mode) =>{
    return{
        palette: {
            mode: mode ? 'dark' : 'light',
            ...(mode === "dark"
            ? {
                // palette values for dark mode
                primary: {
                    main: '#10232F',
                },
                secondary: {
                    main: '#5D5C5B',
                },
                neutral: {
                    dark: '#666666',
                    main: '#141B2D',
                    light: '#D9D9D9',
                },
                background: {
                    default: '#10232F',
                },
            }
            : {
                // palette values for light mode
                primary: {
                    main: '#FFFFFF',
                },
                secondary: {
                    main: '#5D5C5B',
                },
                neutral: {
                    dark: '#666666',
                    main: '#141B2D',
                    light: '#D9D9D9',
                },
                background: {
                    default: "#FFFFFF",
                },
            }),
        }
    }
}