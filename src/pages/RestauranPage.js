import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenu } from "../store/slices/menuSlice";
import './RegistrationPage.css';

export default function RestauranPage(){
    const dispatch = useDispatch()
    const {items: menu, loading, error} = useSelector((state)=>state.menu);

    useEffect(()=>{
        dispatch(fetchMenu());
    }, [dispatch]);

    if (loading) return <p>Загрузка меню ...</p>
    if (error) return <p>{error}</p>

    return(
        <div style={{padding: "20px"}}>
            <h2>Меню закусочной!</h2>
            <div className="menu-list">
                {menu.map((item) => ( // Изменили фигурные скобки на круглые
                    <div key={item.id} className="menu-card">
                        <h3>{item.title}</h3>
                        <p>{item.body}....</p>
                        <p>{item.price}</p>
                        <button>Добавить в заказ</button>
                    </div>
                ))}
            </div>
        </div>
    )
}