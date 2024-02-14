import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';

const Map = () => {
  const [map, setMap] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load the Google Maps API script dynamically
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBMsJ2haj_1sktrtFkvymOVKN_sc_i7srw&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      setIsLoaded(true);
    };
    document.body.appendChild(script);
  }, []);

  const center = {
    lat: 40.7128,
    lng: -74.006
  };

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <div className='mx-auto'>
      <div className="md:py-16 py-10 bg-primary">
        <h1 className="md:text-4xl text-xl text-black font-bold text-center"> “ We Serve Our Queenstown, Central Otago Community” </h1>
      </div>

      {isLoaded && (
        <div style={{ width: '100vw', height: '100vh' }}>
          <GoogleMap
            mapContainerStyle={{
              width: '100%',
              height: '100%'
            }}
            zoom={10}
            center={center}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            <Marker position={center}>
              <InfoWindow>
                <div>New York City</div>
              </InfoWindow>
            </Marker>
          </GoogleMap>
        </div>
      )}
    </div>
  );
}

export default Map;
