export const color = (mode) =>{
    return{
        palette: {
            mode: mode ? 'dark' : 'light',
            ...(mode === 'dark'? 
            {
                // palette values for dark mode
                primary: {
                    main: '#10232F',
                },
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
                primary: {
                    main: '#d4d4d4',
                },
                secondary: {
                    main: '#5d5c5b',
                },
                neutral: {
                    dark: '#666666',
                    main: '#141b2d',
                    light: '#d9d9d9',
                },
            }),
            background: {
                default: '#fff',
                paper: mode ? '#10232f' : '#fff'
            },
        }
    }
}