let myRequest = new Request("./data.json");


fetch(myRequest)
    .then(res => res.json()) 
    .then(function(data){
        document.querySelector('#work_current').innerHTML =data[0].timeframes.daily.current + 'hrs';
        document.querySelector('#work_previous').innerHTML ='Last day -'+ data[0].timeframes.daily.previous + 'hrs';
        document.querySelector('#play_current').innerHTML =data[1].timeframes.daily.current + 'hrs';
        document.querySelector('#play_previous').innerHTML ='Last day -'+ data[1].timeframes.daily.previous + 'hrs';
        document.querySelector('#study_current').innerHTML =data[2].timeframes.daily.current + 'hrs';
        document.querySelector('#study_previous').innerHTML ='Last day -'+ data[2].timeframes.daily.previous + 'hrs';
        document.querySelector('#exercise_current').innerHTML =data[3].timeframes.daily.current + 'hrs';
        document.querySelector('#exercise_previous').innerHTML ='Last day -'+ data[3].timeframes.daily.previous + 'hrs';
        document.querySelector('#social_current').innerHTML =data[4].timeframes.daily.current + 'hrs';
        document.querySelector('#social_previous').innerHTML ='Last day -'+ data[4].timeframes.daily.previous + 'hrs';
        document.querySelector('#self-care_current').innerHTML =data[5].timeframes.daily.current + 'hrs';
        document.querySelector('#self-care_previous').innerHTML ='Last day -'+ data[5].timeframes.daily.previous + 'hrs';
        
        document.querySelector('#daily').addEventListener('click', () => {
            document.querySelector('#work_current').innerHTML = data[0].timeframes.daily.current + 'hrs';
            document.querySelector('#work_previous').innerHTML ='Last day -' + data[0].timeframes.daily.previous + 'hrs';
            document.querySelector('#play_current').innerHTML = data[1].timeframes.daily.current + 'hrs';
            document.querySelector('#play_previous').innerHTML ='Last day -' + data[1].timeframes.daily.previous + 'hrs';
            document.querySelector('#study_current').innerHTML = data[2].timeframes.daily.current + 'hrs';
            document.querySelector('#study_previous').innerHTML ='Last day -' + data[2].timeframes.daily.previous + 'hrs';
            document.querySelector('#exercise_current').innerHTML = data[3].timeframes.daily.current + 'hrs';
            document.querySelector('#exercise_previous').innerHTML ='Last day -' + data[3].timeframes.daily.previous + 'hrs';
            document.querySelector('#social_current').innerHTML = data[4].timeframes.daily.current + 'hrs';
            document.querySelector('#social_previous').innerHTML ='Last day -' + data[4].timeframes.daily.previous + 'hrs';
            document.querySelector('#self-care_current').innerHTML = data[5].timeframes.daily.current + 'hrs';
            document.querySelector('#self-care_previous').innerHTML ='Last day -' + data[5].timeframes.daily.previous + 'hrs';

        });
        document.querySelector('#weekly').addEventListener('click', () => {
            document.querySelector('#work_current').innerHTML = data[0].timeframes.weekly.current + 'hrs';
            document.querySelector('#work_previous').innerHTML ='Last week -' + data[0].timeframes.weekly.previous + 'hrs';
            document.querySelector('#play_current').innerHTML = data[1].timeframes.weekly.current + 'hrs';
            document.querySelector('#play_previous').innerHTML ='Last week -' + data[1].timeframes.weekly.previous + 'hrs';
            document.querySelector('#study_current').innerHTML = data[2].timeframes.weekly.current + 'hrs';
            document.querySelector('#study_previous').innerHTML ='Last week -' + data[2].timeframes.weekly.previous + 'hrs';
            document.querySelector('#exercise_current').innerHTML = data[3].timeframes.weekly.current + 'hrs';
            document.querySelector('#exercise_previous').innerHTML ='Last week -' + data[3].timeframes.weekly.previous + 'hrs';
            document.querySelector('#social_current').innerHTML = data[4].timeframes.weekly.current + 'hrs';
            document.querySelector('#social_previous').innerHTML ='Last week -' + data[4].timeframes.weekly.previous + 'hrs';
            document.querySelector('#self-care_current').innerHTML = data[5].timeframes.weekly.current + 'hrs';
            document.querySelector('#self-care_previous').innerHTML ='Last week -' + data[5].timeframes.weekly.previous + 'hrs';

        });
        document.querySelector('#monthly').addEventListener('click', () => {
            document.querySelector('#work_current').innerHTML = data[0].timeframes.monthly.current + 'hrs';
            document.querySelector('#work_previous').innerHTML = 'Last month -' + data[0].timeframes.monthly.previous + 'hrs';
            document.querySelector('#play_current').innerHTML = data[1].timeframes.monthly.current + 'hrs';
            document.querySelector('#play_previous').innerHTML = 'Last month -' + data[1].timeframes.monthly.previous + 'hrs';
            document.querySelector('#study_current').innerHTML = data[2].timeframes.monthly.current + 'hrs';
            document.querySelector('#study_previous').innerHTML = 'Last month -' + data[2].timeframes.monthly.previous + 'hrs';
            document.querySelector('#exercise_current').innerHTML = data[3].timeframes.monthly.current + 'hrs';
            document.querySelector('#exercise_previous').innerHTML = 'Last month -' + data[3].timeframes.monthly.previous + 'hrs';
            document.querySelector('#social_current').innerHTML = data[4].timeframes.monthly.current + 'hrs';
            document.querySelector('#social_previous').innerHTML = 'Last month -' + data[4].timeframes.monthly.previous + 'hrs';
            document.querySelector('#self-care_current').innerHTML = data[5].timeframes.monthly.current + 'hrs';
            document.querySelector('#self-care_previous').innerHTML = 'Last month -' + data[5].timeframes.monthly.previous + 'hrs';

        });  
    });
 