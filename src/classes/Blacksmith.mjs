import Character from "./Character.mjs";
import { createStore } from "solid-js/store"

/**
 * Base Class for all Blacksmiths
 * @version 0.1
 */
export default class Blacksmith{
    #blacksmithState;
    #setBlacksmithState;
    constructor(args){
        super(args);
        [this.#blacksmithState, this.#setBlacksmithState] = createStore({
            lvl: args.lvl,
            tools: args.tools,
            version: 0.1,
        });
    }

    /**
     * Returns Blacksmiths lvl
     * @returns {Number}
     */
    get lvl(){
        return this.#blacksmithState.lvl;
    }

    /**
     * Returns Blacksmiths Tool array
     * @returns {Array}
     */
    get tools(){
        return this.#blacksmithState.tools;
    }

    lvlUp(){

    }

    craftTool(){
        
    }
}