export class Weather{

    constructor(city, countryCode){
        this.apiKey = 'd1be41e7067dfe9207e38334255e4e97';
        this.city = city;
        this.countryCode = countryCode;
    
    }

    async getWeather(){
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apiKey}`;
        const data = await fetch(URL);
        return data;

    }
}