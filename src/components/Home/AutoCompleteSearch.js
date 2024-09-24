import React, { useState, useEffect } from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { validStringByLetter } from '../../utils/Helpars/StringHelpers'

import { createAxios } from '../../utils/Helpars/AxiosHelpers'

const api = createAxios()

const AutoCompleteSearch = (props) => {
    const [items, setItems] = useState(props.items)

    useEffect(()=>{
        setItems(props.items)
    }, [props.items])

    const handleOnSearch = (string, results) => {
        // props.handleOnSearch(string)
        // gettingDataWhileUserTyping(validStringByLetter(string)) this when we can send to backend request to get the results base on the searching
    }

    const gettingDataWhileUserTyping = (value) => {
        api.get(props.url + "publicName=" + value)
            .then((response) => {
                const data = response.data
                setItems(
                    data.map((d) => {
                        return {
                            id: d.id,
                            name: d.title,
                        }
                    }),
                )
            })
            .catch((error) => {
                console.log("Getting error while retrieving searching")
                console.log(error)
            })
    }

    const handleOnFocus = (value) => {
    }

    const formatResult = (item) => {
        return (
            <>
                <div className='d-flex' style={{ background: 'blue !important ', zIndex: '99999' }}>
                    <span style={{ display: 'block', textAlign: 'left' }}> {item.name}</span>
                    <i className='ml-3 fa fa-check text-primary'></i>
                </div>
            </>
        )
    }

    return (
        <ReactSearchAutocomplete
            placeholder=""
            id='ReactSearchAutocomplete'
            styling={{
                backgroundColor: 'white',
                zIndex: '7',
                height: '37px',
                boxShadow: "none",
                borderRadius: props.isRight ? '0px 12px 12px 0px': '12px 0px 0px 12px',
                marginLeft: "20px",
            }}
            onClear={props.handleOnSelect}
            items={items}
            showIcon={false}
            className={'ReactSearchAutocomplete-class'}
            showClear={true}
            onSearch={handleOnSearch}
            onSelect={props.handleOnSelect}
            onFocus={handleOnFocus}
            formatResult={formatResult}
        />
    )
}

export default AutoCompleteSearch
