function treeSum(array) {
    let sum = 0;

    array.map( function(element) {
        if ( Array.isArray(element) )
            sum += treeSum(element);
        else
            sum += element;
    });

    return sum;
}

treeSum([ 5, 7,
[ 4, [2], 8, [1, 3], 2 ],
[9, [] ],
1, 8
]);