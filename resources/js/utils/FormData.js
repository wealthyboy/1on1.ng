export const registerData = () => {

    let data = {
        email: "",
        password: "",
        first_name: null,
        last_name: null,
        password_confirmation: null,
        phone_number: null,
    };

    return data
}


export const accountData = (user) => {
    let data = {
        email: user.email,
        first_name: user.name,
        last_name: user.last_name,
        phone_number: user.phone_number,
    };

    return data
}


export const changePasswordData = (user) => {
    let data = {
        old_password: "",
        password: "",
        password_confirmation: "",
    };

    return data
}


export const shoutOutData = (service, ) => {

    let data = {
        sender_first_name: "",
        sender_last_name: "",
        recipient_first_name: "",
        recipient_last_name: "",
        recipient_email: "",
        recipient_phone: "",
        service_id: service.id,
        type: "Choose one",
        event_date: "",
        comment: "",
        service_type: "shout-out",
        user_id: user.id
    };

    return data
}


export const masterClassData = () => {

    let data = {
        email: "",
        password: "",
        first_name: null,
        last_name: null,
        phone_number: null,
    };

    return data
}