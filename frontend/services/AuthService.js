class AuthService {
    static baseUrl = "http://localhost:5239/api/Account";

    static async request(endpoint, method, data = null){
        const options = {
            method,
            headers: {
                "Content-Type": "application/json"
            }
        };

        if (data) {
            options.body = JSON.stringify(data);
        }

        try{
            const response = await fetch(`${this.baseUrl}/${endpoint}`, options);
            const responseData = await response.json();
            console.log("API Response:", responseData);

            if (!response.ok) {
                const errorMessage = Array.isArray(responseData.errors) 
                    ? responseData.errors.join(", ") 
                    : responseData.errors || "Request error";

                throw new Error(errorMessage);
            }
            return responseData;

        } catch (error) {
            console.error("AuthService Error:", error);
            throw error;
        }
    }

    static async login(data) {
        return await this.request("Login", "POST", data);
    }

    static async register(data) {
        return await this.request("Register", "POST", data);
    }
}

export default AuthService;