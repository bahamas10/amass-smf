require('../')(function(err, data) {
  if (err) throw(err);
  console.log(JSON.stringify(data, null, 2));
});
