/**
 * useful functions extract from jquery
 */
/**
 *
 * @param {string} code
 */
export function DomEval(code) {
  const script = document.createElement('script')
  script.text = code
  document.body.appendChild(code).parentNode.removeChild(script)
}
