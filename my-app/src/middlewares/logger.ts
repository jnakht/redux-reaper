
const logger = (state) => (next) => (action) => {
    console.group(action.type);
    console.info("prev state: ", state.getState());
    const result = next(action);
    console.info("next state: ", state.getState());
    console.groupEnd();
    return result;
}

const blockCertainAction = (state) => (next) => (action) => {
    if (action.type === 'BLOCK_ME') {
        console.warn("Blocked: ", action.type);
        return;
    }
    return next(action);
}

export { blockCertainAction } ;

export default logger;