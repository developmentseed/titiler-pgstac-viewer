import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import {Leva, LevaPanel, useControls, useCreateStore } from 'leva';


const Panel = styled.div`
  padding: 10px;
`;

export default function Control() {

  const { searchID, tileMatrixSetId, format } = useControls(
    { searchID: 'search-id', 
    tileMatrixSetId: {value: 'WebMercatorQuad', editable: false}, 
    format: {options: ['png', 'npy', 'tif', 'jpeg', 'jpg', 'jp2', 'webp', 'pngraw']}}
  );

  
  const theme = {
    colors: {
      elevation1: '#ff0000',
      elevation2: '#cccccc', // panel background
      elevation3: '#fff', // input background
      accent1: '#CF3F02',
      accent2: '#CF3F02',
      accent3: '#CF3F02',
      highlight1: '#cccccc',
      highlight2: '#333333',
      highlight3: '#FEFEFE',
      vivid1: '#ffcc00'
    }

  };

  return (
    <Panel>
      <h1> Titiler previewer</h1>
      <Leva fill flat titleBar={false} theme={theme} />
      <p>
        {`/mosaic/tiles/${searchID}/${tileMatrixSetId}/{z}/{x}/{y}@{scale}x.${format}`}

      </p>
    </Panel>);

}
