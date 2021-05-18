let uniToggle = document.getElementById('uni_toggle')
let cityToggle = document.getElementById('city_toggle')
let toggleThree = document.getElementById('toggle_three')

// mob view id 

let uniToggleMob = document.getElementById('uni_toggle_mob')
let cityToggleMob = document.getElementById('city_toggle_mob')
let toggleThreeMob = document.getElementById('toggle_three_mob')

// filter function for desktop view 

// filter one function 

const showUniList = () =>{
    // console.log(e.classList.contains('close'))
    if(!uniToggle.classList.contains('close')){
        uniToggle.classList.add('close')
        // console.log('run')
    }else{
        uniToggle.classList.remove('close')
    }
    // console.log(uniTogg.contains)
}


// filter two function 

const showUniListTwo = () =>{
    if(!cityToggle.classList.contains('close')){
        cityToggle.classList.add('close')
    }else{
        cityToggle.classList.remove('close')
    }
}

// filter three function 

const showUniListThree = () =>{
    if(!toggleThree.classList.contains('close')){
        toggleThree.classList.add('close')
    }else{
        toggleThree.classList.remove('close')
    }
}

// filter functions for mob view 

const showUniListMob = () =>{
    // console.log(e.classList.contains('close'))
    if(!uniToggleMob.classList.contains('close')){
        uniToggleMob.classList.add('close')
        // console.log('run')
    }else{
        uniToggleMob.classList.remove('close')
    }
    // console.log(uniTogg.contains)
}


// filter two function 

const showUniListTwoMob = () =>{
    if(!cityToggleMob.classList.contains('close')){
        cityToggleMob.classList.add('close')
    }else{
        cityToggleMob.classList.remove('close')
    }
}

// filter three function 

const showUniListThreeMob = () =>{
    if(!toggleThreeMob.classList.contains('close')){
        toggleThreeMob.classList.add('close')
    }else{
        toggleThreeMob.classList.remove('close')
    }
}