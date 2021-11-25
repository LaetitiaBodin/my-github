import React    from 'react'
import ReactDOM from 'react-dom'

import { Data }          from './components/Data'
import { Details }       from './components/Details'
import { ErrorUser }     from './components/Errors'
import { Summary }       from './components/Summary'

import './index.css'

export const username = 'LaetitiaBodin'

const App = () => {
    const [user, setUser] = React.useState(null) // Used to run the app

    const [langs, setLangs] = React.useState(null) // Used to update summary area after data is fetched
    const [details, setDetails] = React.useState({repos: 'none', followers: 'none', following: 'none'}) // Used to switch details' contents' visibilities

    const [repos, setRepos]         = React.useState(null) //
    const [followers, setFollowers] = React.useState(null) // Used to populate details area
    const [following, setFollowing] = React.useState(null) //

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
                        <Data    {...{user: user.data, setLangs, setRepos, setFollowers, setFollowing}}/>
                        <Summary {...{user: user.data, langs, details, setDetails}}/>
                        <Details {...{details, repos, followers, following}}/>
                    </>
            :   null        
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))