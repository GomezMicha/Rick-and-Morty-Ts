export type OptionalProperty = {
    prototype?: string;
  }


// Create types for createAction helper function and function overloading
export type ActionWithPayload<T, P> = {
    type: T;
    payload: P;
}

export type Action<T> = {
    type: T;
};

// Function Overloading

export function createAction<T extends string, P>(
    type: T, 
    payload: P
): ActionWithPayload<T, P>;


export function createAction<T extends string>(
    type: T,
    payload: void 
): Action<T>;


export function createAction<T extends string, P>(type: T, payload: P){
    return { type, payload}
}