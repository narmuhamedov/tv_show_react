import React, {useState} from "react";

const images = [
    'https://s4.afisha.ru/mediastorage/62/d1/da2b0810e19c40e0ab76fa58d162.jpg',
    'https://thumbs.dfs.ivi.ru/storage0/contents/d/3/cb359e5712417994c4a2ac58bacf47.jpg',
    'https://cdn-ksvod.kyivstar.ua/content/HLS/VOD/IMAGE5/6803760d64f4429560f95ce6/IMAGE_2_3_XL.jpg'
];

function Slider(){
    const [index, setIdex] = useState(0);


const next = () => setIdex((index+1)%images.length);
const prev = () => setIdex((index-1)%images.length);


return(
    <div style={{textAlign:'center', margin: '20px'}}>
        <img src={images[index]} alt="slide" style={{width: '300px', borderRadius:'8px'}}/>
        <div>
            <button onClick={prev}>Предыдущий</button>
            <button onClick={next}>Следующий</button>
        </div>
    </div>
)

}


export default Slider;