import { setVisibility } from "../../redux/reducers/modalReducer"
import store from "../shared/store"


describe('modalReducer', () => {
    test('setting modal visibility successfully',() => {
        expect(store.getState().modalReducer).toBe(false)
        store.dispatch(setVisibility())
        expect(store.getState().modalReducer).toBe(true)
    })
})