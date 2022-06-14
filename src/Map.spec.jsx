import React from "react";
import { render } from "@testing-library/react";
import { Map } from "./Map";

jest.mock('mapbox-gl', () => ({
    GeolocateControl: jest.fn(),
    Map: function () {
        this.on = jest.fn();
        this.remove = jest.fn();
    },
    NavigationControl: jest.fn(),
}))

describe("Test Map", () => { 
    it("map renders", () => { 
        const { container } = render(<Map />)
        expect(container.getElementsByClassName("map")).toHaveLength(1)
    })
})