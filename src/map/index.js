import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet'; // Certifique-se de importar o CSS do Leaflet
import {Container} from './styled'

function MapPlace() {
  return (
    <Container>
    <MapContainer center={[ -23.73896, -46.57525]} zoom={17} >
      <TileLayer
        attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-23.73896, -46.57525]} icon={new Icon({
        iconRetinaUrl:require('leaflet/dist/images/marker-icon-2x.png'),
        iconUrl: require('leaflet/dist/images/marker-icon.png'),
        shadowUrl: require('leaflet/dist/images/marker-shadow.png')
      })}>
        <Popup>
          Oficina mecanica Mack Car.
        </Popup>
      </Marker>
    </MapContainer>
    </Container>
  );
}

export default MapPlace;
