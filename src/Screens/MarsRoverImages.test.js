// MarsRoverImages.test.js
import React from 'react';
import { render, screen, waitFor, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MarsRoverImages from './MarsRoverImages';

describe('MarsRoverImages Component', () => {
  const mockPhotosData = {
    photos: [
      {
        id: 1,
        img_src: "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486897380EDR_F0481570FHAZ00323M_.JPG",
        camera: { full_name: "Front Hazard Avoidance Camera" },
        rover: { name: "Curiosity" },
        earth_date: "2015-05-30"
      },
      {
        id: 2,
        img_src: "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486897380EDR_F0481570FHAZ00324M_.JPG",
        camera: { full_name: "Front Hazard Avoidance Camera" },
        rover: { name: "Curiosity" },
        earth_date: "2015-05-30"
      }
    ]
  };

  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('displays an error message on API call failure', async () => {
    // Mock the API call to return an error
    global.fetch.mockResolvedValueOnce({
      ok: false,
    });

    // Use act to wrap rendering and state updates
    await act(async () => {
      render(<MarsRoverImages />);
    });

    // Simulate clicking the search button
    fireEvent.click(screen.getByText(/search/i));

    // Wait for the error message to be displayed
    await waitFor(() => {
      expect(screen.getByRole('alert')).toHaveTextContent('Error');
    });
  });

  it('displays a message when no photos are found', async () => {
    // Mock the API call to return no photos
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ photos: [] }),
    });

    // Use act to wrap rendering and state updates
    await act(async () => {
      render(<MarsRoverImages />);
    });

    // Simulate clicking the search button
    fireEvent.click(screen.getByText(/search/i));
// 
    // Wait for the message indicating no photos found
    await waitFor(() => {
      expect(screen.getByText('No photos available for this camera on this sol.')).toBeInTheDocument();
    });
  });
});
