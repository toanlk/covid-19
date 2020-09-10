import axios from 'axios';

const url = 'https://api.covid19api.com';

export const fetchData = async (country) => {
    try {
        const { data } = await axios.get(`${url}/summary`);

        let customData;
        if (country) {
            let countryData = data['Countries'].find(item => item.Slug === country);
            customData = {
                confirmed: countryData.TotalConfirmed,
                recovered: countryData.TotalDeaths,
                deaths: countryData.TotalRecovered,
                date: data.Date
            }
        } else {
            customData = {
                confirmed: data.Global.TotalConfirmed,
                recovered: data.Global.TotalDeaths,
                deaths: data.Global.TotalRecovered,
                date: data.Date
            }
        }

        return customData;
    } catch (error) {
        return error;
    }
}

export const fetchCountries = async () => {
    try {
        const { data } = await axios.get(`${url}/countries`);
        // console.log(data);
        return data;
    } catch (error) {
        return error;
    }
}