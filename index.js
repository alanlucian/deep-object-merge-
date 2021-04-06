
function cloneData(original) {
    if (Array.isArray(original)) {
        return [...original];
    }
    if (isObject(original)) {
        return { ...original };
    }
    return original;
}

function deepDataMerge(original, newData) {

    var base = cloneData(original);
    for (var k in newData) {
        if (!base.hasOwnProperty(k) || !isObject(newData[k])) {
            base[k] = newData[k];
            continue;
        }
        base[k] = deepDataMerge(base[k], newData[k]);
    }
    return base;

};

function isObject(val) {
    return typeof val === 'object';
}

module.exports = deepDataMerge;