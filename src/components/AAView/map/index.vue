


<script>
    function loadApi(){
    // Create script element
    const scriptElement: HTMLScriptElement = document.createElement('script')
    scriptElement.setAttribute('recaptcha-v3-script', '')

    let scriptBase = 'https://www.google.com/recaptcha/api.js'
    if (useRecaptchaNet)
      scriptBase = 'https://recaptcha.net/recaptcha/api.js'

    // Build parameter query string
    const parametersQuery = this.buildQueryString(renderParameters)

    scriptElement.src = scriptBase + '?render=' + siteKey + parametersQuery

    return new Promise<HTMLScriptElement>((resolve, reject) => {
      scriptElement.addEventListener('load', this.waitForScriptToLoad(() => {
        resolve(scriptElement)
      }), false)
      scriptElement.onerror = (error) => {
        reject(new Error('Something went wrong while loading ReCaptcha. (' + error.toString() + ')'))
      }
      document.head.appendChild(scriptElement)
    })
  }
  </script>