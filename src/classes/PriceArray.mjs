/**
 * A special array that holds the prices of upgrades
 * @constructor
 * @version 1.0
 */
export default class PriceArray{
    #size;
    #owner;
    #content;

    static DEFAULT_SIZE = Number(100000);

    constructor(owner){
        this.#owner = owner;
        this.#size = PriceArray.DEFAULT_SIZE;
        this.#content=this.#constructArray();
    }


    /**
     * Gets the size
     */
    get size(){
        return this.#size;
    }

    get content(){
        return this.#content;
    }
    
    /**
     * finds the price of one or more upgrades
     * @param {Number} amount 
     * @returns {Number}
     */
    queryPrice(amount=1){
        return this.#content.slice(0,amount).reduce((a,b) => a+b);
    }

    findNewPriceAfterPurchase(amount=1){
        return this.#content[amount];
    }

    /**
     * Note on price Scaling: A scaling modifier is a bigInt from 1 to 10000 and opperates as a numerator on a fraction x/10000;
     * Example of modifier: 700n -> 0.07 or 7%
     * @param {Number} index 
     * @param {Object} scaling object
     * @returns {Number} modifier between 0 and 1 exclusive
     */
    static #readScaling(index, scalingObj){
        //initial modifier
        let modifier = 0n;
        const constantModifier = 1n;

        //run through the scaling object to find the right modifier
        for(const entry of scalingObj){
            if(entry.min >= index) return modifier;
            modifier = entry.modifier*constantModifier;
        }  
        //if it reaches its final tier then return that
        return modifier;
    }
    
    /**
     * @returns {Array}
     */
    #constructArray(newSize = PriceArray.DEFAULT_SIZE){
        this.#size = newSize;

        //create Array
        const newArray = new Array(this.#size);
        newArray[0] = this.#owner.lvlUpPrice;

        //loops through the array filling it out
        for(let i = 1; i<this.#size; ++i){
            //find the scaling modifier
            const scalingModifier = PriceArray.#readScaling(i, this.#owner.scaling);
            //set the index's value
            newArray[i] = (newArray[i-1] * (scalingModifier) / 10000n) ? newArray[i-1] + (newArray[i-1] * (scalingModifier) / 10000n) : newArray[i-1]+1n;
        }
        return newArray;
    };
}
