import Button from "react-bootstrap/Button";

const FlightRow = ({ source, destination, duration, isFull }) => {
  const durationInHours = (duration / 60).toFixed(2);

  const handleClick = () => {
    alert(
      `Booking flight from ${source} to ${destination} (${durationInHours} hours).`
    );
  };

  return (
    <tr>
      <td>{source}</td>
      <td>{destination}</td>
      <td>{durationInHours}h</td>
      <td>
        <Button
          disabled={isFull}
          onClick={handleClick}
          size="sm"
          variant="primary"
        >
          Book
        </Button>
      </td>
      <td>{isFull ? "Full" : "Available"}</td>
    </tr>
  );
};

export default FlightRow;
