import React from 'react';
import styled from 'styled-components';

import Control from './control'
import Mapbox from './mapbox';


const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 30% 70%;
`;

const MapWrapper = styled.div`
  display: flex;
`;

export function Viewer() {
  return (
    <Wrapper>
      <Control />
      <MapWrapper>
        <Mapbox />
      </MapWrapper>
    </Wrapper>
  );
}
