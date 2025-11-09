// @ts-check
/** @import  {FetchReadyEvent as IFetchReadyEvent} from './types' */

/**
 * @implements {IFetchReadyEvent}
 */
export class FetchReadyEvent extends Event {
    static eventName = 'fetch-ready';

    /**
     * @type {string}
     */
    url;

    /**
     * @type {RequestInit}
     */
    options;

    /**
     * 
     * @param {string} url 
     * @param {RequestInit} options 
     */
    constructor(url, options){
        super(FetchReadyEvent.eventName);
        this.url = url;
        this.options = options;
    }
}