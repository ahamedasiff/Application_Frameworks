// AstronomyPOD.test.js
import React from 'react';
import { render, screen, waitFor, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AstronomyPOD from './AstronomyPOD';

describe('AstronomyPOD Component', () => {
  const mockAPODData = {
    date: "2023-05-18",
    explanation: "This is a test explanation.",
    media_type: "image",
    title: "Test APOD",
    url: "https://apod.nasa.gov/apod/image/2105/PIA24567_fig1_1024.jpg"
  };

  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('fetches and displays APOD data for a selected date', async () => {
    // Mock the API call for a specific date
    const selectedDate = '2023-05-17';
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockAPODData,
    });

    // Use act to wrap rendering and state updates
    await act(async () => {
      render(<AstronomyPOD />);
    });

    // Simulate selecting a date
    fireEvent.change(screen.getByLabelText(/select date/i), { target: { value: selectedDate } });

    // Wait for the API call to finish and the data to be displayed
    await waitFor(() => {
      expect(screen.getByText(mockAPODData.title)).toBeInTheDocument();
      expect(screen.getByText(mockAPODData.explanation)).toBeInTheDocument();
      expect(screen.getByAltText(mockAPODData.title)).toHaveAttribute('src', mockAPODData.url);
    });
  });

  it('displays an error message on API call failure', async () => {
    // Mock the API call to return an error
    global.fetch.mockResolvedValueOnce({
      ok: false,
    });

    // Use act to wrap rendering and state updates
    await act(async () => {
      render(<AstronomyPOD />);
    });

    // Wait for the error message to be displayed
    await waitFor(() => {
      expect(screen.getByRole('alert')).toHaveTextContent('Error');
    });
  });
});
