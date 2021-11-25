import CountUp from 'react-countup'

export const Summary = ({user}) => {
    return (
        <div className='summary'>
            <img className='avatar' src={user.avatar_url} alt={`Avatar of ${user.login}`}/>
            <h1>{user.login}</h1>
            <p>{user.bio}</p>
            <Features  {...{user}}/>
        </div>
    )
}

const Features = ({user}) => {
    return (
        <div className='features'>
            <Feature {...{button: 'REPOS'    , number: user.public_repos}}/>
            <Feature {...{button: 'FOLLOWERS', number: user.followers   }}/>
            <Feature {...{button: 'FOLLOWING', number: user.following   }}/>
        </div>
    )
}

const Feature = ({button, number}) => {
    return (
        <div className='feature'>
            <CountUp delay={1} end={number} duration={3}/>
            <button>{button}</button>
        </div>
    )
}