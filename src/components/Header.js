import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toogleTheme } from "../store/slices/themeSlice";
import { translations } from "../i18n";
import { switchLanguage } from "../store/slices/languageSlice";

function Header() {
    
    const dispatch = useDispatch();
    const theme = useSelector((state)=> state.theme.mode)
    const lang = useSelector((state) => state.language.lang); // Исправлен путь


    const t = translations[lang]

    return (
        <header style={{ padding: '15px', background: '#333', color: '#fff' }}>
            <nav>
                <Link to="/" style={{ margin: '10px', color: 'white' }}>Главная</Link>
                <Link to="/about" style={{ margin: '10px', color: 'white' }}>О нас</Link>
                <Link to="/contacts" style={{ margin: '10px', color: 'white' }}>Контакты</Link>
                <Link to="/movies" style={{ margin: '10px', color: 'white' }}>Фильмы</Link>
                <Link to="/favorites" style={{ margin: '10px', color: 'white' }}>Избранные</Link>
                <Link to="/register" style={{ margin: '10px', color: 'white' }}>Регистрация</Link>
                 <Link to="/menu" style={{ margin: '10px', color: 'white' }}>Закусочная</Link>
                 <Link to="/booking" style={{ margin: '10px', color: 'white' }}>Бронирование столиков</Link>
                  <Link to="/products" style={{ margin: '10px', color: 'white' }}>Продукты</Link>
                <button onClick={()=> dispatch(toogleTheme())}
                    style={{
                        marginLeft: "30px",
                        padding: "5px 10px",
                        cursor: "pointer"
                    }}
                    >
                        {theme === "light" ? "🌙Темная": "☀️Светлая"}
                </button>

                <button onClick={()=> dispatch(switchLanguage())}
                    style={{ marginLeft: '20px', padding: "5px 10px" }}
                    >
                        {t.change_lang}

                </button>



            </nav>
        </header>
    );
}

export default Header;
