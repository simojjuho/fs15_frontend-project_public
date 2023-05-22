import { setRegistrationVisibility } from "../../redux/reducers/modalReducer"
import store from "../shared/store"


describe('modalReducer', () => {
    test('setting modal visibility successfully',() => {
        expect(store.getState().modalReducer).toBe(false)
        store.dispatch(setRegistrationVisibility())
        expect(store.getState().modalReducer).toBe(true)
        expect(store.getState().modalReducer.loginModal).toBe(false)
    })
})