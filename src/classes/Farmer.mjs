import { createStore } from "solid-js/store"
import Character from "./Character.mjs"
import PriceArray from "./PriceArray.mjs";

/**
 * The base of all Farmer Classes
 * @version 0.3
 */
export default class Farmer extends Character{
    #farmerState;
    #setFarmerState;
        /**
     * @param {Farmer Args} Args
     */
        constructor(args){
            super(args);
            [this.#farmerState, this.#setFarmerState] = createStore({
                lvl: args.lvl,
                lvlUpPrice: args.lvlUpPrice,
                basePrice: args.basePrice,
                scaling: args.scaling,
                tools: args.tools,
                version: 1,
                PriceArray : null
            })
            console.time("price");
            this.#setFarmerState("PriceArray", new PriceArray(this))
            console.timeEnd("price");

        }

    //getters
    get scaling(){
        return this.#farmerState.scaling; 
    }

    get lvlUpPrice(){
        return this.#farmerState.lvlUpPrice;
    }
    //setters
 
    //Methods
    /**
     * Queries the LevelUpPrice
     * @param {*} ammount 
     */
    levelUpPrice(amount){
        return Number(this.#farmerState.PriceArray.queryPrice(amount));
    }
}