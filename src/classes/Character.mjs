import { createStore } from "solid-js/store"
/**
 * A path to an image file
 * @typedef {String} Image
 */

/**
 * Args for character construction
 * @typedef {Character Args}
 * @property {Image} img - The character's image URL
 * @property {String} name - The character's full name
 * @property {String} nickname - The character's nickname
 * @property {String} bio - The character's biography
 * @property {Boolean} locked - Wether Character is locked or not
 */

/**
 * The base of all Character Classes
 * @version 1.01
 */
export default class Character{
    //stores the state of the object
    #characterState;
    #setCharacterState

    /**
     * @param {Character Args} Args
     */
    constructor(args){
        [this.#characterState, this.#setCharacterState] = createStore({
            img:args.img,
            name:args.name,
            nickname:args.nickname,
            version:1,
            bio:args.bio,
            locked:args.locked
        })
    }

    //getters
    /**
     * Returns Image URL
     * @returns {img}
     */
    get img(){
        return this.#characterState.img;
    }

    /**
     * Returns Characters Full Name
     * @returns {String}
     */
    get name(){
        return this.#characterState.name;
    }
    /**
     * Returns Characters Nickname
     * @returns {String}
     */
    get nickname(){
        return this.#characterState.nickname;
    }

    /**
     * Returns Version number
     * @returns {Number}
     */
    get version(){
        return this.#characterState.version;
    }

        /**
     * Returns Characters biography
     * @returns {String}
     */
    get bio(){
        return this.#characterState.bio;
    }

    get locked(){
        return this.#characterState.locked;
    }

    //setters
    set img(newImg){
        this.#setCharacterState("img",newImg);
    }

    //methods
    /**
     * Unlocks the Character
     */
    unlock(){
        this.#setCharacterState("locked", false);
    }

    /**
     * Locks the Character
     */
    lock(){
        this.#setCharacterState("locked",true);
    }
}