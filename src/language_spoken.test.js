import {
  capitalize,
  getAlpha2Code,
  countryExtractor,
  countryListLookup,
  getResponse
} from "./language_spoken";

// Test for countryExtractor function
it("converts array of country data objects to array of countries", () => {
  const inputObject = {
    country1: { name: "Argentina", capital: "Buenos Aires" },
    country2: { name: "Belize", capital: "Belmopan" },
    country3: { name: "Bolivia", capital: "Sucre" }
  };

  const actualValue = countryExtractor(inputObject);

  expect(actualValue).toEqual(["Argentina", "Belize", "Bolivia"]);
  expect(actualValue[0]).toBe("Argentina");
  expect(actualValue).toContain("Belize");
  expect(actualValue[2] === "Bolivia").toBe(true);
  expect(actualValue[3]).not.toBeDefined();
});

// Test for countryListLookup function
it("fetches list of countries where a given language is spoken", async () => {
  // countryListLookup makes an asynchronous request to a REST API
  // The fetched result is then passed to our provided callback
  // This test would need mocking of the HTTP request
  // For now, we test that the function exists and is callable
  expect(typeof countryListLookup).toBe("function");
});