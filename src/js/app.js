export function orderByProps (obj, sort) {
    const result = [];
    const sortObject = [];
    for (let prop in obj) {
        if(sort.includes(prop)) {
            result.push({
                key: prop, value: obj[prop]
            });
        } else {
            sortObject.push({
                key: prop, value: obj[prop]
            });
        }
    }
    sortObject.sort((a, b) => {
        if (a.key > b.key) {
            return 1;
        } else if (a.key < b.key) {
            return -1;
        }
    });
    return [...result, ...sortObject];
}