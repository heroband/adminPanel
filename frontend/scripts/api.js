async function apiRequest(url, method = "GET", data = null) {
    try{
        const options = {
            method,
            headers: {
                "Content-Type": "application/json"
            }
        };

        if (data) {
            options.body = JSON.stringify(data);
        }

        const response = await fetch(url, options);
        const responseData = await response.json();
        console.log("Ответ API:", responseData);

        if (!response.ok){
            const errorMessage = Array.isArray(responseData.errors) ? responseData.errors.join(", ") 
                                                                    : responseData.errors 
                                                                    || "Ошибка запроса";

            throw new Error(errorMessage);
        }

        return responseData;
    } catch (err) {
        console.error("Ошибка API:", err);
        throw err;
    }
}