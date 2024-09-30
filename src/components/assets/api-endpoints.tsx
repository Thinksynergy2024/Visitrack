//------------------------ Backend APIs ----------------------//
export const API_URL = {


    /***************** AUTHENTICATION APIS **********************/
    LOGIN: 'https://visitrack.thinksynergyltd.com/api1/rest/login.php',
    

    /***************** TRIPS APIS **********************/
    FETCH_TRIPS: 'https://visitrack.thinksynergyltd.com/api1/rest/get_trips.php'

   

}


//------------------------ Application APIs ----------------------//
export const APP_API_URL = {

    /***************** AUTH **********************/
    LOGIN: '/api/login',

    /***************** TRIPS **********************/
    FETCH_TRIPS: '/api/trips',
   
}

export const API_METHODS = {
    GET:'GET',
    POST: 'POST',
    PATCH: 'PATCH',
    PUT: 'PUT',
    DELETE: 'DELETE'
}
