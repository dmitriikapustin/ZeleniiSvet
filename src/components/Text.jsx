import React from 'react';

function Text(props) {

    // Fetch кладется внутрь тела компонента и вызывается универсально для любого типа
    // После фетчей подключаем все в переменные ниже

    const type = props.type // : number
    
    const title = props.title
    const text1 = props.text1
    const text2 = props.text2

    // TYPE 1
    if ( type === 1 ) {
        return (
            <section className={'text text-1 flex flex-col'}>
                <div className="container text justify-between flex flex-row">
                    <div className="cd8 cm4 mbs">
                        <h2>{title}</h2>
                    </div>
                    <div className="cd6 cm4">
                        <p>{text1}</p>
                    </div>
                    <div className="cd6 cm4">
                        <p>{text2}</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default Text