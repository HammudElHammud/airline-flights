import React from 'react'
import {useTranslation} from "react-i18next";

const EmptyState = (props) => {
    const [t] = useTranslation()
    const image =
        props.image ??
        'https://user-images.githubusercontent.com/26205613/140097451-b0bd4b78-2698-40c2-b631-fb317ffed4dc.png'
    const title = props.title ?? t('No result found')
    const description =
        props.description ?? t("Try to adjust your search or filter to find what you're looking for")

    return (
        <div className="left my-5 d-flex flex-column align-items-center justify-content-center">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12 d-flex justify-content-center align-items-center">
                    <div className="w-80 d-flex flex-column align-items-center justify-content-center">
                        <img src={image} alt="empty state" style={{ maxWidth: '300px' }} />
                        <h3 className="h2 font-weight-normal pt-4 text-center">{title}</h3>
                        <p className="font-weight-light text-center">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmptyState
