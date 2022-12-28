export const color = (mode) =>{
    return{
        palette: {
            mode: mode ? 'dark' : 'light',
            ...(mode === 'dark'? 
            {
                // palette values for dark mode
                secondary: {
                    main: '#5d5c5b',
                },
                neutral: {
                    dark: '#666666',
                    main: '#141b2d',
                    light: '#d9d9d9',
                },
            }
            : {
                // palette values for light mode
                secondary: {
                    main: '#5d5c5b',
                },
                neutral: {
                    dark: '#666666',
                    main: '#141b2d',
                    light: '#d9d9d9',
                },
            }),
            primary: {
                main: '#fff',
                dark: '#333134'
            },
            background: {
                default: '#fff',
                paper: mode ? '#333134' : '#fff'
            },
        }
    }
}