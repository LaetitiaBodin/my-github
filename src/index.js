import React    from 'react'
import ReactDOM from 'react-dom'

import { ErrorUser }     from './components/Errors'
import { Summary }       from './components/Summary'

import './index.css'

export const username = 'LaetitiaBodin'

const App = () => {
    const [user, setUser] = React.useState(null) // Used to run the app

    React.useEffect(() => {
        async function editUser () {
            let res = {data: null, error: null}
            try {
                const fetched = await fetch(`https://api.github.com/users/${username}`)
                if (fetched.status === 200) {
                    res.data = await fetched.json()
                } else {
                    throw fetched.status
                }
            } catch (err) {
                res.error = err
            } finally {
                setUser(res)
            } 
        }
        editUser()
    }, []) // eslint-disable-line

    return (
        user
            ?   user.error
                ?   <ErrorUser error={user.error}/>
                :   <>
                        <Summary user={user.data}/>
                    </>
            :   null        
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))