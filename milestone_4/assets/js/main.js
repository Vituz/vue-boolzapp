const app = new Vue({

    el: '#app',

    data:{
        contactCounter: 0,
        
        message:'',

        showDate:'',

        // lastAccess: 'online',

        searchContact: null,

        messageCounter: 0,

        // messageMenu: true,

        user:{
            name: 'Vituz',
            avatar: '_io',
        },

        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                contatcStatus: 'prova',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent',
                        menu: true,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent',
                        menu: true,
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received',
                        menu: true,
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent',
                        menu: true,
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        menu: true,
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent',
                        menu: true,
                    }
                ],
            },
        
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received',
                        menu: true,
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        menu: true,
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received',
                        menu: true,
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',
                        menu: true,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                        menu: true,
                    }
                ],
            },
        ],
    },

    methods:{
        selectContact(index){
            this.contactCounter = index;
            console.log(this.contactCounter);
        },

        currentDate(){
            let curDate = new Date();
            this.showDate = curDate.toLocaleString();
            console.log(this.showDate);
        },

        sendMessage(){
            this.currentDate();
            this.contacts[this.contactCounter].messages.push({
                date: this.showDate,
                text: this.message,
                status: 'sent',
                menu: true,
            });

            setTimeout(()=>{
                this.currentDate();
                this.sendResponse();
            }, 2000);
           
            this.message = "";

        },

        deleteMessage(index){
            this.contacts[this.contactCounter]
            .messages.splice(index, 1);
        },

        sendResponse(){

            this.contacts[this.contactCounter].messages.push({
                date: this.showDate,
                text: 'Ok!',
                status: 'received',
                menu: true,
            });

            // this.lastAccess = this.showDate;
            // console.log("ultimo accesso" + this.lastAccess);
        },

        findContacts(nomeContatto){
            return nomeContatto = this.searchContact;
        }
    },

    mounted(){
        this.currentDate();
        
        console.log(this.searchContact);
    }, 


    computed:{

        newContacts(){
            if(this.searchContact){
                return this.contacts.filter(cName => {
                    return this.searchContact.toLowerCase().split("").every(v => cName.name.toLowerCase().includes(v));
                });
            } else {
                return this.contacts;
            }
        }

    },

});