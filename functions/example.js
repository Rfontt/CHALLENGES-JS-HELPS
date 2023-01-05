function verifyEmail(email) {
    if (email === "jorshou@gmail.com") {
        console.log('Email exists');
    } else {
        console.log('Email does not exists');
    }
}

function verifyEmail(email) {
    if (email === "jorshou@gmail.com") {
        return "approved";
    } else {
        return "disapproved";
    }
}

const isApproved = verifyEmail("test@gmail.com");

if (isApproved === "approved") {
    console.log('YEAAAH');
}