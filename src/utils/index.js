export const getDayName = (dayNumber) => {
    switch (dayNumber) {
        case 0: return 'Sunday'
        case 1: return 'Monday'
        case 2: return 'Tuesday'
        case 3: return 'Wednesday'
        case 4: return 'Thursday'
        case 5: return 'Friday'
        case 6: return 'Saturday'
        default: return null
    }
}

export const useFetch = async (url) => {

    let response = null;
    let error = null;
    try {
        const res = await fetch(url);
        const json = await res.json();
        response = json

    } catch (err) {
        error = err
    }


    return { response, error };
};

