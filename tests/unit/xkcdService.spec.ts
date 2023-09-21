import { xkcdAPI } from "@/services/xkcdService";

// Can make GET requests to xkcd API and receive a response
import axios, { AxiosInstance } from "axios";

describe("xkcdAPI", () => {
  it("should make GET request to xkcd API and receive a response", async () => {
    // Arrange
    const axiosMock = jest.spyOn(axios, "create");
    const instanceMock = {
      get: jest.fn().mockResolvedValue({ data: "response" }),
    } as unknown as AxiosInstance;
    axiosMock.mockReturnValue(instanceMock);

    // Act
    const result = await xkcdAPI().get("/");

    // Assert
    expect(axiosMock).toHaveBeenCalledWith({
      baseURL: "http://localhost:8080/https://xkcd.com",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    expect(instanceMock.get).toHaveBeenCalledWith("/");
    expect(result).toEqual({ data: "response" });

    // Clean up
    axiosMock.mockRestore();
  });
});
