import { WeatherIconPipe } from "./weather-icon.pipe"

describe("WeatherIconPipe", () => {
  it("create an instance", () => {
    const pipe = new WeatherIconPipe()
    expect(pipe).toBeTruthy()
  })
})
