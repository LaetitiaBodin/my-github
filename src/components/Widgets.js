import React from "react"

export const Loader = () => {
    let spinner = []
    for (let i = 0; i < 12; i++) { spinner.push(<div key={`lds_${i}`}></div>) }
    return <div className="lds-spinner">{spinner}</div>
}

export const ScrollButtons = ({details}) => {
    const [buttonTop, setButtonTop] = React.useState(false)
    const [buttonBottom, setButtonBottom] = React.useState(false)
    const detailsShown = details.repos === '' || details.followers === '' || details.following === ''

    React.useEffect(() => {
        window.addEventListener('scroll', () => {
            window.pageYOffset > 20
                ?   setButtonTop(true)
                :   setButtonTop(false)
            window.pageYOffset < document.body.scrollHeight - window.innerHeight - 20
                ?   setButtonBottom(true)
                :   setButtonBottom(false)
        })
    }, []) // eslint-disable-line
    return (
        <div className='scroll'>
            {buttonTop    && detailsShown && <ButtonTop/>}
            {buttonBottom && detailsShown && <ButtonBottom/>}
        </div>
    )
}

const ButtonTop = () => {
    const goToTop = () => window.scrollTo(0, 0)
    return (
        <svg onClick = {goToTop} className={`nav--btn goToTop`} role="img" aria-label="Go To Top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39.92 39.93">
            <path className="back" d="M0 21.13v-2.34c0-.28.07-.56.1-.84A20.05 20.05 0 0 1 16.53.33l2.26-.31h2.34l.38.07 2.62.38c9.948 2.143 16.702 11.414 15.69 21.54a19.21 19.21 0 0 1-4.94 11.21 19.57 19.57 0 0 1-14.09 6.7 19 19 0 0 1-11-2.8 19.65 19.65 0 0 1-9.47-13.7C.19 22.65.1 21.89 0 21.13zm20-4.69c.13.15.22.26.32.36l9.51 9.51.4.37a1.45 1.45 0 0 0 2-.24 1.42 1.42 0 0 0 .29-.62 1.58 1.58 0 0 0-.56-1.49q-5.39-5.37-10.76-10.75a1.52 1.52 0 0 0-2.51 0q-5.36 5.34-10.7 10.7a3.92 3.92 0 0 0-.34.37 1.45 1.45 0 0 0 .23 2 1.42 1.42 0 0 0 .44.23 1.54 1.54 0 0 0 1.68-.51l9.62-9.62z"/>
            <path className="front" d="M19.99 16.44l-.35.34-9.62 9.62a1.54 1.54 0 0 1-1.68.51 1.44 1.44 0 0 1-.91-1.82 1.26 1.26 0 0 1 .24-.44 3.92 3.92 0 0 1 .34-.37l10.7-10.7a1.53 1.53 0 0 1 2.51 0l10.76 10.75a1.56 1.56 0 0 1 .56 1.49 1.44 1.44 0 0 1-1.7 1.14 1.4 1.4 0 0 1-.62-.28l-.4-.37q-4.74-4.75-9.51-9.51c-.12-.1-.19-.21-.32-.36z"/>
        </svg>
    )
}

const ButtonBottom = () => {
    const goToBottom = () => window.scrollTo(0, document.body.scrollHeight)
    return (
        <svg onClick = {goToBottom}  className={`nav--btn goToBottom`} role="img" aria-label="Go To Bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39.92 39.93">
            <path className="back" d="M39.92 18.8v2.34c0 .28-.07.56-.1.84a20.05 20.05 0 0 1-16.43 17.64l-2.26.31h-2.34l-.38-.07-2.62-.38C5.846 37.333-.902 28.063.11 17.94A19.21 19.21 0 0 1 5.05 6.73 19.57 19.57 0 0 1 19.14.03a19 19 0 0 1 11 2.8 19.65 19.65 0 0 1 9.47 13.7c.14.73.21 1.51.31 2.27zm-20 4.69c-.13-.15-.22-.26-.32-.36l-9.49-9.51-.4-.37a1.45 1.45 0 0 0-2 .24 1.42 1.42 0 0 0-.29.62 1.58 1.58 0 0 0 .56 1.49q5.39 5.37 10.76 10.75a1.52 1.52 0 0 0 2.51 0q5.35-5.34 10.7-10.7a3.92 3.92 0 0 0 .34-.37 1.45 1.45 0 0 0-.23-2 1.42 1.42 0 0 0-.44-.23 1.54 1.54 0 0 0-1.68.51q-4.8 4.81-9.62 9.62z"/>
            <path className="front" d="M19.93 23.49l.35-.34 9.62-9.62a1.54 1.54 0 0 1 1.68-.51 1.44 1.44 0 0 1 .91 1.82 1.26 1.26 0 0 1-.24.44 3.92 3.92 0 0 1-.34.37q-5.34 5.36-10.7 10.7a1.53 1.53 0 0 1-2.51 0L7.94 15.6a1.56 1.56 0 0 1-.56-1.49 1.44 1.44 0 0 1 1.7-1.14 1.4 1.4 0 0 1 .62.28l.4.37 9.51 9.51c.1.13.19.21.32.36z"/>
        </svg>
    )
}