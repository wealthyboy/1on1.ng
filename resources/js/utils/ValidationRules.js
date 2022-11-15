import { computed } from "vue";
import { required, email, helpers, minLength, sameAs } from "@vuelidate/validators";

export const registerRules = (form) => {
    const rules = computed(() => {
        return {
            email: {
                required: helpers.withMessage(
                    "Please enter an email address",
                    required
                ),
                email,
            },
            password: {
                required: helpers.withMessage("Please enter a password", required),
                minLength: helpers.withMessage("Your password should be  at least eight characters ", minLength(8)),

            },
            password_confirmation: {
                required: helpers.withMessage(
                    "Please confirm your password",
                    required
                ),
                sameAsPassword: helpers.withMessage(
                    "Passwords do not match",
                    sameAs(form.password)
                ),
            },
            first_name: {
                required: helpers.withMessage("Please enter a first name", required),
            },
            last_name: {
                required: helpers.withMessage("Please enter a last name", required),
            },
            phone_number: {
                required: helpers.withMessage(
                    "Please enter a valid number",
                    required
                ),
                numeric: helpers.withMessage("Please enter a valid number", required),
            },
        };
    });

    return rules
};


export const changePasswordRules = (form) => {
    const rules = computed(() => {
        return {
            old_password: {
                required: helpers.withMessage("Please your old   password", required),
            },
            password: {
                required: helpers.withMessage("Please enter your new password", required),
                minLength: helpers.withMessage("Your password should be  at least eight characters ", minLength(8)),
            },
            password_confirmation: {
                required: helpers.withMessage(
                    "Please confirm your password",
                    required
                ),
                sameAsPassword: helpers.withMessage(
                    "Passwords do not match",
                    sameAs(form.password)
                ),
            },
        };
    });

    return rules
};


export const accountRules = (form) => {
    const rules = computed(() => {
        return {
            email: {
                required: helpers.withMessage(
                    "Please enter an email address",
                    required
                ),
                email,
            },
            first_name: {
                required: helpers.withMessage("Please enter a first name", required),
            },
            last_name: {
                required: helpers.withMessage("Please enter a last name", required),
            },
            phone_number: {
                required: helpers.withMessage(
                    "Please enter a valid number",
                    required
                ),
                numeric: helpers.withMessage("Please enter a valid number", required),
            },
        };
    });

    return rules
};


export const walletRules = (form) => {

    const rules = computed(() => {
        return {
            amount: {
                required: helpers.withMessage(
                    "Please enter a valid number",
                    required
                ),
                numeric: helpers.withMessage("Please enter a valid number", required),
            },
        };
    });

    return rules
}




export const masterClassOutRules = (form) => {
    const rules = computed(() => {
        return {
            first_name: {
                required: helpers.withMessage("Please enter sender's first name", required),
            },
            last_name: {
                required: helpers.withMessage("Please enter a sender lasr name", required),
            },

            email: {
                required: helpers.withMessage(
                    "Please enter an email address",
                    required
                ),
                email,
            },
            phone_number: {
                required: helpers.withMessage(
                    "Please enter a valid number",
                    required
                ),
                numeric: helpers.withMessage("Please enter a valid number", required),
            },
        };
    });

    return rules
};


export const shoutOutRules = (form) => {
    const rules = computed(() => {
        return {

            recipient_last_name: {
                required: helpers.withMessage("Please enter a  recipient's last name", required),
            },
            recipient_first_name: {
                required: helpers.withMessage("Please enter a recipient's first name", required),
            },
            recipient_email: {
                required: helpers.withMessage(
                    "Please enter an email address",
                    required
                ),
                email,
            },
            recipient_phone: {
                required: helpers.withMessage(
                    "Please enter a valid number",
                    required
                ),
                numeric: helpers.withMessage("Please enter a valid number", required),
            },
            type: {
                required: helpers.withMessage("Please choose type", required),
            },
            date: {
                required,
                minValue: value => value > new Date().toISOString()
            },
        };
    });

    return rules
};

export const loginRules = (form) => {

    const rules = computed(() => {
        return {
            email: {
                required: helpers.withMessage(
                    "Please enter an email address",
                    required
                ),
                email,
            },
            password: {
                required: helpers.withMessage("Please enter a password", required),
            },
        };
    });

    return rules
}