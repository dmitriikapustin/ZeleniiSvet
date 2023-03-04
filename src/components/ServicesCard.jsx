import { useCallback } from "react";

export default function ServicesCard(props){
    const {src, srcSet, title, desc} = props;

    return(
        <div className="services-card">
            <img src={src} srcSet={`${srcSet} 2x`} className="services-card__img" />
            <div className="services-card__body">
                <div className="services-card__title" dangerouslySetInnerHTML={{__html: title}} />
                <p className="services-card__desc">{desc}</p>
            </div>
        </div>
    )
}