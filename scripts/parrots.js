const _ = require('lodash')
const fs = require('fs-extra')
const path = require('path')

let dir = path.resolve(__dirname)
let fnames = fs.readdirSync('parrots').map(fpath => {
	let fname = path.basename(fpath, path.extname(fpath))
	return fname
});


const getParrot = (name) => {
	fs.copySync(`parrots/${name}.gif`, `public/images/${name}.gif`)
	return (`
	<img src="/images/${name}.gif" class="parrot" height='20px' width:'20px'>
	`)
}

getParrot('aussieparrot')

hexo.extend.filter.register('after_post_render', data => {
	if (data['no-parrots']) return data
	data.content = data.content.replace(/:(\w+):/ig, (match, p1) => {
		if(fnames.indexOf(p1)!==-1) {
			console.log('detected parrot')
			return getParrot(p1)
		} else {
			return match
		}
	})
	data.content = data.content.replace(/\u2019/g,"'")
	return data
},9)

