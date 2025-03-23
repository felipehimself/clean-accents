import { describe, expect, it } from "vitest";
import { cleanAccents } from "../src/index";

describe("clean-accents", () => {
  it("should remove accents from a string", () => {
    expect(cleanAccents.clean("Olá Mundo!")).toBe("Ola Mundo!");
  });

  it("should remove accents from a long string", () => {
    const longStr =
      "àáâãäåāăąèéêëēėęěìíîïīįòóôõöōőùúûüūůűýÿçćčďğģńñňřśšşťžźżÀÁÂÃÄÅĀĂĄÈÉÊËĒĖĘĚÌÍÎÏĪĮÒÓÔÕÖŌŐÙÚÛÜŪŮŰÝŸÇĆČĎĞĢŃÑŇŘŚŠŞŤŽŹŻ";
    const expectReturn =
      "aaaaaaaaaeeeeeeeeiiiiiiooooooouuuuuuuyycccdggnnnrssstzzzAAAAAAAAAEEEEEEEEIIIIIIOOOOOOOUUUUUUUYYCCCDGGNNNRSSSTZZZ";
    expect(cleanAccents.clean(longStr)).toBe(expectReturn);
  });

  it("should handle an empty string", () => {
    expect(cleanAccents.clean("")).toBe("");
  });

  it("should return the same string if there are no accents", () => {
    expect(cleanAccents.clean("Hello World")).toBe("Hello World");
  });

  it("should remove accents from a mixed string", () => {
    expect(cleanAccents.clean("Béla Bártok")).toBe("Bela Bartok");
  });

  it("should handle strings with special characters", () => {
    expect(cleanAccents.clean("¡Hola, cómo estás!")).toBe("¡Hola, como estas!");
  });

  it("should handle strings with Unicode characters", () => {
    expect(cleanAccents.clean("Tést üñíçødë")).toBe("Test unicøde");
  });

  it("should handle strings with numbers", () => {
    expect(cleanAccents.clean("I have 1 dream")).toBe("I have 1 dream");
    expect(
      cleanAccents.clean(
        "Existem 20 caçadores na floresta mas não irão caçar hoje."
      )
    ).toBe("Existem 20 cacadores na floresta mas nao irao cacar hoje.");
  });

  it("should check if a string has accents", () => {
    expect(cleanAccents.has("Olá Mundo!")).toBe(true);
    expect(cleanAccents.has("Hi there!")).toBe(false);
    expect(cleanAccents.has("Tést üñíçødë")).toBe(true);
    expect(cleanAccents.has("!Hola, como estas!")).toBe(false);
    expect(cleanAccents.has("¡Hola, cómo estás!")).toBe(true);
    expect(cleanAccents.has("Checkout my résumé")).toBe(true);
    expect(cleanAccents.has("Test unicøde")).toBe(false);
    expect(cleanAccents.has("ramdom test with non alpha chars @#$£")).toBe(
      false
    );
  });
});
