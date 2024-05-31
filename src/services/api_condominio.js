const baseUrl = "https://api.b7web.com.br/devcond/api/admin/auth";

const request = async(method,endpoint,params,token = null)=>{
    method = method.toLowerCase();
    let fullUrl = `${baseUrl}${endpoint}`;
    let body = null;
    switch (method) {
        case 'get':
            let queryString = new URLSearchParams(params).toString();
            fullUrl +=`?${queryString}`;
            break;
            case 'post':
            case 'put':
            case 'delete':
                body = JSON.stringify(params);
    }
    let headers = {'Content-Type':'application/json'};
    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }
    let req = await fetch(fullUrl,{method,body});
    let json = await req.json();
    return json;
}

export default ()=>{
    return{
        getToken:()=>{
            return localStorage.getItem('token');
        },
        validateToken:async()=>{
            let token = localStorage.getItem('token');
            let json = await request('post','/auth/validate',{},token);
            return json;
        },

        login: async (email, password) => {
            try {
                const json = await request('post', '/auth', { email, password });
                return json;
            } catch (error) {
                console.error('Erro ao fazer login:', error.message);
                return { error: 'Erro ao fazer login' };
            }
        }
    };

}