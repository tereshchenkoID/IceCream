import React from "react";

import Range from "../../Components/Range";

const SortAge = ({age, setAge, max, min}) => {
    return (
        <div>
            <Range
                max={max}
                min={min}
                data={age}
                action={setAge}
            />
        </div>
    )
}

export default SortAge;
