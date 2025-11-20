import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBooking } from "../store/slices/bookingSlice";

function BookingPage(){
    const dispatch = useDispatch(); // исправлена опечатка
    const bookings = useSelector((state) => state.booking.list); // добавлен правильный селектор

    const [form, setForm] = useState({
        name: '',
        guests: '',
        date: '',
        time: '',
        comment: '', 
    });

    function handleChange(e){
        setForm({ ...form, [e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(addBooking(form)); // исправлена опечатка
        setForm({name: '', guests: '', date: '',time: '', comment: ''})
    }

    return(
        <div style={{ padding: 20}}>
            <h2>Бронирование столика</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: "column", gap: 10, maxWidth: 300 }}>
                <input name="name" placeholder="Укажите имя" value={form.name} onChange={handleChange} />
                <input name="guests" placeholder="Укажите кол-во гостей" value={form.guests} onChange={handleChange} />
                <input type="date" name="date"  value={form.date} onChange={handleChange} />
                <input type="time" name="time"  value={form.time} onChange={handleChange} />
                <textarea name="comment" placeholder="Комментарий" value={form.comment} onChange={handleChange}></textarea> {/* добавлен onChange */}
                <button type="submit">Забронировать</button>
            </form>

            <h3 style={{ marginTop: 20 }}>Список Забронированных</h3>
            { bookings.map((b, index)=>(
                <div key={index} style={{ border: '1px solid #ddd', padding: 10, marginBottom: 10 }}>
                    <p><strong>{b.name}</strong></p>
                    <p>Guests: {b.guests}</p>
                    <p>Date: {b.date}-{b.time}</p>
                    <p>{b.comment}</p>
                </div>
            )) }
        </div>
    )
}

export default BookingPage;