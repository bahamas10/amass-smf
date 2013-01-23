amass-smf
=========

A plugin for amass to expose SMF service information

See [node-smf](https://github.com/bahamas10/node-smf)

Installation
------------

1. Install [amass](https://github.com/bahamas10/node-amass)
2. `[sudo] amass --add amass-smf`
3. run `amass`

Example
-------

Add this plugin to amass to get SMF service info

``` json
[
  "svc:/system/utmp:default": {
    "fmri": "svc:/system/utmp:default",
    "name": "utmpx monitoring",
    "enabled": true,
    "state": "online",
    "next_state": "none",
    "state_time": "November 28, 2012 12:10:47 AM PST",
    "logfile": "/var/svc/log/system-utmp:default.log",
    "restarter": "svc:/system/svc/restarter:default",
    "contract_id": 2038,
    "dependency": [
      "require_all/none svc:/milestone/sysconfig (online)"
    ],
    "process": [
      {
        "pid": 79145,
        "cmd": "/usr/lib/utmpd"
      }
    ]
  },
  "svc:/milestone/sysconfig:default": {
    "fmri": "svc:/milestone/sysconfig:default",
    "name": "Basic system configuration milestone",
    "enabled": true,
    "state": "online",
    "next_state": "none",
    "state_time": "November 28, 2012 12:10:47 AM PST",
    "logfile": "/var/svc/log/milestone-sysconfig:default.log",
    "restarter": "svc:/system/svc/restarter:default",
    "dependency": [
      "require_all/none svc:/milestone/single-user (online)",
      "optional_all/none svc:/system/sysidtool:system (online)",
      "optional_all/none svc:/system/sysidtool:net (online)"
    ]
  },
  { ... }
]
```

License
-------

MIT
