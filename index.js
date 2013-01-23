var svcs = require('smf').svcs;

module.exports = amass_smf;

function amass_smf(cb) {
  var data = {};
  var errors = [];

  svcs(function(err, services) {
    if (err) return cb(err);
    var i = 0;
    services.forEach(function(service) {
      svcs(service, function(err, svc) {
        if (err) null//errors.push(err);
        else data[service] = svc;

        if (++i === services.length)
            cb(errors.length ? errors : null, data);
      });
    });
  });
}
