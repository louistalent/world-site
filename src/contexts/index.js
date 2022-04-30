import React, {
    createContext,
    useContext,
    useReducer,
    useMemo,
    useCallback,
    useEffect,
} from "react";

const StateContexts = createContext();

export function UseStateContext() {
    return useContext(StateContexts);
}

function reducer(state, { type, payload }) {
    return {
        ...state,
        [type]: payload
    }
}

const INIT_STATE = {
    logined: false,
};


export default function Provider({ children }) {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    return (
        <StateContexts.Provider
            value={useMemo(
                () => [
                    state,
                    {
                        dispatch
                    }
                ],
                [state]
            )}
        >
            {children}
        </StateContexts.Provider>
    );
}