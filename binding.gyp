{
  "targets": [
    {
      "include_dirs": [  "<!(node --print 'require(`node-addon-api`).include_dir')" ],
      "target_name": "addon",
      "cflags!": [ "-fno-exceptions" ],
      "cflags_cc!": [ "-fno-exceptions" ],
      'defines': [ 'NAPI_DISABLE_CPP_EXCEPTIONS' ],
      "sources": [ "addon/index.cc" ]
    }
  ]
}
