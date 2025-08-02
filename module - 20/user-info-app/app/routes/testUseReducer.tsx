import { useReducer } from "react";


export default function testUseReducer() {


    const reducer = (state, action) => {
        switch(action.type) {
            case 'update': {
                return {
                    ...state,
                    [action.payload.field]: action.payload.value, 
                }
            }
            default: {
                return state;
            }
        }
    }
    const initialState = {
        name: "",
        email: "",
        phone: "",
    }
    const [state, dispatch] = useReducer(reducer, initialState);


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'update',
            payload: {
                field: e.target.name,
                value: e.target.value
            }
        });
        console.log("The value using useReducer: ", state);
    }

    return (
        <div>
            <h3>This is test component</h3>



            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={state.name}
                        onChange={handleSubmit} />
                </div>

                <div>
                    <label htmlFor="email">email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={state.email}
                        onChange={handleSubmit} />
                </div>
                <div>
                    <label htmlFor="phone">phone</label>
                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        value={state.phone}
                        onChange={handleSubmit} />
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
}