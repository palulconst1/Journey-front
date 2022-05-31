import Link from "next/link";
import ticketStyle from "../styles/Ticket.module.css";
import { useState } from "react";

const TicketItem = ({ ticket }) => {
    const [counter, setCounter] = useState(1);
    return (
        <div className="card mx-2 my-2">
            <div className="card-body">
                <h5 className="card-title">
                    <span>{ticket.name}</span>
                    <span className={ticketStyle.price}>
                        {ticket.price} RON
                    </span>
                </h5>
                <p className="card-text">{ticket.description}</p>
                <div>
                    <button
                        className={ticketStyle.my_button}
                        onClick={() => {
                            if (counter > 0) {
                                setCounter(counter - 1);
                            }
                        }}
                    >
                        -
                    </button>
                    <a> {counter} </a>
                    <button
                        className={ticketStyle.my_button}
                        onClick={() => {
                            if (counter < 10) {
                                setCounter(counter + 1);
                            }
                        }}
                    >
                        +
                    </button>

                    <button
                        className={ticketStyle.buy}
                        onClick={() => {
                            console.log("Ai adaugat", counter, "bilete de tipul", ticket.name)
                            setCounter(0)
                        }}
                    >
                        Adauga
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TicketItem;
