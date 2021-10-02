window.addEventListener('load', () => {
    let myRequest = new Request("./data.json");
    fetch(myRequest)
        .then(res => res.json()) 
        .then(function(data){
            var dataPlace = ['#work_current','#work_previous','#play_current','#play_previous','#study_current','#study_previous','#exercise_current','#exercise_previous','#social_current','#social_previous', '#self-care_current', '#self-care_previous']
            var i = 0
            for (let index = 0; index < dataPlace.length; index += 1) {
                document.querySelector(dataPlace[index]).innerHTML =data[i].timeframes.daily.current + 'hrs';
                document.querySelector(dataPlace[index + 1]).innerHTML ="Last day -" + data[i].timeframes.daily.previous + 'hrs';
                index = index + 1;
                i = i + 1;
            }
           
            document.querySelector('#daily').addEventListener('click', () => {
            i = 0;
            for (let index = 0; index < dataPlace.length; index += 1) {
                document.querySelector(dataPlace[index]).innerHTML =data[i].timeframes.daily.current + 'hrs';
                document.querySelector(dataPlace[index + 1]).innerHTML ="Last day -" + data[i].timeframes.daily.previous + 'hrs';
                index = index + 1;
                i = i + 1;
            }
            });
            document.querySelector('#weekly').addEventListener('click', () => {
                 i = 0;
                for (let index = 0; index < dataPlace.length; index += 1) {
                    document.querySelector(dataPlace[index]).innerHTML =data[i].timeframes.weekly.current + 'hrs';
                    document.querySelector(dataPlace[index + 1]).innerHTML ="Last week -" + data[i].timeframes.weekly.previous + 'hrs';
                    index = index + 1;
                    i = i + 1;
                }
            });
            document.querySelector('#monthly').addEventListener('click', () => {
                i = 0;
                for (let index = 0; index < dataPlace.length; index += 1) {
                    document.querySelector(dataPlace[index]).innerHTML =data[i].timeframes.monthly.current + 'hrs';
                    document.querySelector(dataPlace[index + 1]).innerHTML ="Last month -" + data[i].timeframes.monthly.previous + 'hrs';
                    index = index + 1;
                    i = i + 1;
                }
            });
        });
})

 