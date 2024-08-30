import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

const fetchUserData = async (setUserData, setLoading, setError) => {
  try {
    const response = await axios.get('https://randomuser.me/api/');
    setUserData(response.data.results[0]);
  } catch (err) {
    setError(err);
  } finally {
    setLoading(false);
  }
};

const Home = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUserData(setUserData, setLoading, setError);
  }, []);

  const handleRefresh = () => {
    setLoading(true);
    fetchUserData(setUserData, setLoading, setError);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container-fluid mt-5">
      {userData ? (
        <Card>
          <Card.Body className="text-center py-5">
            <Image src={userData.picture.large} roundedCircle />
            <Card.Title>
              <h1>Random User Detail</h1>
            </Card.Title>
            <Card.Text>
              Name: {userData.name.first} {userData.name.last}
              <br />
              Email: {userData.email}
              <br />
              Phone: {userData.phone}
              <br />
              City: {userData.location.city}
              <br />
              State: {userData.location.state}
              <br />
              Country: {userData.location.country}
              <br />
              Postcode: {userData.location.postcode}
            </Card.Text>
            <Button variant="primary" onClick={handleRefresh}>
              Refresh
            </Button>
          </Card.Body>
        </Card>
      ) : (
        <p>No user data available</p>
      )}
    </div>
  );
};

export default Home;
