import {  defineStore } from "pinia";

export const useDarkMode=defineStore('darkmode',{
    state:()=>{
        return{
            darkmode: localStorage.getItem('darkmode')==='true' ||false
        }
    },
    actions:{
        changeMode(){
            console.log(this.darkmode);
            
           this.darkmode=!this.darkmode
           console.log(this.darkmode);

           localStorage.setItem('darkmode',this.darkmode.toString());
           const bodyClass= window.document.body.classList

           this.darkmode==false?bodyClass.remove('dark'):bodyClass.add('dark');

        }
    },
    getters:{
        isDarkModeEnabled(state){
            return state.darkmode;
        }
    }
});