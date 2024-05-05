// AstronomyPOD.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AstronomyPOD.css'; // Adjust path as needed

function AstronomyPOD() {
  const [apod, setApod] = useState(null);
  const [date, setDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiKey = 'X9zcVNSCdrV6hWt7i27KJSHpcRKhUAONOHwuGu77'; // Replace with your actual NASA API key

  const fetchAPOD = async (selectedDate = '') => {
    setLoading(true);
    setError(null);
    try {
      const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}${selectedDate ? `&date=${selectedDate}` : ''}`;
      const response = await axios.get(url);
      setApod(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAPOD(); // Fetch the current APOD on initial load
  }, []);

  const handleDateChange = (event) => {
    setDate(event.target.value);
    fetchAPOD(event.target.value);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Astronomy Picture of the Day</h1>
      <div className="row justify-content-center mb-3">
        <div className="col-md-6 col-sm-8">
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={handleDateChange}
            max={new Date().toISOString().split('T')[0]} // Restrict to today's date
          />
        </div>
      </div>
      {loading && (
        <div className="text-center">
          <div className="spinner-border text-light" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {error && <div className="alert alert-danger" role="alert">Error: {error}</div>}
      {apod && (
        <div className="text-center">
          <h2 className="mb-3">{apod.title}</h2>
          <div className="image-container">
            <img src={apod.url} alt={apod.title} className="img-fluid" />
          </div>
          <div className="mt-3">
            <p className="text-justify" style={{textAlign: 'justify'}}>{apod.explanation}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default AstronomyPOD;

// // AstronomyPOD.js
// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './AstronomyPOD.css'; // Import additional custom styles if needed
// import { fetchAPOD } from '../services/ApiService'; // Adjust the path as necessary

// function AstronomyPOD() {
//   const [apod, setApod] = useState(null);
//   const [date, setDate] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleFetchAPOD = async (selectedDate) => {
//     setLoading(true);
//     try {
//       const apodData = await fetchAPOD(selectedDate);
//       setApod(apodData);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     handleFetchAPOD(); // Fetch the current APOD on first load
//   }, []);

//   const handleDateChange = (event) => {
//     setDate(event.target.value);
//     handleFetchAPOD(event.target.value);
//   };

//   return (
//     <div className="container mt-5">
//       <h1 className="mb-4 text-center">Astronomy Picture of the Day</h1>
//       <div className="row justify-content-center mb-3">
//         <div className="col-md-6 col-sm-8">
//           <input
//             type="date"
//             className="form-control"
//             value={date}
//             onChange={handleDateChange}
//             max={new Date().toISOString().split('T')[0]} // Restrict to today's date
//           />
//         </div>
//       </div>
//       {loading && (
//         <div className="text-center">
//           <div className="spinner-border text-light" role="status">
//             <span className="visually-hidden">Loading...</span>
//           </div>
//         </div>
//       )}
//       {error && <div className="alert alert-danger" role="alert">Error: {error}</div>}
//       {apod && (
//         <div className="text-center">
//           <h2 className="mb-3">{apod.title}</h2>
//           <div className="image-container">
//             <img src={apod.url} alt={apod.title} className="img-fluid" />
//           </div>
//           <div className="mt-3">
//             <p className="text-justify">{apod.explanation}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AstronomyPOD;
