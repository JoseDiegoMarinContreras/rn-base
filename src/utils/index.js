const dateToStr = (date) => {
    const year = date.getFullYear();
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec'][date.getMonth()];
    const day = `${date.getDate() > 9? '' : '0'}${date.getDate()}`;

    return `${year}-${month}-${day}`;
};

export {
    dateToStr,
};