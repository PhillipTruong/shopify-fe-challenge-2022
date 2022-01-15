
export const formatNasaApiDate = (date) => {
    return date.toISOString().split('T')[0]
}