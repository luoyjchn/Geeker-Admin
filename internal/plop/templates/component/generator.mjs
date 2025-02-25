import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'path'

const dirPath = dirname(fileURLToPath(import.meta.url))
const srcPath = resolve(dirPath, '../../../src')
const cwd = process.cwd()

/**
 * 页面生成器
 * @type {import('plop').PlopGenerator}
 */
const generator = {
  description: '新建一个组件',
  prompts: [
    {
      type: 'input',
      name: 'path',
      message: '组件路径:'
    },
    {
      type: 'input',
      name: 'name',
      message: '组件名称:',
      validate(name) {
        if (!name) {
          return '请输入组件名称'
        }
        return true
      }
    }
  ],
  actions: data => {
    const path = data?.path
    let componentPath = cwd
    if (path) {
      componentPath = resolve(srcPath, path)
    }
    return [
      {
        type: 'add',
        path: `${componentPath}/{{pascalCase name}}/{{pascalCase name}}.vue`,
        templateFile: `${dirPath}/component.hbs`
      },
      {
        type: 'add',
        path: `${componentPath}/{{pascalCase name}}/index.ts`,
        templateFile: `${dirPath}/index.hbs`
      },
      {
        type: 'add',
        path: `${componentPath}/{{pascalCase name}}/index.scss`,
        templateFile: `${dirPath}/styles.hbs`
      }
    ]
  }
}

export default generator
