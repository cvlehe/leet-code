type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
    return {
        toBe: (x: any) => {
            if(x !== val) {
               throw("Not Equal"); 
            }
            return x === val;
        },
        notToBe: (x: any) => {
            if(val === x) {
                throw("Equal")
            }
            return x !== val;
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */