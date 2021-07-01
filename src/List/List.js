import { makeAutoObservable } from "mobx";
import axios from "axios";

class List {
    list = [];
    
    constructor(){
        makeAutoObservable(this);
    }

    fetchList = async () => {
        try {
            const response = await axios.get("http://localhost:8000");
            this.list = response.data;
            console.log(response.data);
            
        } catch (error) {
            console.error("Something didn't work")
        }
    }
}

const list = new List();
list.fetchList();

export default list;