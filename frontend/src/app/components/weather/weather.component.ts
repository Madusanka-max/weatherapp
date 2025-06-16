import { Component, OnInit } from '@angular/core';
import { WeatherService, WeatherData } from '../../services/weather.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  weatherForm: FormGroup;
  weatherData: WeatherData | null = null;
  loading = false;
  error: string | null = null;

  constructor(
    private weatherService: WeatherService,
    private fb: FormBuilder
  ) {
    this.weatherForm = this.fb.group({
      city: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.weatherForm.valid) {
      this.loading = true;
      this.error = null;
      const city = this.weatherForm.get('city')?.value;

      this.weatherService.getWeather(city).subscribe({
        next: (data) => {
          this.weatherData = data;
          this.loading = false;
        },
        error: (err) => {
          this.error = err.error?.error || 'Failed to fetch weather data';
          this.loading = false;
        }
      });
    }
  }
} 