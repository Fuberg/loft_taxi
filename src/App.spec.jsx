import React from "react";
import { render, fireEvent } from '@testing-library/react'
import App from './App'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

jest.mock('./Home', () => ({ Home: () => <div>Home component</div>}))
jest.mock('./Map', () => ({ Map: () => <div>Map component</div>}))
jest.mock('./Profile', () => ({ Profile: () => <div>Profile component</div> }))

describe("App", () => {
    it("renders correctly", () => {
        const mockStore = {
            getState: () => ({ auth: {isLoggedIn: true}}),
            subscribe: () => { },
            dispatch: () => { }
        }

        const history = createMemoryHistory();

        const { container } = render(
            <Router history={history}>
                <Provider store={mockStore}>
                    <App />
                </Provider>
            </Router>
        )
        expect(container.innerHTML).toMatch("Home component")
    })

    describe("when clicked on navigation buttons", () => {
        it("opens the corresponding page", () => {
            const mockStore = {
                getState: () => ({ auth: {isLoggedIn: true}}),
                subscribe: () => { },
                dispatch: () => { }
            }
    
            const history = createMemoryHistory();
    
            const { container, getByText } = render(
                <Router history={history}>
                    <Provider store={mockStore}>
                        <App />
                    </Provider>
                </Router>
            )
            
            fireEvent.click(getByText('Map'))
            expect(container.innerHTML).toMatch("Map component")
            fireEvent.click(getByText('Profile'))
            expect(container.innerHTML).toMatch("Profile component")
        })
    })
})