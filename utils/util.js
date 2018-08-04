const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const groupArray = (data, cols) => {
  const r = data.reduce((r, t) => {
    r.current.push(t);
    if (r.current.length === cols) {
      r.list.push(r.current);
      r.current = [];
    }
    return r;
  }, {
    list: [],
    current: []
  });

  if (r.current.length) {
    r.list.push(r.current);
  }

  return r.list;
}

module.exports = {
  formatTime: formatTime,
  groupArray: groupArray
}