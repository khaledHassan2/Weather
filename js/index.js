let inputSearsh = document.querySelector('.searsh');
inputSearsh.addEventListener('input',function(eventinfo){
    searsh(inputSearsh.value);
})
async function searsh(cuntry){
    let wther = await fetch (`https://api.weatherapi.com/v1/forecast.json?key=65843e65aa804f91aee144543242606&q=${cuntry}&days=3`);
    let data = await wther.json();
    console.log(data);
    let date= new Date();
    let dateNextOne= new Date(24 * 3600 * 1000);
    let dateNextTow= new Date(48 * 3600 * 1000);
    let day=date.getDate();
    let dayStrNaw =date.toLocaleDateString('en',{weekday:'long'});
    let dayStrOne =dateNextOne.toLocaleDateString('en',{weekday:'long'});
    let dayStrTow =dateNextTow.toLocaleDateString('en',{weekday:'long'});
    let month =date.toLocaleDateString('en',{month:'long'});
    let display =`          <div class="col-lg-4">
              <div class="card card-one">
                <div class="card-header d-flex justify-content-between">
          
                  <h2 class="h6 card-title ">${dayStrNaw}</h2>
                  <h2 class="h6 card-title ">${day}${month}</h2>
                  
                </div>
                <div class="card-body pe-4 py-4">
                  <h2 class="h5 card-title ">${data.location.name}</h2>
                  <h2 class="fa-6x">${data.current.temp_c}oC</h2>
                  <div>
                    <img src="https:${data.current.condition.icon}" alt="">
                  </div>
                  <label class="text-info mb-3">${data.current.condition.text}</label>
                  <div class="text-white-50">
                    <span class="me-2"><img class="me-2" src="imges/icon-umberella.png" alt="">20%</span>
                    <span class="me-2"><img class="me-2" src="imges/icon-wind.png" alt="">18km/h</span>
                    <span class="me-2"><img class="me-2" src="imges/icon-compass.png" alt="">East</span>
                  </div>

                </div>
              </div>
          </div>
          <div class="col-lg-4">
              <div class="card card-tow text-center">
                <div class="card-header "><h2 class="h6 card-title ">${dayStrOne}</h2></div>
                <div class="card-body pe-4 py-4">
                  
                  <div class="mt-4">
                    <img src="https:${data.forecast.forecastday[1].day.condition.icon}" alt="">
                  </div>
                  <h2 class="h4 mt-4">${data.forecast.forecastday[1].day.maxtemp_c}oC</h2>
                  <h3 class="h6">${data.forecast.forecastday[1].day.mintemp_c}oC</h2>
                  <label class="text-info mb-3">${data.forecast.forecastday[1].day.condition.text}</label>
                </div>
              </div>
          </div>
          <div class="col-lg-4">
              <div class="card card-three text-center">
                <div class="card-header "><h2 class="h6 card-title ">${dayStrTow}</h2></div>
                <div class="card-body pe-4 py-4">
                  <div class="mt-4">
                    <img src="https:${data.forecast.forecastday[2].day.condition.icon}" alt="">
                  </div>
                  
                  <h2 class="h4 mt-4">${data.forecast.forecastday[2].day.maxtemp_c}oC</h2>
                  <h3 class="h6">${data.forecast.forecastday[2].day.mintemp_c}oC</h3>
                  <label class="text-info mb-3">${data.forecast.forecastday[2].day.condition.text}</label>
                </div>
              </div>
          </div>`
          document.querySelector('.row').innerHTML=display;
}
searsh('cairo');
