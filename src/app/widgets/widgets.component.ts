import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css'],
})
export class WidgetsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let akey = '1c6dd959bb86f56d968c75461d316e5ccb57c5c6';
    const http1 = new XMLHttpRequest();
    let url1 = `https://api.nomics.com/v1/currencies/ticker?key=${akey}&ids=BTC,ETH&interval=1d,30d&convert=USD&per-page=100&page=1`;
    http1.open('GET', url1);
    http1.send();
    http1.onload = function () {
      const response = JSON.parse(http1.response);
      const valute1 = document.querySelector('.valute1');
      const valute2 = document.querySelector('.valute2');
      const valute3 = document.querySelector('.valute3');
      const valute4 = document.querySelector('.valute4');
      const span1 = document.createElement('span');
      const span2 = document.createElement('span');
      const span3 = document.createElement('span');
      const span4 = document.createElement('span');
      span1.style.marginLeft = '20px';
      span2.style.marginLeft = '20px';
      span3.style.marginLeft = '60px';
      span4.style.marginLeft = '60px';
      span1.innerHTML = response[0].price.slice(0, -6) + '$';
      span2.innerHTML = response[1].price.slice(0, -6) + '$';
      const price_change = String(
        response[0]['1d'].price_change.slice(0, -6) + '$'
      );
      if (price_change > '0') {
        span3.innerHTML =
          response[0]['1d'].price_change.slice(0, -6) + '             $';
        span4.innerHTML =
          response[1]['1d'].price_change.slice(0, -6) + '             $';
        span3.style.color = '#18E307';
        span4.style.color = '#18E307';
      } else {
        span3.innerHTML =
          '-' + response[0]['1d'].price_change.slice(0, -6) + '             $';
        span4.innerHTML =
          '-' + response[1]['1d'].price_change.slice(0, -6) + '             $';
        span3.style.color = '#FF4949';
        span4.style.color = '#FF4949';
      }
      valute1?.appendChild(span1);
      valute2?.appendChild(span2);
      valute3?.appendChild(span3);
      valute4?.appendChild(span4);
    };

    let apiKey = 'fde03febe6e411c4ef90f7e73f943c0b';
    let city = 'Махачкала';
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=${apiKey}`;

    const http = new XMLHttpRequest();
    http.open('GET', url);
    http.send();
    http.onload = function () {
      const response = JSON.parse(http.response);
      const temp = String(Math.round(response.main.temp - 273));
      console.log(response.weather);
      const city = document.querySelector('.city');
      const icon = document.querySelector('.icon');
      const temp1 = document.querySelector('.temp');
      const span = document.createElement('span');
      const span1 = document.createElement('span');
      const img = document.createElement('img');
      span.innerHTML = response.name;
      img.setAttribute(
        'src',
        'http://openweathermap.org/img/w/' + response.weather[0].icon + '.png'
      );
      img.setAttribute('alt', response.weather[0].description);
      img.setAttribute('width', '100px');
      img.setAttribute('height', '100px');
      city?.appendChild(span);
      icon?.appendChild(img);
      if (temp > '0') {
        span1.innerHTML = '+' + temp + '°C';
        temp1?.appendChild(span1);
      } else {
        span1.innerHTML = '-' + temp + '°C';
      }
    };

    let now = new Date().toLocaleDateString();
    const data = document.querySelector('.data1');
    let now1 = new Date().toLocaleTimeString().slice(0, -3);
    const data2 = document.querySelector('.time');
    const data3 = document.querySelector('.day');
    let days = [
      'Воскресенье',
      'Понедельник',
      'Вторник',
      'Среда',
      'Четверг',
      'Пятница',
      'Суббота',
    ];
    let now2 = new Date();
    const span1 = document.createElement('span');
    const span2 = document.createElement('span');
    const span3 = document.createElement('span');
    span1.innerHTML = now;
    data?.appendChild(span1);
    span2.innerHTML = now1;
    data2?.appendChild(span2);
    span3.innerHTML = days[now2.getDay()];
    data3?.appendChild(span3);
    // aas.textContent = now;
  }
}
