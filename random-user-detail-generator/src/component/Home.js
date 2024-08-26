import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://randomuser.me/api/')
      .then(response => {
        setUserData(response.data.results[0]);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []); // Empty dependency array ensures this runs only once on mount
console.log(userData);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {userData ? (
        <div>
          <img src={userData.picture.large} alt='no-picture'/>
          <p>Name: {userData.name.first} {userData.name.last}</p>
          <p>Email: {userData.email}</p>
          {/* Add more user details here as needed */}
        </div>
      ) : (
        <p>No user data available</p>
      )}
    </div>
  );
};

export default Home;

// {
//   "gender": "female",
//   "name": {
//       "title": "Miss",
//       "first": "Christin",
//       "last": "Heiland"
//   },
//   "location": {
//       "street": {
//           "number": 4494,
//           "name": "Rosenweg"
//       },
//       "city": "Dingelstädt",
//       "state": "Berlin",
//       "country": "Germany",
//       "postcode": 38390,
//       "coordinates": {
//           "latitude": "-50.2299",
//           "longitude": "142.6933"
//       },
//       "timezone": {
//           "offset": "-7:00",
//           "description": "Mountain Time (US & Canada)"
//       }
//   },
//   "email": "christin.heiland@example.com",
//   "login": {
//       "uuid": "25337c32-5063-4f83-8f7f-680cbaa7f34d",
//       "username": "yellowgorilla556",
//       "password": "italy",
//       "salt": "dAn9Ios7",
//       "md5": "29846195c04a7f01b09b92bf21f4fcc9",
//       "sha1": "526c797f45bbda709e53277a1fda6b06bad20e7a",
//       "sha256": "b9e976e9817e5b79a9a145734e03638ee5ba08d039bb3ba61aebae94e157fd1e"
//   },
//   "dob": {
//       "date": "1948-01-12T05:45:13.903Z",
//       "age": 76
//   },
//   "registered": {
//       "date": "2017-08-21T11:08:07.637Z",
//       "age": 7
//   },
//   "phone": "0664-9228600",
//   "cell": "0179-7883400",
//   "id": {
//       "name": "SVNR",
//       "value": "48 110148 H 544"
//   },
//   "picture": {
//       "large": "https://randomuser.me/api/portraits/women/68.jpg",
//       "medium": "https://randomuser.me/api/portraits/med/women/68.jpg",
//       "thumbnail": "https://randomuser.me/api/portraits/thumb/women/68.jpg"
//   },
//   "nat": "DE"
// }