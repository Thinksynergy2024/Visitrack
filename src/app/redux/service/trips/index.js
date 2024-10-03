import UseAxios from "@/components/assets/hooks/use-axios";
import { APP_API_URL } from "../../../../components/assets/api-endpoints";

export const fetchTrips = (type) =>{
    const axiosInstance = UseAxios();
    return new Promise((resolve,reject) =>{
        axiosInstance.post(`${APP_API_URL.FETCH_TRIPS}`,{type})
            .then((res) =>{
                resolve(res.data)
            })
            .catch((err) =>{
                reject(err.message)
            })
    })
}

export const addTrip = (accountid,drivername,turnboy,exitmileage,destination,exitnotes,sealnumber,noofboxes) =>{
    const axiosInstance = UseAxios();
    return new Promise((resolve,reject) =>{
        axiosInstance.post(`${APP_API_URL.ADD_TRIP}`,accountid,drivername,turnboy,exitmileage,destination,exitnotes,sealnumber,noofboxes)
            .then((res) =>{
                resolve(res.data)
            })
            .catch((err) =>{
                reject(err.message)
            })
    })
}

export const searchVehicle = (regno,type) =>{
    const axiosInstance = UseAxios();
    return new Promise((resolve,reject) =>{
        axiosInstance.post(`${APP_API_URL.SEARCH_VEHICLE}`,regno,type)
            .then((res) =>{
                resolve(res.data)
            })
            .catch((err) =>{
                reject(err.message)
            })
    })
}
