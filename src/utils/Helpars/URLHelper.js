import queryString from 'query-string'

export function baseURL() {
    return ''
}

export function overrideHash(hash, clearQueries = false) {
    const params = new URLSearchParams(window.location.search)
    const queries = {}
    let result = ''
    if (!clearQueries) {
        for (let [key, value] of params.entries()) {
            queries[key] = value
        }

        result += '?' + queryString.stringify(queries)
    }
    return result + '#' + hash
}

export function overrideQueries(
    queries,
    hash = null,
) {
    return '?' + queryString.stringify(queries) + '#' + (!hash ? getHash() : hash)
}

export function getHash() {
    let hash = window.location.hash.replaceAll('#', '')
    hash = hash.substr(0, hash.indexOf('?') === -1 ? undefined : hash.indexOf('?'))
    hash = hash.substr(0, hash.indexOf('&') === -1 ? undefined : hash.indexOf('&'))

    return hash
}

export function getHashByName(value) {
    const params = new URLSearchParams(window.location.search)
    const paramId = params.get(value) ?? ''

    return paramId
}

export function getQueries() {
    const params = new URLSearchParams(window.location.search)
    const entries = Object.fromEntries(params.entries())
    Object.entries(entries).forEach(([key, value]) => {
        if (value === 'true') {
            entries[key] = true
        } else if (value === 'false') {
            entries[key] = false
        } else if (!isNaN(+value) && value != '') {
            entries[key] = +value
        }
    })
    return entries
}

export function getPath() {
    if (window.location.pathname.startsWith(baseURL())) {
        return window.location.pathname.substr(baseURL().length)
    }
    return window.location.pathname
}

export function isSolidValue(value: any) {
    if (value === null || value === undefined) {
        return false
    }
    if (typeof value === 'string' && value.length === 0) {
        return false
    }

    if (Array.isArray(value) && value.length === 0) {
        return false
    }

    return !(typeof value === 'object' && Object.keys(value).length === 0)
}
