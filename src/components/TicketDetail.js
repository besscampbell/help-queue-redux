import React from "react";
import PropTypes from "prop-types";

function TicketDetail(props){
  const { ticket, onClickingDelete, onClickingEdit } = props; //object destructuring

  return (
    <React.Fragment>
      <h2>Ticket Info</h2>
      <h3>{ticket.location} - {ticket.names}</h3>
      <p><em>{ticket.issue}</em></p>
      <button onClick={ () => onClickingEdit(ticket.id)}>Update Ticket</button>
      <button onClick={ () => onClickingDelete(ticket.id)}>Close Ticket</button>
    </React.Fragment>
  );
}

TicketDetail.propTypes = {
  ticket: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default TicketDetail;