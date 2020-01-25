// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const tabLocation = document.querySelector('.topics')

const tabsMaker = (data)=>{
    //Elements
    const tab = document.createElement('div');

    //Classes
    tab.classList.add('tab');

    //Content
    tab.textContent = data;
    
return tab;
}

axios
    .get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        console.log(response)
        response.data.topics.forEach(name => {
            const tabs = tabsMaker(name)
            tabLocation.appendChild(tabs)
        })
    })
    .catch(res =>{
        console.log('error!!')
    })