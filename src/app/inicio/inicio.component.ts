import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgIf, NgFor, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule, DecimalPipe, HttpClientModule], // ← Agregado HttpClientModule
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit {
  apiUrl = 'https://api.freecurrencyapi.com/v1/latest';
  apiKey = 'fca_live_NpkganDTrtF3OhxS3zcA9YzUjgKlThkzsmDCcBho'; // Reemplaza con tu clave API real
  rates: Record<string, number> = {};
  selectedSellCurrency = 'USD';  // Moneda que el usuario tiene
  selectedBuyCurrency = 'EUR';   // Moneda que el usuario desea comprar
  amount: number = 0;
  convertedAmount: number | null = null;
  isLoading = true;
  hasError = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchRates();
  }

  // Obtener tasas de cambio
  async fetchRates() {
    this.isLoading = true;
    this.hasError = false;
    try {
      const response: any = await this.http.get(`${this.apiUrl}?apikey=${this.apiKey}`).toPromise();
      this.rates = response?.data || {};
    } catch (error) {
      console.error('Error al obtener tasas de cambio', error);
      this.hasError = true;
      this.rates = {}; 
    } finally {
      this.isLoading = false;
    }
  }

  // Función para convertir entre monedas
  convertCurrency() {
    if (this.selectedSellCurrency in this.rates && this.selectedBuyCurrency in this.rates) {
      const sellRate = this.rates[this.selectedSellCurrency];
      const buyRate = this.rates[this.selectedBuyCurrency];
      this.convertedAmount = (this.amount / sellRate) * buyRate;  // Conversión entre monedas
    } else {
      this.convertedAmount = null;
    }
  }

  // Obtener las claves de las monedas
  getCurrencyKeys(): string[] {
    return Object.keys(this.rates || {});
  }
}
