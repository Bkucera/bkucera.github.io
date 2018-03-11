const fs = require('fs-extra')
hexo.extend.filter.register('after_generate', function(){
	fs.copySync('CNAME', 'public/CNAME')
  });