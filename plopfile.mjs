import { componentGenerator } from './internal/plop/index.mjs'

/**
 * 生成器
 * @param plop {import('plop').NodePlopAPI}
 */
export default function (plop) {
  plop.setGenerator('component', componentGenerator)
}
