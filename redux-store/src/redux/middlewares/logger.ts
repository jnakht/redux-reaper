

const logger = (state) => (next) => (action) => {
    // console.log("getState ", state.getState());
    // console.log("action: ", action);
    // return next(action);



    console.group(action.type);
    console.info("prev state: ", state.getState());
    const result = next(action);
    console.info("next state: ", state.getState());
    console.groupEnd();
    return result;
}

export default logger;