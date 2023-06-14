var raft_properties = {
    passenger_1: 0,
    passenger_2: 0,
}

var characters = [
    {   // father
        location: "upper",
        adult: true,
        not_compatible: [5,6]
    },
    {   // mother
        location: "upper",
        adult: true,
        not_compatible: [3,4]
    },
    {   // police
        location: "upper",
        adult: true,
        not_compatible: []
    },
    {   // Boy 1
        location: "upper",
        adult: false,
        not_compatible: [1]
    },
    {   // Boy 2
        location: "upper",
        adult: false,
        not_compatible: [1]
    },
    {   // Girl 1
        location: "upper",
        adult: false,
        not_compatible: [0]
    },
    {   // Girl 2
        location: "upper",
        adult: false,
        not_compatible: [0]
    },
    {   // Thief
        location: "upper",
        adult: false,
        not_compatible: [0,1,3,4,5,6]
    },
]

// var selectedChar = 0;

const listen = (cb) => {
    var character = 0;
    var move = null;

    window.onkeyup = (key) => {
        console.log(key.key);

        if ([1,2,3,4,5,6,7,8].includes(parseInt(key.key))) character = parseInt(key.key)-1;

        if (key.key == "ArrowUp" || key.key == "ArrowDown" && character == 0) console.log("Error: move without selected character");

        else {
            move = key.key;

            // check if move is valid
            if (!checkIfValid(characters[character].location, move)) return;

            // check if raft is full
            if (raft_properties.passenger_1>0 && raft_properties.passenger_2>0) return;

            // check compatibility with other passengers
            if (raft_properties.passenger_1>0 || raft_properties.passenger_2>0 && !compatible(character)) return;

            // do specified actions
            origin = characters[character].location
            destination = getDestination(origin, move)
        }
    }
}

const checkIfValid = (location, move) => {
    if (move == "ArrowUp" && ["lower", "river"].includes(location)) return true;
    else if (move == "ArrowDown" && ["upper", "river"].includes(location)) return true;
    else return false;
}

const compatible = (character) => {
    current = raft_properties.passenger_1 > raft_properties.passenger_2 ? raft_properties.passenger_1 : raft_properties.passenger_2;

    if (characters[current].not_compatible.includes(character)) return false;

    return true
}

const getDestination = (origin, move) => {
    if (move == "ArrowUp" && origin == "lower") return "river"
    if (move == "ArrowUp" && origin == "river") return "upper"
    if (move == "ArrowDown" && origin == "upper") return "river"
    if (move == "ArrowDown" && origin == "river") return "lower"
    return null
}