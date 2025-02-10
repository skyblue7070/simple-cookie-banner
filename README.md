# Cookie banner

Keep light web experience with this simple cookie banner!

# How to use?

## Import

First, you need to bring in JS and CSS:
``` html
<!-- Copyright (c) 2025 skyblue7070. MIT license is applied to simple-cookie-banner. -->
<script src="https://cdn.jsdelivr.net/gh/skyblue7070/simple-cookie-banner/cookie-action.min.js"></script>
<link href="https://cdn.jsdelivr.net/gh/skyblue7070/simple-cookie-banner/cookie-style.min.css" rel="stylesheet" type="text/css" />
```

If you want stable codes:
``` html
<!-- Copyright (c) 2025 skyblue7070. MIT license is applied to simple-cookie-banner. -->
<script src="https://cdn.jsdelivr.net/gh/skyblue7070/simple-cookie-banner@0.2.0/cookie-action.js"></script>
<link href="https://cdn.jsdelivr.net/gh/skyblue7070/simple-cookie-banner@0.2.0/cookie-style.css" rel="stylesheet" type="text/css" />
```

## Example

If you want to make a cookie banner:
``` html
<div class="cookie-banner off">
  <p>
    This website uses analysis and advertising cookies to enhance your experience.
  </p>
  <div style="display: flex; justify-content: space-evenly">
    <button id="cookie-yes" onclick="grantedStorage" class="cookie-button">
      Allow all cookies
    </button>
    <button id="cookie-no" class="cookie-button">
      Only necessary
    </button>
  </div>
</div>
```

If you want to make a cookie withdrawal button:
``` html
<button onclick='cookieCancel()'>Withdrawal of cookies</button>
```

# Link Google Analytics

This code should be placed before the cookie banner.
```
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('consent', 'default', {
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'analytics_storage': 'denied'
  });
</script>
```

That's all.
