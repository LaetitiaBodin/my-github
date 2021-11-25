import CountUp from 'react-countup'

export const Summary = ({user, langs, details, setDetails}) => {
    return (
        <div className='summary'>
            <img className='avatar' src={user.avatar_url} alt={`Avatar of ${user.login}`}/>
            <h1>{user.login}</h1>
            <p>{user.bio}</p>
            <Languages {...{langs}}/>
            <Features  {...{user, details, setDetails}}/>
        </div>
    )
}

const Languages = ({langs}) =>{
    return (
        langs &&
            <div className='languages'>
                {langs.map((item, idx) => <img key={`lang_${idx}`} src={`img/${item.toLowerCase()}.svg`} alt={item}/>)}
            </div>
    )
}

const Features = ({user, details, setDetails}) => {
    let copy = {...details}
    const reps = () => copy.repos     === 'none' ? '' : 'none'
    const fers = () => copy.followers === 'none' ? '' : 'none'
    const fing = () => copy.following === 'none' ? '' : 'none'
    const toggle = {
        repos:      () => { copy.repos = reps(); copy.followers = 'none'; copy.following = 'none'; setDetails(copy) },
        followers:  () => { copy.repos = 'none'; copy.followers = fers(); copy.following = 'none'; setDetails(copy) },
        following:  () => { copy.repos = 'none'; copy.followers = 'none'; copy.following = fing(); setDetails(copy) }
    }
    return (
        <div className='features'>
            <Feature {...{button: 'REPOS'    , number: user.public_repos, toggle: toggle.repos}}/>
            <Feature {...{button: 'FOLLOWERS', number: user.followers   , toggle: toggle.followers}}/>
            <Feature {...{button: 'FOLLOWING', number: user.following   , toggle: toggle.following}}/>
        </div>
    )
}

const Feature = ({button, number, toggle}) => {
    return (
        <div className='feature'>
            <CountUp delay={1} end={number} duration={3}/>
            <button onClick={toggle}>{button}</button>
        </div>
    )
}