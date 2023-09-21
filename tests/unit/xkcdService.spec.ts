import { fetchComic, fetchRandomComic } from "@/services/xkcdService";

describe("xkcdService", () => {
  describe("fetchComic", () => {
    it("should fetch a comic by id", async () => {
      const comic = await fetchComic(1);
      expect(comic.num).toBe(1);
      expect(comic.title).toBeDefined();
      expect(comic.img).toBeDefined();
    });

    it("should handle errors", async () => {
      const consoleSpy = jest.spyOn(console, "error").mockImplementation();
      await fetchComic(-1);
      expect(consoleSpy).toHaveBeenCalled();
      consoleSpy.mockRestore();
    });
  });

  describe("fetchRandomComic", () => {
    it("should fetch a random comic", async () => {
      const comic = await fetchRandomComic();
      expect(comic.num).toBeDefined();
      expect(comic.title).toBeDefined();
      expect(comic.img).toBeDefined();
    });

    it("should handle errors", async () => {
      const consoleSpy = jest.spyOn(console, "error").mockImplementation();
      await fetchRandomComic();
      expect(consoleSpy).toHaveBeenCalled();
      consoleSpy.mockRestore();
    });
  });
});
