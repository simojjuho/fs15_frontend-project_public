import userReducer, { loginUser, registerUser } from "../../redux/reducers/userReducer"
import singleRegularUser from "../data/regularUser"

describe('testing userReducer', () => {
    test('registering enew users succesfully', () => {
        const state = userReducer(undefined, registerUser(singleRegularUser))
        expect(state.users).toHaveLength(1)
    })
    test('Logging in new users succesfully', () => {
        const state = userReducer(undefined, loginUser('123'))
        expect(state.loggedUser).toBe('123')
    })
})

export {}