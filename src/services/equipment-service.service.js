const BASIC_API = "https://localhost:44380/api/Equipment";

export const GetAllEquipment = async () => {
    try {
        return await fetch(`${BASIC_API}`)
            .then(res => res.json())
            .catch(err => console.error(err))
    }
    catch (err) {
        console.error(err);
    }
}