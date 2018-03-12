const API_URL = "http://demo-magento2.lyon.sqli.com";
const SEARCH_URI = "/rest/V1/integration/admin/token?";
export const searchService = (username, password) => new Promise((res, rej) => {
    console.log('mon pattern', `${API_URL}${SEARCH_URI}username=${username}&password=${password}`);
    //5-on fait le fetch avec la valeur de searchbar
    fetch(`${API_URL}${SEARCH_URI}username=${username}&password=${password}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
        .then(
            // 6-retour de la promise en sucess
            resp => resp.json()
        ).then(
        //7- qu'est ce qu'on fait du retour => on le place dans api data sous format json
        // apiData => console.log('exécution une fois que les données sont reçues',apiData)
        apiData => res(apiData)
    )
        .catch(
            err => console.log("oops", err)
        )
})