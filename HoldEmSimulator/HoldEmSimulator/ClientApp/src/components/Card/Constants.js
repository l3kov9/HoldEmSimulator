export const CardMapper = {
    0: "2",
    1: "3",
    2: "4",
    3: "5",
    4: "6",
    5: "7",
    6: "8",
    7: "9",
    8: "10",
    9: "J",
    10: "Q",
    11: "K",
    12: "A"
}

export const SuitMapper = {
    0: "♠",
    1: "♥",
    2: "♦",
    3: "♣"
}

export const GetRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}