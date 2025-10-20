import { getHTMLId, getHTMLClass } from "../Constant/Helper.js";
import { AlertCard } from "../Constant/IDatatype.js";

/**
 * @author yum-cutty https://github.com/yum-cutty
 * @version 1.0.0
 * @description: a self-made simple alert card, for pure HTML/CSS/JS
 * 
 * note that none of the codebase in this project, 
 * including the code in this file, 
 * is not audited for security, 
 * use it at your own risk 
 * :D
 * 
 */

/**
 * 
 * 1. import 2 css into the html file:
 *    - <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">
 *    - `Card.css` file
 * 
 * 2. then add the following HTML code:
 * 
 * ```
 * <div class="alert__container" id="alert__container"></div>
 * ```
 * 
 * 3. to initialize the Card, simply call `alertCard` function
 * 
 * 
 * 
 */

/*//////////////////////////////////////////////////////////////
                        ADD INLINE HTML
//////////////////////////////////////////////////////////////*/

let isInitialized: boolean = false;

/**
 * @description little function to add the Card HTML
 * @returns void
 * 
 * 
 */
function addHTML(): void {
    if (isInitialized) return;

    const container: HTMLElement | null = getHTMLId("alert__container");
    if (container != null) {
        container.innerHTML = `
            <div class="alert__box hidden">
                <div class="alert success hidden">
                    <i class="ri-checkbox-circle-line"></i>
                    <span id="alert__success__message"></span>
                </div>
                <div class="alert fail hidden">
                    <i class="ri-close-circle-fill"></i>
                    <span id="alert__fail__message"></span>
                </div>
            </div>
        `;
    }

    isInitialized = true;
}

/*//////////////////////////////////////////////////////////////
                           MAIN FUNC
//////////////////////////////////////////////////////////////*/

/**
 * 
 * @see {@link AlertCard.initializeCard}
 * @param data the data about the card configuration
 * 
 * 
 */
const alertCard: AlertCard.initializeCard = (data: AlertCard.cardData) => {
    addHTML();
    
    // get both <span> id
    const succeed: HTMLElement | null = getHTMLId("alert__success__message");
    const failed: HTMLElement | null = getHTMLId("alert__fail__message");

    // get those 3 id for CSS design
    const container: HTMLElement | null = getHTMLClass(".alert__box");
    const success: HTMLElement | null = getHTMLClass(".alert.success");
    const fail: HTMLElement | null = getHTMLClass(".alert.fail");

    // set root variable color for card bottom background and text content
    const green: string = "green";
    const red: string = "red";

    if (succeed != null && failed != null && container != null && success != null && fail != null) {
        const isSuccessMessage: boolean = data.cardType == AlertCard.cardType.success;

        // just in-case .... all CSS id should be hidden at first
        container.classList.add("hidden");
        success.classList.add("hidden");
        fail.classList.add("hidden");

        // set <span> message
        (isSuccessMessage ? succeed : failed).textContent = data.message;

        // display card container
        container.classList.remove("hidden");

        // reset animation
        container.style.animation = 'none';     // turn off animation
        void container.offsetWidth;             // Trigger reflow
        container.style.animation = '';         // turn on animation

        // display card content
        (isSuccessMessage ? success : fail).classList.remove("hidden");

        // set root variable color
        document.documentElement.style.setProperty(
            "--card-color", 
            isSuccessMessage ? green : red
        );

        // auto hide when animation ended   
        container.onanimationend = () => {
            container.classList.add("hidden");
        }  
    }
}

export default alertCard;