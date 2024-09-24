import React from 'react'
import {useTranslation} from "react-i18next";


const ResultsFilter = (props) => {
    console.log({props: props.resultFilter})
    const [t] = useTranslation()

    return (
        <>
            <div className="p-2 ml-3">
                <div>
                    <h3 className='sort-by'>{t('Sort by')}</h3>
                    <select className='select-sort-by'
                     onChange={(e)=>{
                         props.onClick({
                             sort: e.target.value,
                         })
                     }}
                    >
                        <option value="lowest">Lowest Price</option>
                        <option value="highest">Highest Price</option>
                    </select>
                </div>
                <div className="mt-4">
                    <h3 className='sort-by'>{t('Arrival Time')}</h3>
                    <div className="custom-radio-group">
                        <label className="custom-radio"
                         onClick={()=>props.onClick({
                             arriveTime: 1,
                         })}
                        >
                            <input type="radio" name="option" value="1"/>
                            <span className="custom-radio-indicator"></span>
                            <span className={'' + (props.resultFilter.arriveTime ===  1 ? 'radio-select' : 'radio-no-select' )}>12:00PM-5:59PM </span>
                        </label>
                        <label className="custom-radio"
                               onClick={()=>props.onClick({
                                   arriveTime: 2,
                               })}>
                            <input type="radio" name="option" value="2"/>
                            <span className="custom-radio-indicator"></span>
                            <span  className={'' + (props.resultFilter.arriveTime ===  2 ? 'radio-select' : 'radio-no-select' )}>12:00PM-5:59PM </span>
                        </label>
                    </div>
                </div>
                <div className="mt-3">
                    <h3 className='sort-by'>{t('Stops')}</h3>
                    <div className="custom-radio-group">
                        <label className="custom-radio"
                               onClick={()=>props.onClick({
                                   stops: 0,
                               })}
                        >
                            <input type="radio" name="option" value="nonstop"/>
                            <span className="custom-radio-indicator"></span>
                            <span className={'' + (props.resultFilter.stops ===  0 ? 'radio-select' : 'radio-no-select' )}>Nonstop </span>
                        </label>
                        <label className="custom-radio"
                               onClick={()=>props.onClick({
                                   stops: 1,
                               })}>
                            <input type="radio" name="option" value="1stop"/>
                            <span className="custom-radio-indicator"></span>
                            <span className={'' + (props.resultFilter.stops ===  1 ? 'radio-select' : 'radio-no-select' )}>1 Stop</span>
                        </label>
                        <label className="custom-radio"
                               onClick={()=>props.onClick({
                                   stops: 2,
                               })}
                        >
                            <input type="radio" name="option" value="1stop"/>
                            <span className="custom-radio-indicator"></span>
                            <span className={'' + (props.resultFilter.stops ===  2 ? 'radio-select' : 'radio-no-select' )}>2 + Stop</span>
                        </label>
                    </div>
                </div>
                <div className="mt-3">
                    <h3 className='sort-by'>{t('Airlines Included')}</h3>
                    <div className="custom-radio-group">
                        <label className="custom-radio">
                            <input type="radio" name="option" value="nonstop"/>
                            <span className="custom-radio-indicator"></span>
                            <span className='radio-no-select'>Alitalia </span>
                        </label>
                        <label className="custom-radio">
                            <input type="radio" name="option" value="1stop"/>
                            <span className="custom-radio-indicator"></span>
                            <span className='radio-select'>Lufthansa</span>
                        </label>
                        <label className="custom-radio">
                            <input type="radio" name="option" value="1stop"/>
                            <span className="custom-radio-indicator"></span>
                            <span className='radio-select'>Air France</span>
                        </label>
                        <label className="custom-radio">
                            <input type="radio" name="option" value="1stop"/>
                            <span className="custom-radio-indicator"></span>
                            <span className='radio-select'>Brussels Airlines</span>
                        </label>
                    </div>
                </div>
            </div>
        </>
    )

}
export default ResultsFilter