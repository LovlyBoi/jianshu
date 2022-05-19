import { ref } from 'vue'
import { getCache, setCache } from './cahe'

function getTheme() {
  const cachedTheme = getCache('theme')
  if (!cachedTheme) {
    setCache('theme', 'light')
    return 'light'
  }
  return cachedTheme
}

const themeState = ref(getTheme())

function changeTheme(kind) {
  if (kind === 'light') {
    setCache('theme', 'light')
    document.body.classList.remove('dark-theme')
    document.body.classList.add('light-theme')
    themeState.value = 'light'
  } else if (kind === 'dark') {
    setCache('theme', 'dark')
    themeState.value = 'dark'
    document.body.classList.remove('light-theme')
    document.body.classList.add('dark-theme')
  }
}

const Theme = {
  changeTheme,
  getTheme,
  themeState,
}

export default Theme
