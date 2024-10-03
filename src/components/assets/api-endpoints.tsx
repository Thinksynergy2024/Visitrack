//------------------------ Backend APIs ----------------------//
export const API_URL = {


    /***************** AUTHENTICATION APIS **********************/
    LOGIN: 'https://visitrack.thinksynergyltd.com/api1/rest/login.php',
    

    /***************** TRIPS APIS **********************/
    FETCH_TRIPS: 'https://visitrack.thinksynergyltd.com/api1/rest/get_trips.php',
    ADD_TRIP: 'https://visitrack.thinksynergyltd.com/api1/rest/create_trip.php',
    SEARCH_VEHICLE: 'https://visitrack.thinksynergyltd.com/api1/rest/getvehicle.php',


    /***************** VISITORS APIS **********************/
    FETCH_VISITS: 'https://visitrack.thinksynergyltd.com/api1/rest/get_visitors.php',
    ADD_APPOINTMENT: 'https://visitrack.thinksynergyltd.com/api1/rest/create_visit.php'
   

}


//------------------------ Application APIs ----------------------//
export const APP_API_URL = {

    /***************** AUTH **********************/
    LOGIN: '/api/login',

    /***************** TRIPS **********************/
    FETCH_TRIPS: '/api/trips',
    ADD_TRIP: '/api/trips/add-trip',
    SEARCH_VEHICLE: '/api/trips/vehicle',


    /***************** VISITORS **********************/
    FETCH_VISITS: '/api/visitors',
    ADD_APPOINTMENT: '/api/visitors/add-appointment',
   
}

export const API_METHODS = {
    GET:'GET',
    POST: 'POST',
    PATCH: 'PATCH',
    PUT: 'PUT',
    DELETE: 'DELETE'
}
