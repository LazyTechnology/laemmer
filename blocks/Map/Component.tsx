import React, { useMemo, Fragment, FC } from 'react';
import { chakra } from '@chakra-ui/react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { Type } from '.';


const Map: FC<Omit<Type, 'blockType'>> = ({ api, longitude, latitude, markers }) => {
  const center = useMemo(() => ({ lat: latitude, lng: longitude }), [latitude, longitude]);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: api,
  });

  if (!isLoaded) return <chakra.div>Chargement...</chakra.div>;
  return (
    <Fragment>
      <GoogleMap
        zoom={17}
        center={center}
        mapContainerStyle={{ width: '100%', height: '400px' }}
      >
        {markers.map((el, i) => (
          <Fragment key={i}>
            <Marker position={{ lat: el.latitude, lng: el.longitude }} />
          </Fragment>
        ))}
      </GoogleMap>
    </Fragment>
  );
};

export default Map;
