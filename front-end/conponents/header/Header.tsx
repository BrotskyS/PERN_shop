import react,{useState} from 'react'
import Image from 'next/image'
export function Header() {    
    return(
        <div className={'header_container'}>
            <div className="header_top">
                <div className="header_top_left">
                    <div className="header_top-left_phone">
                        {/* <img/> */}
                        <h4 className="header_top_left_phone_text">+ 38 098 744 55 44</h4>
                    </div>
                        <p className={'header_text color-gray'}>Контаки</p>
                        <p className={'header_text color-gray'}>Магазин</p>
                </div>
                <div className="header_top_rigth">
                    <div className="header_top_rigth_lang">
                        <p className={'header_text color-gray'}>RU</p>
                        <div className="header_top_rigth_lang_border"/>
                        <p className={'header_text color-gray border_left'}>UA</p>
                    </div>
                    <p className={'header_text color-gray'}>Місто Тернопіль</p>
                </div>    
            </div> 
            <div className="header_bottom">
                <h1 className="header_bottom_title">СКЛОБАНКА</h1>
                <div className="header_bottom_search">
                    <input placeholder="Пошук" className="header_bottom_search_input"></input>
                    <div className="header_bottom_search_ico">
                    <Image
                    objectPosition={'fill'}
                    className={'header_bottom_search_ico_image'}
                    src={'/loupe.png'}
                    width={30}
                    height={30}
                    
                    />
                    </div>
                </div>
                <div className="header_bottom_icons">
                    <div className="header_bottom_icons_icon">
                    <img src="" alt=""/>
                        <p>Увійти </p>
                    </div>
                    <div className="header_bottom_icons_icon">
                        <img src="" alt=""/>
                        <p>Замовлення</p>
                    </div>
                    <div className="header_bottom_icons_icon">
                        <img src="" alt=""/>
                        <p>Корзина</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
