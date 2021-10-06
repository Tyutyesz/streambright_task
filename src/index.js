import { compose, map, evolve, inc, dec, tap, keys } from "ramda";
import data from "./data.json";

const newData = compose(
    map(
        evolve({
            global: {
                accepted: inc,
                all: dec
            },
            filtered: keys
        })
    ),
    tap(console.log)
)(data);

console.log(newData);
