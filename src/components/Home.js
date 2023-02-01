import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = ({users}) => {


  return (
    <div style={{ margin: "10rem" }}>
      <Link to="/create">
        <Button size="lg">Create</Button>
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0
            ? users.map((item) => {
                return (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                  </tr>
                );
              })
            : "No data available"}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
