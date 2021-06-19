const apiUrl = 'http://localhost:3000/'

const getData = async(data) => {
    try {
        const res = await fetch(apiUrl, {
            method: "GET",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (res.ok) {
            return await res.json()
        }
    }
    catch (err){
        return err
    }
}

const postData = async(data) => {
    try {
        const res = await fetch(apiUrl, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (res.ok) {
            return res.json
        }
    }
    catch (err) {
        return err
    }
}

const deleteData = async(id) => {
    try {
        const res = await fetch( apiUrl + id, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
        }
        );
        if (res.ok) {
            return await res.json();
        }
    } catch (error) {
        console.log(error);
    }
};



