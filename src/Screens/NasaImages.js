// NasaImages.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchNasaImages } from '../services/ApiService'; // Adjust the path as necessary

function NasaImages() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchAttempted, setSearchAttempted] = useState(false);

  const handleFetchImages = async () => {
    setLoading(true);
    setSearchAttempted(true);
    setError(null);
    try {
      const items = await fetchNasaImages(query);
      setImages(items);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Search and Explore NASA Related Articles</h1>
      <div className="row mb-3 align-items-end">
        <div className="col-md-8">
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Enter search term"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <button className="btn btn-primary w-100 mb-3" onClick={handleFetchImages}>Search</button>
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
      {searchAttempted && images.length === 0 && !loading && (
        <div className="text-center">No images found for this query.</div>
      )}
      <div className="row">
        {images.map((image, index) => (
          <div key={index} className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100" style={{ minHeight: '450px', maxHeight: '450px', overflow: 'hidden' }}>
              <img src={image.links[0].href} alt={image.data[0].title} className="card-img-top img-fluid" style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{image.data[0].title}</h5>
                <div className="card-text overflow-auto" style={{ maxHeight: '150px', textAlign: 'justify' }}>
                  {image.data[0].description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NasaImages;

// // NasaImages.js
// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { fetchNasaImages } from '../services/ApiService'; // Adjust the path as necessary

// function NasaImages() {
//   const [images, setImages] = useState([]);
//   const [query, setQuery] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [searchAttempted, setSearchAttempted] = useState(false);

//   const handleFetchImages = async () => {
//     setLoading(true);
//     setSearchAttempted(true);
//     try {
//       const items = await fetchNasaImages(query);
//       setImages(items);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h1 className="mb-4 text-center">Search and Explore NASA Related Articles</h1>
//       <div className="row mb-3 align-items-end">
//         <div className="col-md-8">
//           <input
//             type="text"
//             className="form-control mb-3"
//             placeholder="Enter search term"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//           />
//         </div>
//         <div className="col-md-4">
//           <button className="btn btn-primary w-100 mb-3" onClick={handleFetchImages}>Search</button>
//         </div>
//       </div>
//       {loading && <div className="text-center"><div className="spinner-border text-light" role="status"><span className="visually-hidden">Loading...</span></div></div>}
//       {error && <div className="alert alert-danger" role="alert">Error: {error}</div>}
//       {searchAttempted && images.length === 0 && !loading && (
//         <div className="text-center">No images found for this query.</div>
//       )}
//       <div className="row">
//         {images.map((image, index) => (
//           <div key={index} className="col-lg-4 col-md-6 mb-4">
//             <div className="card h-100" style={{ minHeight: '450px', maxHeight: '450px', overflow: 'hidden' }}>
//               <img src={image.links[0].href} alt={image.data[0].title} className="card-img-top img-fluid" style={{ height: '200px', objectFit: 'cover' }} />
//               <div className="card-body d-flex flex-column">
//                 <h5 className="card-title">{image.data[0].title}</h5>
//                 <div className="card-text overflow-auto" style={{ maxHeight: '150px', textAlign: 'justify' }}>
//                   {image.data[0].description}
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default NasaImages;

