const YearRangeInput = ({ yearList, rangeID, state, dispatch }) => {
    const min = Math.min(...yearList);
    const max = Math.max(...yearList);

    return (
        <form className="flex flex-col gap-1 w-full">
            <input
                className="bg-black"
                type="range"
                min={min}
                max={max}
                onChange={(e) =>
                    dispatch({
                        type: "batch",
                        value: e.target.value,
                        field: "maxBatchYear",
                    })
                }
                value={state.maxBatchYear}
                //  list={rangeID}
            />

            {/* <datalist id="ice-cream-flavors">
                {yearList.map((year) => (
                    <option value={year}>{year}</option>
                ))}
            </datalist> */}
            <div className="flex w-full justify-between">
                {yearList.map((year) => (
                    <label
                        className="text-center text-sm font-montserrat"
                        key={year}
                    >
                        {year}
                    </label>
                ))}
            </div>
        </form>
    );
};

export { YearRangeInput };
