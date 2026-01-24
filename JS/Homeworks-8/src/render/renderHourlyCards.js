export function renderHourlyCards(hourlyData) {
  const containerDiv = document.getElementById("cardsContainer");
  

  if (!containerDiv) {
    console.error('ERROR: Element with id "cardsContainer" not found!');
    console.log('Available HTML:', document.body.innerHTML);
    return; 
  }
  
  containerDiv.innerHTML = "";

  for (let i = 0; i < hourlyData.time.length; i++) {
    const hour = hourlyData.time[i];

    const hourString = new Date(hour).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    const temperature = hourlyData.temperature_2m[i];
    const precipitation = hourlyData.precipitation[i];

    const cardDiv = `
            <div class="hourly-card-container">
                <div class="hourly-card-temperature">${Math.round(temperature)}°C</div>
                <div class="hourly-card-hour">${hourString}</div>
                <div class="hourly-card-precipitation">${Number(precipitation).toFixed(1)} mm</div>
            </div>
        `;

    containerDiv.innerHTML += cardDiv;
  }
}