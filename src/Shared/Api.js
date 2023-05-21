import axios from 'axios';


// 싱글톤 패턴으로 axios 인스터스를 생성
export const api = axios.create({
    baseURL:"",
    headers:{
            /* */
    },
})


export const AuthApi = {
    // 회원정보 관련
    signup: (payload)=> api.post('/signup', payload),
    Login: (payload)=> api.post('/Login', payload),
    
}