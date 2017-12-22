'use strict'

const fs = require('fs')
const { resolve } = require('path')

symlinkAll(__dirname, resolve(process.env.HOME))

function symlinkAll (rootPath, linkRootPath) {
  let files = fs.readdirSync(rootPath)

  files.forEach((file) => {
    let path = resolve(rootPath, file)
    if (path === __filename) return

    let linkPath = resolve(linkRootPath, file)
    if (fs.existsSync(linkPath)) {
      if (fs.statSync(path).isDirectory()) return symlinkAll(path, linkPath)
      else fs.unlinkSync(linkPath)
    }

    fs.symlinkSync(path, linkPath)
  })
}
