import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

import FlightRow from "./FlightRow";
import flightsData from "./flights.json";

export const FlightsTable = () => {
  return (
    <>
      <h1 className="m-3">Flights</h1>
      <Container className="my-3">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Source</th>
              <th>Destination</th>
              <th>Duration</th>
              <th></th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {flightsData.map((flight, flightIndex) => {
              console.log(flight.passengerCount, flight.flightCapacity);
              return (
                <FlightRow
                  key={flightIndex}
                  // ან
                  // passengerCount={flight.passengerCount}
                  // flightCapacity={flight.flightCapacity}
                  isFull={flight.passengerCount === flight.flightCapacity}
                  source={flight.source}
                  destination={flight.destination}
                  duration={flight.duration}
                />
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
};
