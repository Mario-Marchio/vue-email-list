const endpoint = `https://flynn.boolean.careers/exercises/api/random/mail`

const app = Vue.createApp({
    data(){
        return{
            emails:[],
        }
    },
    created(){
        for(let i = 0; i < 10 ; i++){          
            axios.get(`${endpoint}`)
            .then((res) => {
                const responseEmails = res.data.response;
                this.emails.push(responseEmails);
            })
        }
    },
})

app.mount(`#root`);