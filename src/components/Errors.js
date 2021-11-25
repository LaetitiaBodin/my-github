import { username } from '../index'

export const ErrorUser = ({error}) => {
    return (
        <div className='userError'>
            <h1>ERROR {error}</h1>
            <p>
                But do not worry, you can still find the information you are looking for<br/>
                <a href={`https://github.com/${username}`} target='_blank' rel='noreferrer'>HERE</a>
            </p>
        </div>
    )
}

export const ErrorDetails = ({errors, details}) => {
    const err = [...new Set (errors)]
    return (
        <div className='detailsError'>
            <p>Some data is missing due to the following error(s): {err.join(', ')}.</p>
            <p>You may find the missing information<br/>
                <a href={`https://github.com/${username}?tab=${details}`} target={'_blank'} rel={'noreferrer'}>HERE</a>
            </p>
        </div>
    )
}