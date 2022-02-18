const BASIC_API = "https://localhost:44380/api/Shoes";

export const GetAllShoes = async () => {
    try {
        return await fetch(`${BASIC_API}`)
            .then(res => res.json())
            .catch(err => console.error(err))
    }
    catch (err) {
        console.log(err);
    }
}

export const PostShoe = async (shoe) => {
    const options = {
        method: "POST",
        body: JSON.stringify({ ...shoe }),
        headers: { 'Content-Type': 'application/json' }
    }
    try {
        return await fetch(`${BASIC_API}`, options)
            .then((res) => res.json())
            .then((res) => console.log(res))
    }
    catch (err) {
        console.log(err);
    }
}

// headers: { 'Content-Type': 'application/json' }
export const DeleteShoe = async (id) => {
    const options = {
        method: "DELETE",
    };
    try {
        return await fetch(`${BASIC_API}/${id}`, options)
            .then((res) => res.json())
            .then((res) => console.log(res))
    }
    catch (err) {
        console.log(err);
    }
}