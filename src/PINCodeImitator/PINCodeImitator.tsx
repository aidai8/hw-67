import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../app/store.ts";
import {deleteDigit, enterDigit, reset, submitPin} from "./PINCodeImitatorSlice.ts";

const PINCodeImitator = () => {
    const dispatch = useDispatch();
    const {enteredPin, status, message} = useSelector((state: RootState) => state.pincode);

    const handleDigitClick = (digit: string) => {
        if (status !== 'empty') dispatch(reset());
        dispatch(enterDigit(digit));
    };

    const handleDelete = () => dispatch(deleteDigit());
    const handleSubmit = () => dispatch(submitPin());

    return (
    <>
        <h1>PIN Code Imitator</h1>
        <div className="pincode-container">
            <input
                className={`pincode-display ${status}`}
                type="password"
                value={'*'.repeat(enteredPin.length)}
                readOnly
            />
            {message && <p className={`message ${status}`}>{message}</p>}
            <div className="keypad">
                {['1', '2', '3', '4', '5', '6', '7', '8', '9', '<', '0', 'E'].map((btn) => (
                    <button
                        key={btn}
                        onClick={() => {
                            if (btn === '<') handleDelete();
                            else if (btn === 'E') handleSubmit();
                            else handleDigitClick(btn);
                        }}
                    >
                        {btn}
                    </button>
                ))}
            </div>
        </div>
    </>
    );
};

export default PINCodeImitator;