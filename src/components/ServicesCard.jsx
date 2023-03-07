import { useCallback } from "react";
import Image from 'next/image';

export default function ServicesCard(props){
    const {src, title, desc} = props;

    return(
        <div className="services-card">
            {/* <img src={src} srcSet={`${srcSet} 2x`} className="services-card__img" /> */}
            <Image
                src={'/images/' + src + '.jpg'}
                width={150}
                height={150}
                quality={100}
                alt={''}
			>
			</Image>
            <div className="services-card__body">
                <div className="services-card__title" dangerouslySetInnerHTML={{__html: title}} />
                <p className="services-card__desc">{desc}</p>
            </div>
        </div>
    )
}