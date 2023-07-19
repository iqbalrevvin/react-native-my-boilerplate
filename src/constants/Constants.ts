const platform = {
    ANDROID: 'android',
    IOS: 'ios',
};

const icons = {
    ARROW_BACK: 'arrow-back',
    ARROW_BACK_IOS: 'arrow-back-ios',
};

const forms = {
    AUTH: {
        EMAIL: 'email',
        PASSWORD: 'password',
    },
};

const toast = {
    TYPE: {
        SUCCESS: 'success',
        INFO: 'info',
        ERROR: 'error',
        WARNING: 'warning',
    },
};

const Constants = {
    PLATFORM: { ...platform },
    ICONS: { ...icons },
    FORM: { ...forms },
    TOAST: { ...toast },
};

export default Constants;
