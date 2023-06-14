var raft_properties = {
    passenger_1: 0,
    passenger_2: 0,
}

var characters = [
    {},
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

        if ([1,2,3,4,5,6,7,8].includes(parseInt(key.key))) character = parseInt(key.key);

        console.log(`character: ${character}`)

        if ((key.key == "ArrowUp" || key.key == "ArrowDown") && character == 0) console.log("Error: move without selected character");

        else {
            move = key.key;

            // check if move is valid
            if (!checkIfValid(characters[character].location, move)) return;
            console.log("after check if valid")

            // check if raft is full
            if (raft_properties.passenger_1>0 && raft_properties.passenger_2>0) return;
            console.log("after check of passenger")

            // check compatibility with other passengers
            if (raft_properties.passenger_1>0 || raft_properties.passenger_2>0 && !compatible(character)) return;
            console.log("after check of compatibility")

            // do specified actions
            const origin = characters[character].location
            const destination = getDestination(origin, move)

            cb({destination, origin, character:character})

            characters[character].location = destination

            updateRaftProperties(origin, character)


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

    if (!characters[current].adult && !characters[character.adult]) return false;

    return true
}

const getDestination = (origin, move) => {
    if (move == "ArrowUp" && origin == "lower") return "river"
    if (move == "ArrowUp" && origin == "river") return "upper"
    if (move == "ArrowDown" && origin == "upper") return "river"
    if (move == "ArrowDown" && origin == "river") return "lower"
    return null
}

const updateRaftProperties = (origin, character) => {
    const {passenger_1, passenger_2} = raft_properties
    if (origin == "river") {
        if (character == passenger_1) passenger_1 = 0;
        if (character == passenger_2) passenger_2 = 0;
        return;
    }

    if (passenger_1 == 0) passenger_1 = character;
    else if (passenger_2 == 0) passenger_2 = character;
}