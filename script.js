const endpoint = `https://flynn.boolean.careers/exercises/api/random/mail`

const app = Vue.createApp({
    data(){
        return{
            emails:[],
        }
    },
    created(){
        axios.get(`${endpoint}`)
        .then((res) => {
            const responseEmails = res.data.response;
            this.emails.push(responseEmails);
        })
    },
})

app.mount(`#root`);