import { createStore } from "solid-js/store"
import Character from "./Character.mjs"
import PriceArray from "./PriceArray.mjs";

/**
 * The base of all Farmer Classes
 * @version 0.4
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
                version: 0.4,
                PriceArray : null
            });

            //create the farmers price array
            this.#setFarmerState("PriceArray", new PriceArray(this))
        }

    //getters
    get lvl(){
        return this.#farmerState.lvl;
    }
    get scaling(){
        return this.#farmerState.scaling; 
    }

    get lvlUpPrice(){
        return this.#farmerState.lvlUpPrice;
    }

    get tools(){
        return this.#farmerState.tools;
    }

    //setters
    set lvl(newLvl){
        this.#setFarmerState("lvl",newLvl);
    }

    set tools(newTools){
        this.#setFarmerState("tools",newTools);
    }

    set basePrice(newBasePrice){
        this.#setFarmerState("basePrice", newBasePrice)
    }

    //Methods
    /**
     * Queries the LevelUpPrice
     * @param {Number} ammount 
     */
    getLevelUpPrice(amount){
        return Number(this.#farmerState.PriceArray.queryPrice(amount));
    }


}