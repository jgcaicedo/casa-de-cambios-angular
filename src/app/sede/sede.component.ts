import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-sede',
  templateUrl: './sede.component.html',
  styleUrls: ['./sede.component.css']
})
export class SedeComponent implements OnInit {
  ngOnInit(): void {
    // Configura el mapa directamente con el token
    const map = new mapboxgl.Map({
      container: 'map', // ID del contenedor del mapa
      style: 'mapbox://styles/mapbox/streets-v11', // Estilo del mapa
      center: [-74.5, 40], // Coordenadas iniciales
      zoom: 9, // Nivel de zoom inicial
      accessToken: 'pk.eyJ1IjoianVhbmNhaWNlZG8yIiwiYSI6ImNtNmIxcTF5dTAzczcya3B3bDZydGhtamMifQ.6sUZ-dMT8v3N4pMKiI-wOw'
    });

    // Añade un marcador al mapa
    new mapboxgl.Marker().setLngLat([-74.5, 40]).addTo(map);

    // Maneja errores
    map.on('error', (error) => {
      console.error('Error al cargar el mapa:', error);
    });
  }
}
