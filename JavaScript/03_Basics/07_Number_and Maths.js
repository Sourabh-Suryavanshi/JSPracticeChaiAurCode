function addClosingTags(inputString) {
    const stack = [];
    const openTagRegex = /<\w+>/g;
    const closeTagRegex = /<\/\w+>/g;

    let match;

    // Find all opening tags
    while ((match = openTagRegex.exec(inputString)) !== null) {
        stack.push(match[0]);
    }

    // Find all closing tags
    while ((match = closeTagRegex.exec(inputString)) !== null) {
        stack.pop();
    }

    // Add missing closing tags
    while (stack.length > 0) {
        const openTag = stack.pop();
        const closeTag = `</${openTag.substring(1)}`;
        inputString += closeTag;
    }

    return inputString;
}

let x = addClosingTags("<p>ARMS</p><div>Hello");

console.log(x);
