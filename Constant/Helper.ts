/**
 * 
 * @description: HTML id validation
 * 
 * @description: alert, and auto-copy to clipboard of the id
 * if the element with the given id (from HTML) is not found.
 * 
 * @description: to use this function, simply `getHTMLId("HTML-Element-ID-Name")`
 * 
 * @param id HTML Element id in string
 * @returns HTML Element id 
 * 
 * 
 * 
 */
export function getHTMLId(id: string): HTMLElement | null {
    const element: HTMLElement | null = document.getElementById(id);
    
    if (element == null) {
        alert(`Element with id "${id}" not found.`);
        navigator.clipboard.writeText(id);
        return null;
    }

    return element;
} 

/**
 * 
 * @description: HTML class name validation
 * 
 * @description: alert, and auto-copy to clipboard of the class name
 * if the element with the given class name (from HTML) is not found.
 * 
 * @description: to use this function, simply `getHTMLClass(".HTML-Element-Class-Name")`
 * @description: note that dot is required
 * 
 * @param className HTML Element clas name in string
 * @returns HTML Element class  
 * 
 * 
 * 
 */
export function getHTMLClass(className: string): HTMLElement | null {
    const element: HTMLElement | null = document.querySelector(className);
    
    if (element == null) {
        alert(`Element with class "${className}" not found.`);
        navigator.clipboard.writeText(className);
        return null;
    }

    return element;
}