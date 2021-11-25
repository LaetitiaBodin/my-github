import React from "react"

import { username } from '../index'

export const Data = ({user, setLangs, setRepos, setFollowers, setFollowing}) => {

    React.useEffect(() => {

        async function editFollowers () {
            let array = gatherData(user.followers, 'followers')
            readData()

            function readData () {
                if (array === null) {
                    array = gatherData(user.followers, 'followers')
                    setTimeout(readData, 10)
                } else {
                    transferData()
                }
            }

            function transferData () {
                const sortedData = sortAZ(array.data)
                setFollowers({
                    data: sortedData,
                    errors: array.errors
                })
                deleteData(user.followers, 'followers')
            }
        }

        async function editFollowing () {
            let array = gatherData(user.following, 'following')
            readData()

            function readData () {
                if (array === null) {
                    array = gatherData(user.following, 'following')
                    setTimeout(readData, 10)
                } else {
                    transferData()
                }
            }

            function transferData () {
                const sortedData = sortAZ(array.data)
                setFollowing({
                    data: sortedData,
                    errors: array.errors
                })
                deleteData(user.following, 'following')
            }
        }

        async function editRepos () {
            let array = gatherData(user.public_repos, 'repos')
            readData()

            function readData () {
                if (array === null) {
                    array = gatherData(user.public_repos, 'repos')
                    setTimeout(readData, 10)
                } else {
                    transferData()
                }
            }
            
            function transferData () {
                const langs = getLangs(array.data)
                setLangs(langs)
                setRepos({
                    data: array.data,
                    errors: array.errors
                })
                deleteData(user.public_repos, 'repos')
            }
        }
        
        for (let i = 1; i <= Math.ceil(user.followers / 100); i++) {
            saveData('followers', i)
        }
        for (let i = 1; i <= Math.ceil(user.following / 100); i++) {
            saveData('following', i)
        }
        for (let i = 1; i <= Math.ceil(user.public_repos / 100); i++) {
            saveData('repos', i)
        }

        editFollowers()
        editFollowing()
        editRepos()

    }, []) // eslint-disable-line

    return <></>
}

async function saveData (data, page) {
    try {
        const fetched = await fetch(`https://api.github.com/users/${username}/${data}?q=&per_page=100&page=${page}`)
        if (fetched.status === 200) {
            const res = await fetched.json()
            sessionStorage.setItem(`${username}_${data}_page_${page}`, JSON.stringify(res))
        } else {
            throw fetched.status
        }
    } catch (err) {
        sessionStorage.setItem(`${username}_${data}_error_${page}`, JSON.stringify(err))
    }
}

function gatherData (listlength, listname) {
    let pages = 0

    let data = []
    for (let i = 1; i <= Math.ceil(listlength / 100); i++) {
        const item = sessionStorage.getItem(`${username}_${listname}_page_${i}`)
        if (item) {
            const dataP = JSON.parse(item)
            data = data.concat([...dataP])
            pages++
        }
    }
    
    let errors = []
    for (let i = 1; i <= Math.ceil(listlength / 100); i++) {
        const error = JSON.parse(sessionStorage.getItem(`${username}_${listname}_error_${i}`))
        if (error) {
            errors = errors.concat(error)
            pages++
        }
    }

    if (errors.length === 0) { errors = null }

    return pages === Math.ceil(listlength / 100) ? {data: data, errors: errors} : null
}

function deleteData (listlength, listname) {
    for (let i = 1; i <= Math.ceil(listlength / 100); i++) {
        sessionStorage.removeItem(`${username}_${listname}_page_${i}`)
        sessionStorage.removeItem(`${username}_${listname}_error_${i}`)
    }
}

function sortAZ (array) {
    let names = []
    let objs = []
    array.forEach( (item, idx) => {
        names[idx] = item.login.toLowerCase();
        objs[idx] = {
            login: item.login,
            avatar_url: item.avatar_url,
            url: item.html_url
        }
    })
    names.sort()    

    let sorted = []
    for (let i = 0; i < names.length; i++) {
        for (let j = 0; j < objs.length; j++) {
            if (names[i] === objs[j].login.toLowerCase()) {
                sorted[i] = objs[j]
                break
            }
        }
    }

    return sorted
}

function getLangs (array) {
    let langs = []
    for (let item of array) {
        if (!langs.includes(item.language) && item.language != null) {
            langs.push(item.language)
        }
    }
    return langs.sort()
}