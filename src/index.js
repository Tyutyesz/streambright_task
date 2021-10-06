const data = {
    "averageEmptyDistanceKpis": {
        "global": {
            "accepted": 41622,
            "all": 57926
        },
        "filtered": {
            "accepted": 41622,
            "all": 57926
        }
    },
    "averageWaitingTimeKpis": {
        "global": {
            "accepted": 15771,
            "all": 19225
        },
        "filtered": {
            "accepted": 15771,
            "all": 19225
        }
    },
    "numberOfAssignmentsKpis": {
        "global": {
            "accepted": 27,
            "notAccepted": 425
        },
        "filtered": {
            "accepted": 27,
            "notAccepted": 425
        }
    }
}

const myRamda = (obj) => {
    const lvl1Keys = Object.keys(obj);
    lvl1Keys.forEach(key => {
        obj[key].filtered = Object.keys(obj[key].filtered);
        if (obj[key].global.accepted) {
            obj[key].global.accepted += 1;
        }
        if (obj[key].global.all) {
            obj[key].global.all -= 1;
        }
    })
    return obj;
}
const newData = myRamda(data);

console.log(newData);
