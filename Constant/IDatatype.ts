/*//////////////////////////////////////////////////////////////
                           CARD ALERT
//////////////////////////////////////////////////////////////*/

/**
 * 
 * @description: interface for alert card
 * @description: mainly used in ./helper/Card/
 * 
 */
export namespace AlertCard {

    /**
     * @description: enum to determine the card type;
     * @description: success => green; 
     * @description: failure => red;
     */
    export enum cardType {
        success,
        failure
    }

    /**
     * @description: interface for card configuration, will be used as input to initialize the card
     * 
     * @param cardType: the type of the card (success/failure) in enum
     * @param message: the message to be displayed 
     */
    export interface cardData {
        cardType: cardType;
        message: string;
    }    

    /**
     * @description: main function signature for alert card
     */
    export interface initializeCard {
        (data: cardData): void;
    }  

}