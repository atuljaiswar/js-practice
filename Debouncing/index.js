const handleScroll = (args) => {
  console.log('HIITED', args);
};

const debounce = (cb, delay) => {
  let timer = null;
  return (...args) => {
    // console.log({ args });
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

const debounceVersion = debounce(handleScroll, 1000);
document.addEventListener('scroll', () => {
  debounceVersion('test');
});
