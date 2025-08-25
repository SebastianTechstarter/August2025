const {mwst, brutto} = require("./mwst.js")


test("7% von 100 soll 7 ergeben", () => {
    expect(() => mwst(100,0.07).toBe(7))
})

test("19% von 200 soll 38 ergeben", () => {
    expect(() => mwst(200).toBe(38))
})

test("Betrag 0 soll 0 Steuer ergeben", () => {
    expect(() => mwst(0,0).toBe(0))
})

test("Nettobetrag von 100 soll mit 19% 119 ergeben", () => {
    expect(() => brutto(100).toBe(119))
})

test("Nettobetrag von 50 soll mit 7% 53.3 ergeben", () => {
    expect(() => brutto(50,0.07).toBe(119))
})