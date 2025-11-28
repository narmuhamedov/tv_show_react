import react from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../store/slices/productSlice";

function ProductsPage(){
    const dispatch = useDispatch();
    const { products, filter } = useSelector((state) => state.products)



    const filteredProducts = 
        filter === "all"
        ? products
        : products.filter((p)=>p.category === filter);

    return (    
        <div style={{padding: "20px"}}>
            <h2>Список Товаров</h2>

            {/* Фильтры */}

            <div style={{marginBottom: "20px"}}>
                <button onClick={()=> dispatch(setFilter("all"))}>Все</button>
                <button onClick={()=> dispatch(setFilter("electronics"))}>Электроника</button>
                <button onClick={()=> dispatch(setFilter("clothes"))}>Одежда</button>
                <button onClick={()=> dispatch(setFilter("food"))}>Еда</button>
            </div>

            {/* Список товаров */}
            {filteredProducts.map((item)=>(
                <div key={item.id} style={{ padding: "10px", borderBottom: "1px solid gray" }}>
                    <h3>{item.title}</h3>
                    <p>Категория: {item.category}</p>
                </div>
            ))}


        </div>
    )
}

export default ProductsPage;