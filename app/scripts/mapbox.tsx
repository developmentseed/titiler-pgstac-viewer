import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import mapboxgl, { Map as MapboxMap } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = process.env.MAPBOX_TOKEN ?? '';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export default function Mapbox() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MapboxMap>();

  useEffect(() => {
    if (!mapboxgl.accessToken || !mapContainer.current) return;

    const mbMap = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/satellite-streets-v12',
      logoPosition: 'bottom-left',
      pitchWithRotate: false,
      dragRotate: false,
      zoom: 2,
    });

    mapRef.current = mbMap;

    mbMap.on('load', () => {});

    return () => {
      mbMap.remove();
      mapRef.current = undefined;
    };
  }, []);

  return mapboxgl.accessToken ? (
    <Container ref={mapContainer} />
  ) : (
    <Container>
      MB Token is missing in env: <code>MAPBOX_TOKEN</code>
    </Container>
  );
}
