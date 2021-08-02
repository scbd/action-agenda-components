import   fs                       from 'fs-extra'
import { resolve      , dirname } from 'path'
import { fileURLToPath }          from 'url'     ;

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const cssFiles = ['../dist/esm/index.css', '../dist/legacy/cjs/index.css', '../dist/legacy/umd/index.css', '../dist/widget/index.css', '../public/widget/index.css']

main()
function main(){
  makeJsFilesFromMjs()

  for (const fName of cssFiles)
    prePendFile(fName)

}


function makeJsFilesFromMjs(){
  const fileName = resolve(__dirname, `../dist/esm/index.mjs`)
  const toFileName = resolve(__dirname, `../dist/esm/index.js`)

  const fileNameMin = resolve(__dirname, `../dist/esm/index.min.mjs`)
  const toFileNameMin = resolve(__dirname, `../dist/esm/index.min.js`)

  fs.copyFileSync(fileName, toFileName)
  fs.copyFileSync(fileNameMin, toFileNameMin)
}

function prePendFile (fileName){
  const spacer = `
  
  `
  const fileNameFullPath = resolve(__dirname, fileName)

  if(!fs.pathExists(fileNameFullPath)) return

  const cssAddFile       = resolve(__dirname, `./index.css`)
  const cssData          = (fs.readFileSync(cssAddFile)).toString()
  const updatedFile      = (fs.readFileSync(fileNameFullPath)).toString() + spacer + cssData

  return fs.writeFileSync(fileNameFullPath, updatedFile)
}