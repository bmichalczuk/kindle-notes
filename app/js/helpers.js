export const eventGuard = func => e => {
    e.preventDefault();
    e.stopPropagation();
    return func(e);
};