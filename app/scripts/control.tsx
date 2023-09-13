import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Leva, LevaPanel, useControls, useCreateStore } from 'leva';
import axios from 'axios';


const STAC_ENDPOINT = 'https://staging-stac.delta-backend.com';
const Panel = styled.div`
  padding: 10px;
`;

export default function Control() {

  const [collectionIdData, setCollectionIdData] = useState([]);
  const [itemId, setItemId] = useState([]); // do not make item id editable


  const { collectionId, searchID, tileMatrixSetId, format } = useControls(
    { collectionId: {options: collectionIdData},
      searchID: 'search-id', 
      tileMatrixSetId: {value: 'WebMercatorQuad'}, 
      format: {options: ['png', 'npy', 'tif', 'jpeg', 'jpg', 'jp2', 'webp', 'pngraw']}},
      [collectionIdData]
  );
  useEffect(() => {
    async function fetchData() {
      const {data:res}  = await axios.get(`${STAC_ENDPOINT}/collections`);
      setCollectionIdData(res.collections.map(c => c.id));
    }
    fetchData();
  },[]);



  useEffect(() => {
    async function fetchData() {
      const {data:res}  = await axios.get(`${STAC_ENDPOINT}/collections/${collectionId}/items?limit=3`);
      const firstItem = res.features[0];
      setItemId(firstItem?.id);
    }
    fetchData();
  },[collectionId]);


  
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

    </Panel>);

}
