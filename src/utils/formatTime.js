export const formatTime = arg => {
  if(typeof(arg) !== 'number') {
    return (
      null
    );
  // } else if(typeof(arg) === 'string') {
  //   return (
  //     null
  //   );
  // } else if(arg.length === 0) {
  //   return (
  //     null
  //   );
  }
  else if(arg < 0) {
    return (
      null
    );
  } else {
    const ss = Math.floor(arg % 60);
    const mm = Math.floor((arg / 60) % 60);
    const hh = Math.floor(arg / 3600);

    const zeroPadding = (digit) => digit.toLocaleString('en-US', 
      {
        style: 'decimal',
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
    
    return (
      zeroPadding(hh) + ':' + zeroPadding(mm) + ':' + zeroPadding(ss)
    );
  }
};