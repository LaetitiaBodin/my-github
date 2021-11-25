import { username }     from '../index'
import { ErrorDetails } from './Errors'
import { Loader }       from './Widgets'

export const Details = ({details, repos, followers, following}) => {
    return (
        <div className='details'>
            <Repos     {...{details, repos}}/>
            <Followers {...{details, followers}}/>
            <Following {...{details, following}}/>
        </div>
    )
}

const Repos = ({details, repos}) => {
    return (
        !repos
            ?   details.repos === '' && <Loader/>
            :   <div className='repos--block' style={{display: details.repos}}>
                    <h2>REPOS</h2>
                    <ul className='repos--list'>
                        {repos.data.map((item, idx) =>
                            <li key={`repos_${idx}`}>
                                <div className='repo_icons'>
                                    {item.language
                                        ?   <img src={`img/${item.language.toLowerCase()}.svg`} alt={`${item.language}`}/>
                                        :   <span></span>}
                                    {item.has_pages
                                        ?   <a href={`https://${username}.github.io/${item.name}/index.html`} target='_blank' rel='noreferrer'>
                                                <img src={`img/world-wide-web.svg`} alt='webpage'/>
                                            </a>
                                        :   <span></span>}
                                    {item.archived
                                        ?   <img src={`img/archive.svg`} alt='archive'/>
                                        :   <span></span>}
                                </div>
                                <a href={item.html_url} target='_blank' rel='noreferrer'>{item.name}</a>
                            </li>
                        )}
                    </ul>
                    {repos.errors && <ErrorDetails {...{errors: repos.errors, details:'repositories'}}/>}
                </div>
    )
}

const Followers = ({details, followers}) => {
    return (
        !followers
            ?   details.followers === '' && <Loader/>
            :   <div className='followers--block' style={{display: details.followers}}>
                    <h2>FOLLOWERS</h2>
                    <ul className='followers--list'>
                        {followers.data.map((item, idx) =>
                            <li key={`followers_${idx}`}>
                                <img src={item.avatar_url} alt={`Avatar of ${item.login}`}/>
                                <a href={item.url}>{item.login}</a>
                            </li>)}
                    </ul>
                    {followers.errors && <ErrorDetails {...{errors: followers.errors, details: 'followers'}}/>}
                </div>
    )
}

const Following = ({details, following}) => {
    return (
        !following
            ?   details.following === '' && <Loader/>
            :   <div className='following--block' style={{display: details.following}}>
                    <h2>FOLLOWING</h2>
                    <ul className='following--list'>
                        {following.data.map((item, idx) =>
                            <li key={`following_${idx}`}>
                                <img src={item.avatar_url} alt={`Avatar of ${item.login}`}/>
                                <a href={item.url}>{item.login}</a>
                            </li>)}
                    </ul>
                    {following.errors && <ErrorDetails {...{errors: following.errors, details: 'following'}}/>}
                </div>
    )
}