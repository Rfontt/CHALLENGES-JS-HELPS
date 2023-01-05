const name = "Kaue";

if (name === "Kauê") {
    console.log('true');
} else {
    console.log('false');
}

console.log(name.includes("ue"));

switch (name) {
    case "Kaue":
        console.log('true');
        break;
    default:
        console.log('false');
}