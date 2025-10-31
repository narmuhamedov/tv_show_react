import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTickets, bookTicket } from "../store/slices/ticketsSlice";

export default function TicketPage() {
  const dispatch = useDispatch();
  const { items, loading, booking, error } = useSelector((state) => state.tickets);

  useEffect(() => {
    dispatch(fetchTickets());
  }, [dispatch]);

  if (loading) return <p>Загрузка билетов....</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Список билетов</h2>
      <ul>
        {items.map((ticket) => (
          <li
            key={ticket.id}
            style={{
              marginBottom: "10px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "10px",
              background: ticket.booked ? "#e0ffe0" : "#fff",
            }}
          >
            <h3>{ticket.title}</h3>
            <p>{ticket.body?.slice(0, 70)}...</p>
            <button
              onClick={() => dispatch(bookTicket(ticket.id))}
              disabled={ticket.booked || booking}
              style={{
                background: ticket.booked ? "gray" : "#4caf50",
                color: "white",
                border: "none",
                padding: "8px 12px",
                borderRadius: "5px",
                cursor: ticket.booked ? "not-allowed" : "pointer",
              }}
            >
              {ticket.booked
                ? "Забронирован"
                : booking
                ? "Бронируем"
                : "Забронировать"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}