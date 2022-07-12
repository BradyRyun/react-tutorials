import {useEffect, useState} from "react";
import axios from "axios";
import {isLoading} from "../state/atom";
import {useRecoilState} from "recoil";

export const DynamicData = ( { loading } ) => {
    const [name, setName] = useState();
    const [,setLoading] = useRecoilState(isLoading)

    const now = new Date();
    const date = now.toLocaleString('en-UK', {
        timeZone: 'Europe/Prague',
        month: "short",
        day: "2-digit",
        year: "numeric",
        weekday: "short"
    });



    const getData = async () => {
        axios({
            method: 'get',
            url: 'https://nameday.abalin.net/api/V1/today',
            params: {
                country: "cz",
            }
        })
            .then(response => {
                console.log(response.data)
                setName(response.data.nameday.cz)
                setLoading(false);
            })
            .catch(error => console.error(error))

    }
    useEffect(() => {
        getData()
    }, [loading])
        return (
            <div>
            {loading &&
            <div>
                <div>
                    Today is: <b>{date}</b>
                </div>
                <div>
                    Looking for who's name day it is...
                </div>
            </div>
            }
            {!loading && <div>
                <div>
                    Today is: <b>{date}</b>
                </div>
                <div>
                    Who's name day is it today?
                </div>
                <div>
                    <b>{name}</b>
                </div>
            </div>}
            </div>
        )
}