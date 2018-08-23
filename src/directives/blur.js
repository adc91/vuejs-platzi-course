const blur = {}

function setBlur (el, binding) {
  console.log(binding)
  el.style.filter = !binding.value ? 'blur(1px)' : 'none'
  el.style.cursor = !binding.value ? 'not-allowed' : 'inherit'
  el.querySelectorAll('button').forEach(a => {
    if (!binding.value) {
      a.setAttribute('disabled', true)
    } else {
      a.removeAttribute('disabled', true)
    }
  })
}

blur.install = function (Vue) {
  Vue.directive('blur', {
    bind (el, binding) {
      setBlur(el, binding)
    }
  })
}

export default blur
