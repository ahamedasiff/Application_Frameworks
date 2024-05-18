// MarsRoverImages.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MarsRoverImages.css'; // Adjust path as needed

function MarsRoverImages() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [camera, setCamera] = useState('FHAZ'); // Default camera
  const [sol, setSol] = useState(100); // Default Sol to start with
  const [searchAttempted, setSearchAttempted] = useState(false); // To track if search has been attempted

  const apiKey = 'X9zcVNSCdrV6hWt7i27KJSHpcRKhUAONOHwuGu77'; // Replace with your actual API key

  const getRandomPhotos = (photos, numPhotos) => {
    const shuffled = photos.sort(() => 0.5 - Math.random()); // Shuffle the array
    return shuffled.slice(0, numPhotos); // Get sub-array of first n elements after shuffle
  };

  const fetchMarsPhotos = async () => {
    setLoading(true);
    setSearchAttempted(true); // Indicate that a search has been attempted
    setError(null); // Reset error state
    try {
      const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&camera=${camera}&api_key=${apiKey}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();

      if (camera === 'MAST') {
        setPhotos(getRandomPhotos(data.photos, 12)); // Only take 12 random photos for Mast Camera
      } else {
        setPhotos(data.photos);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Mars Rover Images</h1>
      <div className="row mb-3 align-items-end">
        <div className="col-md-4">
          <label htmlFor="solInput" className="form-label">Enter Sol (Martian Day):</label>
          <input
            type="number"
            className="form-control"
            id="solInput"
            value={sol}
            onChange={(e) => setSol(e.target.value)}
            min="0"
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="cameraSelect" className="form-label mt-2">Choose Camera:</label>
          <select id="cameraSelect" className="form-select" value={camera} onChange={(e) => setCamera(e.target.value)}>
            <option value="FHAZ">Front Hazard Avoidance Camera</option>
            <option value="RHAZ">Rear Hazard Avoidance Camera</option>
            <option value="MAST">Mast Camera</option>
          </select>
        </div>
        <div className="col-md-4">
          <button className="btn btn-primary w-100 mt-4" onClick={fetchMarsPhotos}>Search</button>
        </div>
      </div>
      {loading && (
        <div className="text-center">
          <div className="spinner-border text-light" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {searchAttempted && photos.length === 0 && !loading && !error && (
        <div className="text-center">No photos available for this camera on this sol.</div>
      )}
      {error && <div className="alert alert-danger" role="alert">Error: {error}</div>}
      <div className="row">
        {photos.map((photo) => (
          <div key={photo.id} className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <img src={photo.img_src} alt="Mars Rover" className="card-img-top img-fluid" />
              <div className="card-body">
                <h5 className="card-title">{photo.camera.full_name}</h5>
                <p className="card-text">Photo taken by {photo.rover.name} on {photo.earth_date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarsRoverImages;

// // MarsRoverImages.js
// import React, { useState } from 'react';
// import axios from 'axios'; // Import axios
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './MarsRoverImages.css'; // Adjust path as needed

// function MarsRoverImages() {
//   const [photos, setPhotos] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [camera, setCamera] = useState('FHAZ'); // Default camera
//   const [sol, setSol] = useState(100); // Default Sol to start with
//   const [searchAttempted, setSearchAttempted] = useState(false); // To track if search has been attempted

//   const apiKey = 'X9zcVNSCdrV6hWt7i27KJSHpcRKhUAONOHwuGu77'; // Replace with your actual API key

//   const getRandomPhotos = (photos, numPhotos) => {
//     const shuffled = photos.sort(() => 0.5 - Math.random()); // Shuffle the array
//     return shuffled.slice(0, numPhotos); // Get sub-array of first n elements after shuffle
//   };

//   const fetchMarsPhotos = async () => {
//     setLoading(true);
//     setSearchAttempted(true); // Indicate that a search has been attempted
//     try {
//       const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&camera=${camera}&api_key=${apiKey}`;
//       const response = await axios.get(url);

//       if (camera === 'MAST') {
//         setPhotos(getRandomPhotos(response.data.photos, 12)); // Only take 12 random photos for Mast Camera
//       } else {
//         setPhotos(response.data.photos);
//       }
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h1 className="mb-4 text-center">Mars Rover Images</h1>
//       <div className="row mb-3 align-items-end">
//         <div className="col-md-4">
//           <label htmlFor="solInput" className="form-label">Enter Sol (Martian Day):</label>
//           <input
//             type="number"
//             className="form-control"
//             id="solInput"
//             value={sol}
//             onChange={(e) => setSol(e.target.value)}
//             min="0"
//           />
//         </div>
//         <div className="col-md-4">
//           <label htmlFor="cameraSelect" className="form-label mt-2">Choose Camera:</label>
//           <select id="cameraSelect" className="form-select" value={camera} onChange={(e) => setCamera(e.target.value)}>
//             <option value="FHAZ">Front Hazard Avoidance Camera</option>
//             <option value="RHAZ">Rear Hazard Avoidance Camera</option>
//             <option value="MAST">Mast Camera</option>
//           </select>
//         </div>
//         <div className="col-md-4">
//           <button className="btn btn-primary w-100 mt-4" onClick={fetchMarsPhotos}>Search</button>
//         </div>
//       </div>
//       {searchAttempted && photos.length === 0 && !loading && (
//         <div className="text-center">No photos available for this camera on this sol.</div>
//       )}
//       <div className="row">
//         {photos.map((photo) => (
//           <div key={photo.id} className="col-lg-4 col-md-6 mb-4">
//             <div className="card">
//               <img src={photo.img_src} alt="Mars Rover" className="card-img-top img-fluid" />
//               <div className="card-body">
//                 <h5 className="card-title">{photo.camera.full_name}</h5>
//                 <p className="card-text">Photo taken by {photo.rover.name} on {photo.earth_date}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default MarsRoverImages;

// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
// import './MarsRoverImages.css'; // Make sure this path is correct


// function MarsRoverImages() {
//   const [photos, setPhotos] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [camera, setCamera] = useState('FHAZ'); // Default camera
//   const [sol, setSol] = useState(100);  // Default Sol to start with
//   const [searchAttempted, setSearchAttempted] = useState(false);  // To track if search has been attempted

//   const getRandomPhotos = (photos, numPhotos) => {
//     const shuffled = photos.sort(() => 0.5 - Math.random()); // Shuffle array
//     return shuffled.slice(0, numPhotos); // Get sub-array of first n elements after shuffled
//   };

//   const fetchMarsPhotos = async () => {
//     setLoading(true);
//     setSearchAttempted(true);  // Indicate that a search has been attempted
//     try {
//       const apiKey = 'X9zcVNSCdrV6hWt7i27KJSHpcRKhUAONOHwuGu77'; // Replace with your actual API key
//       const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&camera=${camera}&api_key=${apiKey}`;

//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       if (camera === 'MAST') {
//         setPhotos(getRandomPhotos(data.photos, 12)); // Only take 12 random photos for Mast Camera
//       } else {
//         setPhotos(data.photos);
//       }
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h1 className="mb-4 text-center">Mars Rover Images</h1>
//       <div className="row mb-3 align-items-end">
//         <div className="col-md-4">
//           <label htmlFor="solInput" className="form-label">Enter Sol (Martian Day):</label>
//           <input
//             type="number"
//             className="form-control"
//             id="solInput"
//             value={sol}
//             onChange={(e) => setSol(e.target.value)}
//             min="0"
//           />
//         </div>
//         <div className="col-md-4">
//           <label htmlFor="cameraSelect" className="form-label mt-2">Choose Camera:</label>
//           <select id="cameraSelect" className="form-select" value={camera} onChange={(e) => setCamera(e.target.value)}>
//             <option value="FHAZ">Front Hazard Avoidance Camera</option>
//             <option value="RHAZ">Rear Hazard Avoidance Camera</option>
//             <option value="MAST">Mast Camera</option>
//           </select>
//         </div>
//         <div className="col-md-4">
//           <button className="btn btn-primary w-100 mt-4" onClick={fetchMarsPhotos}>Search</button>
//         </div>
//       </div>
//       {searchAttempted && photos.length === 0 && !loading && (
//         <div className="text-center">No photos available for this camera on this sol.</div>
//       )}
//       <div className="row">
//         {photos.map((photo) => (
//           <div key={photo.id} className="col-lg-4 col-md-6 mb-4">
//             <div className="card">
//               <img src={photo.img_src} alt="Mars Rover" className="card-img-top img-fluid" />
//               <div className="card-body">
//                 <h5 className="card-title">{photo.camera.full_name}</h5>
//                 <p className="card-text">Photo taken by {photo.rover.name} on {photo.earth_date}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default MarsRoverImages;

// // MarsRoverImages.js
// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
// import './MarsRoverImages.css'; // Add any extra custom styles
// import { fetchMarsPhotos } from '../services/ApiService'; // Adjust the path according to your structure

// function MarsRoverImages() {
//   const [photos, setPhotos] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [camera, setCamera] = useState('FHAZ'); // Default camera
//   const [sol, setSol] = useState(100); // Default Sol to start with
//   const [searchAttempted, setSearchAttempted] = useState(false);

//   const handleFetchPhotos = async () => {
//     setLoading(true);
//     setSearchAttempted(true); // Indicate that a search has been attempted
//     try {
//       const photosData = await fetchMarsPhotos(sol, camera);
//       setPhotos(photosData);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h1 className="mb-4 text-center">Mars Rover Images</h1>
//       <div className="row mb-3 align-items-end">
//         <div className="col-md-4">
//           <label htmlFor="solInput" className="form-label">Enter Sol (Martian Day):</label>
//           <input
//             type="number"
//             className="form-control"
//             id="solInput"
//             value={sol}
//             onChange={(e) => setSol(e.target.value)}
//             min="0"
//           />
//         </div>
//         <div className="col-md-4">
//           <label htmlFor="cameraSelect" className="form-label mt-2">Choose Camera:</label>
//           <select id="cameraSelect" className="form-select" value={camera} onChange={(e) => setCamera(e.target.value)}>
//             <option value="FHAZ">Front Hazard Avoidance Camera</option>
//             <option value="RHAZ">Rear Hazard Avoidance Camera</option>
//             <option value="MAST">Mast Camera</option>
//           </select>
//         </div>
//         <div className="col-md-4">
//           <button className="btn btn-primary w-100 mt-4" onClick={handleFetchPhotos}>Search</button>
//         </div>
//       </div>
//       {searchAttempted && photos.length === 0 && !loading && (
//         <div className="text-center">No photos available for this camera on this sol.</div>
//       )}
//       {loading && (
//         <div className="text-center">
//           <div className="spinner-border text-light" role="status">
//             <span className="visually-hidden">Loading...</span>
//           </div>
//         </div>
//       )}
//       {error && <div className="alert alert-danger" role="alert">Error: {error}</div>}
//       <div className="row">
//         {photos.map((photo) => (
//           <div key={photo.id} className="col-lg-4 col-md-6 mb-4">
//             <div className="card h-100">
//               <img src={photo.img_src} alt="Mars Rover" className="card-img-top img-fluid" />
//               <div className="card-body">
//                 <h5 className="card-title">{photo.camera.full_name}</h5>
//                 <p className="card-text">Photo taken by {photo.rover.name} on {photo.earth_date}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default MarsRoverImages;
