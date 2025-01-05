import * as React from "react";

export function IllustrationIdleLight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={200}
      height={200}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      focusable={false}
      aria-hidden={true}
      {...props}
    >
      <rect width={200} height={200} fill="transparent" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M72.4973 30.7635C78.9257 27.8041 86.081 26.1536 93.6219 26.1536C115.232 26.1536 133.676 39.7074 140.917 58.7776C142.913 58.4139 144.971 58.2239 147.072 58.2239C165.92 58.2239 181.198 73.5026 181.198 92.3499C181.198 98.0077 179.822 103.344 177.385 108.042C189.232 113.985 197.364 126.244 197.364 140.402C197.364 160.384 181.164 176.583 161.182 176.583C160.706 176.583 160.233 176.574 159.762 176.556C147.404 190.333 129.464 199 109.5 199C79.3221 199 53.7697 179.196 45.1298 151.876C45.0659 151.876 45.002 151.876 44.938 151.876C21.7763 151.876 3 133.1 3 109.938C3 97.7223 8.22286 86.7264 16.5573 79.0616C13.6508 73.7054 12 67.5685 12 61.0462C12 40.1552 28.9355 23.2197 49.8264 23.2197C58.3307 23.2197 66.1796 26.0262 72.4973 30.7635Z"
        fill="hsl(var(--secondary))"
      />
      <path
        d="M31.9999 38.7198C35.1999 30.7198 39.8332 26.5531 42.4999 24.7198C43.8168 23.7198 56.4999 13.2198 83.4999 11.2198C110.929 9.18793 115 21.7198 116 29.2198C117 36.7198 105.5 50.7198 102 52.7198C105.5 55.7198 125 76.7198 130 83.2198C135 89.7198 167.5 112.22 168 116.72C171 114.72 172 115.72 173 118.72C173.5 115.72 177.5 115.22 178 118.72C183 113.22 183 116.72 184 118.72C187 115.22 190.5 120.72 187 125.72C183.5 130.72 184 137.22 184 140.72C184 144.22 183 157.72 175.5 158.72C169.5 159.52 164.667 156.386 163 154.72C162 154.053 159.3 151.62 156.5 147.22C153 141.72 139.5 124.22 127 112.22C114.5 100.22 107.5 96.2198 110 102.72C112.5 109.22 135 136.72 137 139.22C139 138.02 140.167 139.72 140.5 140.72C141 138.386 142.8 134.32 146 136.72C149.2 139.12 147 143.72 145.5 145.72C145.333 148.553 145.1 154.72 145.5 156.72C146 159.22 150 166.22 145.5 170.22C141.9 173.42 127 173.553 120 173.22C116 165.886 107.7 150.72 106.5 148.72C105 146.22 93.4999 129.72 88.4999 124.22C84.4999 119.82 74.4999 102.386 69.9999 94.2198C69.4999 94.8864 68.3999 96.7198 67.9999 98.7198C67.4999 101.22 62.9999 112.72 45.4999 112.22C27.9999 111.72 20.9999 100.22 18.9999 85.2198C16.9999 70.2198 30.9999 58.2198 33.9999 55.2198C33.5999 53.2198 33.8332 50.0531 33.9999 48.7198C33.3332 50.0531 31.7999 52.7198 30.9999 52.7198C29.9999 52.7198 27.9999 48.7198 31.9999 38.7198Z"
        fill="white"
      />
      <path
        d="M46.6246 75.3495C36.8005 64.4338 27.6737 65.0402 24.3384 66.7079C27.0673 59.8856 45.2602 46.241 51.6277 44.4217C56.7464 42.9592 65.2723 40.3283 68.0012 37.1445C70.7302 33.9608 79.8266 28.0481 87.5585 24.8643C97.5646 22.1354 106.206 25.3192 114.393 35.7801C109.845 47.6054 104.387 50.7892 102.113 53.0633C104.842 54.4277 113.938 63.5242 123.035 75.3495C91.6519 71.2561 75.7332 107.187 74.8235 104.003C73.9139 100.82 69.8205 96.2713 69.8205 93.9972C69.8205 91.7231 73.0043 88.0845 77.5525 82.6266C82.1007 77.1688 89.3778 75.3495 91.6519 74.4399C93.926 73.5302 95.7453 73.0754 96.2001 71.2561C96.564 69.8007 94.6841 69.1336 93.4712 68.982C94.5325 68.8304 96.655 67.9814 96.655 65.7983C96.655 63.6695 94.2044 64.2508 93.0985 64.4216C93.0673 64.4297 93.0397 64.4338 93.0164 64.4338C93.0428 64.43 93.0702 64.4259 93.0985 64.4216C93.6749 64.2716 95.4906 62.7601 94.8357 60.7952C94.3809 59.4308 92.41 59.2792 91.1971 59.4308C91.9551 59.1276 92.9254 57.5205 92.5616 55.3374C92.1977 53.1542 88.6198 52.76 86.6489 53.0633C88.3166 52.002 90.3784 49.6066 87.1037 48.5151C83.0103 47.1506 72.0092 50.9347 62.0885 58.5211C54.3566 64.4338 50.8696 70.4981 50.2632 73.5302C49.6568 73.0754 48.08 72.8025 46.6246 75.3495Z"
        fill="#E6E8EA"
      />
      <path
        d="M113 20.2198H53.5L46 22.7198L42 25.7198L71.5 31.2198L88 24.7198C88 24.7198 97.5 22.2198 105 27.2198C112.5 32.2198 114.5 35.7198 114.5 35.7198L116 29.7198L113 20.2198Z"
        fill="white"
      />
      <path
        d="M77.3936 29.8498C73.242 32.177 68.98 35.2362 66.4641 39.0865C62.4821 39.7223 57.1261 41.4704 51.4079 44.2443C48.5311 49.6437 47.6441 56.123 46.0677 55.4937C45.3737 55.2166 45.2141 53.6951 45.2889 51.9557C44.2512 56.5544 42.7403 60.2108 41.7417 57.2208C41.2327 55.6968 41.5887 52.5128 42.1051 49.5437C42.049 49.5808 41.9928 49.618 41.9367 49.6553C40.9605 55.8172 40.2314 62.7367 38.2809 57.2208C37.7962 55.8502 37.6283 54.2989 37.6588 52.7104C37.2926 52.9915 36.9283 53.2766 36.566 53.5656C35.9537 56.4261 35.3375 57.9591 34.3874 55.4937C34.3761 55.4643 34.365 55.4348 34.354 55.405C30.3972 58.8347 26.7776 62.7612 23.8837 67.1514C13.0686 83.5587 21.8419 104.914 34.3874 110.095C46.9329 115.276 64.2371 111.624 68.1305 98.6706C68.4443 97.6267 68.7889 96.6194 69.1607 95.6482C69.3677 95.1073 69.5831 94.5776 69.8063 94.0591C74.1543 83.9571 81.4359 78.1066 86.7325 76.2186C92.7889 74.0597 98.8454 71.9009 94.952 69.742C94.3806 69.4252 93.7348 69.2572 93.0445 69.2038C91.8033 69.7969 90.2666 70.4998 88.4629 71.4691C82.839 74.4915 81.1086 74.0597 82.4065 73.1962C83.5138 72.4594 89.0306 68.8934 93.0445 69.2038C95.6732 67.9477 96.9762 67.1841 96.6824 65.4244C96.5207 64.4563 95.03 64.0911 93.0455 64.1487C91.3546 65.3797 88.9035 66.4079 87.1651 67.1514C84.1369 68.4467 79.3782 69.742 82.8391 67.1514C85.0066 65.5289 89.7195 64.2451 93.0455 64.1487C94.3002 63.2352 95.1362 62.2101 94.952 61.1067C94.7373 59.821 93.3507 59.0671 91.3737 58.8976C89.4251 60.9305 85.8054 62.6487 82.4065 63.2655C77.6478 64.129 78.9456 62.402 84.1369 60.2431C86.7519 59.1556 89.367 58.7255 91.3737 58.8976C92.1532 58.0844 92.6653 57.2208 92.7889 56.3572C93.1124 54.0977 90.7761 52.8034 86.5033 53.1961C84.3999 55.1138 81.1759 57.0949 78.9456 58.0843C75.0522 59.8114 74.187 56.3572 81.5412 54.1984C83.3975 53.6535 85.0608 53.3286 86.5033 53.1961C88.0719 51.766 89.0173 50.3711 88.4629 49.4489C87.1651 47.2901 83.3356 47.9202 75.5488 50.9426C68.3439 53.739 55.9542 60.0621 50.3729 72.9619C49.9221 74.004 49.5156 75.089 49.1599 76.2186C44.4013 91.3305 40.0113 86.581 41.7417 81.3998C42.9654 77.7359 46.3524 74.7197 50.3729 72.9619C55.9542 60.0621 68.3439 53.739 75.5488 50.9426C83.3356 47.9202 87.1651 47.2901 88.4629 49.4489C89.0173 50.3711 88.0719 51.766 86.5033 53.1961C90.7761 52.8034 93.1124 54.0977 92.7889 56.3572C92.6653 57.2208 92.1532 58.0844 91.3737 58.8976C93.3507 59.0671 94.7373 59.821 94.952 61.1067C95.1362 62.2101 94.3002 63.2352 93.0455 64.1487C95.03 64.0911 96.5207 64.4563 96.6824 65.4244C96.9762 67.1841 95.6732 67.9477 93.0445 69.2038C93.7348 69.2572 94.3806 69.4252 94.952 69.742C98.8454 71.9009 92.7889 74.0597 86.7325 76.2186C81.4359 78.1066 74.1543 83.9571 69.8063 94.0591C73.1416 100.18 81.5717 115.556 86.7325 121.741C93.1834 129.473 103.477 143.575 108.48 151.346C113.483 159.118 125.234 183.142 141.241 177.684C152.488 173.367 145.134 157.391 145.134 153.074V146.165C146.288 144.87 148.335 141.502 147.297 138.393C146.081 134.752 141.065 135.281 140.796 142.115C140.894 142.677 140.902 143.198 140.808 143.575C140.781 143.059 140.778 142.573 140.796 142.115C140.444 140.103 138.944 137.569 136.915 139.257C136.248 139.811 135.81 140.564 135.534 141.385C135.787 141.785 135.97 142.234 136.049 142.711C136.482 145.302 136.049 147.461 135.617 147.029C135.295 146.708 134.735 143.763 135.534 141.385C134.414 139.616 131.917 138.791 130.858 140.552C130.45 141.23 130.171 142.164 130.019 143.18C130.295 143.384 130.577 143.655 130.858 144.006C132.589 146.165 132.156 150.915 130.858 149.188C129.968 148.003 129.688 145.397 130.019 143.18C128.599 142.128 127.327 142.852 126.965 143.575C126.721 144.06 126.067 145.365 125.927 147.029C128.007 149.142 128.604 153.964 126.965 151.346C126.018 149.835 125.817 148.324 125.927 147.029C126.067 145.365 126.721 144.06 126.965 143.575C127.327 142.852 128.599 142.128 130.019 143.18C130.171 142.164 130.45 141.23 130.858 140.552C131.917 138.791 134.414 139.616 135.534 141.385C135.81 140.564 136.248 139.811 136.915 139.257C138.944 137.569 140.444 140.103 140.796 142.115C141.065 135.281 146.081 134.752 147.297 138.393C148.335 141.502 146.288 144.87 145.134 146.165V153.074C145.134 157.391 152.488 173.367 141.241 177.684C125.234 183.142 113.483 159.118 108.48 151.346C103.477 143.575 93.1834 129.473 86.7325 121.741C81.5717 115.556 73.1416 100.18 69.8063 94.0591C69.5831 94.5776 69.3677 95.1073 69.1607 95.6482C68.7889 96.6194 68.4443 97.6267 68.1305 98.6706C64.2371 111.624 46.9329 115.276 34.3874 110.095C21.8419 104.914 13.0686 83.5587 23.8837 67.1514C26.7776 62.7612 30.3972 58.8347 34.354 55.405C35.0808 54.775 35.8189 54.1619 36.566 53.5656C37.3478 49.9138 38.1231 44.0983 39.5787 41.6771C41.6896 38.1656 37.7919 45.7917 37.6588 52.7104C39.063 51.6326 40.4941 50.6138 41.9367 49.6553C42.2596 47.6175 42.6095 45.6626 43.0395 44.2677C44.0913 40.8559 42.9055 44.9417 42.1051 49.5437C43.3654 48.7109 44.6341 47.9242 45.9007 47.1843C46.147 46.0017 46.3337 45.6081 46.1599 47.0336C47.9237 46.0119 49.6823 45.0814 51.4079 44.2443C52.4786 42.2347 53.8249 40.3747 55.585 39.0865C60.6449 35.383 68.598 31.4171 77.3936 29.8498Z"
        fill="white"
      />
      <path
        d="M88.0303 24.8381C84.2811 26.5651 71.6553 31.1419 66.4641 39.0865C55.649 40.8135 34.6988 50.7442 23.8837 67.1514C13.0686 83.5587 21.8419 104.914 34.3874 110.095C46.9329 115.276 64.2371 111.624 68.1305 98.6706C68.4443 97.6267 68.7889 96.6194 69.1607 95.6482C73.4016 84.5681 81.1641 78.2035 86.7325 76.2186C92.7889 74.0597 98.8454 71.9009 94.952 69.742C91.0585 67.5832 83.7043 72.3327 82.4065 73.1962C81.1086 74.0597 82.839 74.4915 88.4629 71.4691C94.0867 68.4467 97.115 68.015 96.6824 65.4244C96.2498 62.8337 86.2999 64.5608 82.8391 67.1514C79.3782 69.742 84.1369 68.4467 87.1651 67.1514C90.1933 65.8561 95.3846 63.6973 94.952 61.1067C94.5194 58.516 89.3281 58.0843 84.1369 60.2431C78.9456 62.402 77.6478 64.129 82.4065 63.2655C87.1651 62.402 92.3563 59.3796 92.7889 56.3572C93.2215 53.3348 88.8955 52.0395 81.5412 54.1984C74.187 56.3572 75.0522 59.8114 78.9456 58.0843C82.839 56.3572 89.7607 51.6077 88.4629 49.4489C87.1651 47.29 83.3356 47.9202 75.5488 50.9426C67.7619 53.9649 53.9186 61.1067 49.1599 76.2186C44.4013 91.3305 40.0113 86.581 41.7417 81.3998C43.4721 76.2186 49.5286 72.3327 55.585 71.4691M102.306 52.903C106.921 49.0171 116.15 38.8274 116.15 29.1557C116.15 17.0662 100.576 6.27198 68.1305 13.6121C35.6852 20.9521 31.3592 38.6547 30.0614 46.4265C28.7636 54.1984 32.657 55.4937 34.3874 45.563C35.7718 37.6184 36.4062 36.7837 36.5504 37.3594C35.1084 41.5331 32.657 51.0033 34.3874 55.4937C36.5504 61.1067 36.983 45.9948 39.5787 41.6771C42.1743 37.3594 35.6853 49.8807 38.2809 57.2208C40.8765 64.5608 41.3091 49.8807 43.0395 44.2677C44.7699 38.6547 40.4439 53.3349 41.7417 57.2208C43.0395 61.1067 45.2025 53.7666 46.0677 47.7218C46.9329 41.6771 43.9047 54.6302 46.0677 55.4937C48.2307 56.3572 49.096 43.8359 55.585 39.0865C62.0741 34.337 73.3218 29.1557 85.0021 29.1557M86.7325 39.95C93.9426 45.419 110.612 59.3796 119.61 71.4691C130.858 86.5811 158.112 106.011 168.062 115.941M125.234 165.163C123.071 162.141 123.504 156.528 123.504 153.937C121.773 152.21 119.61 147.029 123.504 146.165C127.397 145.302 129.128 154.801 126.965 151.346C124.802 147.892 126.532 144.438 126.965 143.575C127.397 142.711 129.128 141.848 130.858 144.006C132.589 146.165 132.156 150.915 130.858 149.188C129.56 147.46 129.56 142.711 130.858 140.552C132.156 138.393 135.617 140.12 136.049 142.711C136.482 145.302 136.049 147.461 135.617 147.029C135.184 146.597 134.319 141.416 136.915 139.257C139.51 137.098 141.241 141.848 140.808 143.575C140.375 135.371 145.999 134.507 147.297 138.393C148.335 141.502 146.288 144.87 145.134 146.165C145.134 147.029 145.134 149.619 145.134 153.074C145.134 157.391 152.488 173.367 141.241 177.684C125.234 183.142 113.483 159.118 108.48 151.346C103.477 143.575 93.1834 129.473 86.7325 121.741C81.5717 115.556 73.1416 100.18 69.8063 94.0591"
        stroke="#41464C"
      />
      <path
        d="M137.5 139.366C128.45 128.995 105.231 101.015 110.3 99.455C113.029 98.6154 136.947 120.961 152.598 141.299C157.371 147.5 162.804 158.127 171.701 158.127C182.905 158.127 184.352 144.187 183.921 138.052C183.576 133.144 185.213 128.411 186.075 126.658C187.368 124.759 189.351 120.435 186.937 118.332C184.524 116.228 183.346 120.085 183.059 122.276C183.633 120.085 184.093 115.79 181.335 116.141C178.577 116.491 177.887 120.377 177.887 122.276C178.175 120.231 178.146 116.141 175.733 116.141C173.319 116.141 172.716 119.354 172.716 120.961C173.003 118.624 172.63 114.388 168.837 116.141C164.097 118.332 164.959 124.905 166.252 123.59C167.544 122.276 166.252 115.264 162.804 115.264C159.356 115.264 158.495 121.399 161.08 126.658C159.787 130.164 160.516 135.635 161.08 139.366C161.645 143.098 162.229 145.502 162.804 147.693"
        stroke="#41464C"
      />
      <path
        d="M68.4033 29.0683C69.0394 30.3541 69.2995 31.6471 69.2281 32.6849C69.1557 33.7369 68.7586 34.4238 68.1962 34.7021C67.6337 34.9803 66.8467 34.8791 65.9666 34.2983C65.0984 33.7253 64.2284 32.734 63.5923 31.4482C62.9562 30.1624 62.6962 28.8694 62.7676 27.8316C62.8399 26.7797 63.237 26.0927 63.7995 25.8144C64.3619 25.5362 65.149 25.6374 66.029 26.2182C66.8973 26.7912 67.7672 27.7825 68.4033 29.0683Z"
        fill="#41464C"
        stroke="#41464C"
      />
      <path
        d="M47.9889 35.7801C46.7761 33.6576 46.3515 28.5939 50.7178 25.3192C56.1757 21.2258 62.0884 23.9547 65.2721 27.5933"
        stroke="#41464C"
      />
      <circle
        cx={58.9751}
        cy={35.8643}
        r={9.4443}
        fill="white"
        stroke="#41464C"
      />
      <path
        d="M53.3545 33.1137C53.6427 33.6902 54.4786 34.6702 55.5163 33.9784C56.554 33.2867 55.9487 31.9608 55.5163 31.3843"
        stroke="#41464C"
      />
      <path
        d="M58.5425 29.8112C58.8307 30.3877 59.5212 31.0703 60.7043 30.6759C62.0014 30.2435 61.569 28.9465 61.1366 28.5141"
        stroke="#41464C"
      />
      <path
        d="M62.8662 34.4109C63.5868 31.6726 66.671 25.6772 73.2429 23.6019"
        stroke="#41464C"
      />
      <path
        d="M73.2432 23.6018C74.3961 24.4665 79.0364 26.0216 78.4315 23.6018C77.9991 21.8724 74.5402 22.3047 73.2432 23.6018Z"
        stroke="#41464C"
      />
      <path
        d="M52.0298 38.1648C52.6659 39.4506 52.9259 40.7437 52.8545 41.7814C52.7822 42.8334 52.3851 43.5204 51.8226 43.7986C51.2602 44.0769 50.4732 43.9757 49.5931 43.3949C48.7248 42.8219 47.8549 41.8306 47.2188 40.5448C46.5827 39.259 46.3227 37.966 46.394 36.9282C46.4664 35.8762 46.8635 35.1892 47.426 34.911C47.9884 34.6327 48.7754 34.734 49.6555 35.3148C50.5237 35.8877 51.3937 36.879 52.0298 38.1648Z"
        fill="#41464C"
        stroke="#41464C"
      />
      <path
        d="M52.9922 43.9668C38.8927 50.7891 31.0092 58.2179 27.0674 63.5241L39.3476 65.7982L54.8115 48.9698C57.5404 48.515 60.997 46.8777 52.9922 43.9668Z"
        fill="#E6E8EA"
      />
      <path
        d="M113.029 118.558C114.696 119.012 118.032 121.014 118.032 125.38M143.047 99.0003C144.411 99.4551 147.322 101.365 148.05 105.368"
        stroke="#41464C"
      />
      <mask id="path-19-inside-1" fill="white">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M28 118.22C28.6879 118.22 29.3577 118.143 30.0014 117.996C30.0005 118.071 30 118.145 30 118.22C30 128.161 38.0589 136.22 48 136.22C57.9411 136.22 66 128.161 66 118.22C66 108.279 57.9411 100.22 48 100.22C43.3394 100.22 39.0926 101.991 35.8959 104.897C34.3665 102.11 31.4039 100.22 28 100.22C23.0294 100.22 19 104.249 19 109.22C19 114.19 23.0294 118.22 28 118.22ZM100.5 171.22C102.182 171.22 103.801 170.952 105.317 170.457C106.285 173.786 109.358 176.22 113 176.22C115.557 176.22 117.835 175.02 119.299 173.152C121.018 176.178 124.271 178.22 128 178.22C129.224 178.22 130.398 178 131.482 177.597C132.94 182.58 137.545 186.22 143 186.22C149.627 186.22 155 180.847 155 174.22C155 172.611 154.684 171.077 154.109 169.675C156.4 168.67 158 166.382 158 163.72C158 160.13 155.09 157.22 151.5 157.22C148.359 157.22 145.739 159.447 145.132 162.409C144.44 162.285 143.728 162.22 143 162.22C140.809 162.22 138.756 162.807 136.988 163.832C135.363 160.509 131.949 158.22 128 158.22C124.271 158.22 121.018 160.261 119.299 163.287C118.279 161.987 116.865 161.01 115.237 160.537C115.732 159.021 116 157.401 116 155.72C116 147.159 109.06 140.22 100.5 140.22C91.9396 140.22 85 147.159 85 155.72C85 164.28 91.9396 171.22 100.5 171.22ZM188 153.22C188 157.638 184.418 161.22 180 161.22C179.111 161.22 178.255 161.075 177.456 160.807C176.293 163.975 173.393 166.22 170 166.22C165.582 166.22 162 162.414 162 157.72C162 153.025 165.582 149.22 170 149.22C170.981 149.22 171.921 149.407 172.789 149.751C174.081 147.07 176.825 145.22 180 145.22C184.418 145.22 188 148.802 188 153.22Z"
        />
      </mask>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 118.22C28.6879 118.22 29.3577 118.143 30.0014 117.996C30.0005 118.071 30 118.145 30 118.22C30 128.161 38.0589 136.22 48 136.22C57.9411 136.22 66 128.161 66 118.22C66 108.279 57.9411 100.22 48 100.22C43.3394 100.22 39.0926 101.991 35.8959 104.897C34.3665 102.11 31.4039 100.22 28 100.22C23.0294 100.22 19 104.249 19 109.22C19 114.19 23.0294 118.22 28 118.22ZM100.5 171.22C102.182 171.22 103.801 170.952 105.317 170.457C106.285 173.786 109.358 176.22 113 176.22C115.557 176.22 117.835 175.02 119.299 173.152C121.018 176.178 124.271 178.22 128 178.22C129.224 178.22 130.398 178 131.482 177.597C132.94 182.58 137.545 186.22 143 186.22C149.627 186.22 155 180.847 155 174.22C155 172.611 154.684 171.077 154.109 169.675C156.4 168.67 158 166.382 158 163.72C158 160.13 155.09 157.22 151.5 157.22C148.359 157.22 145.739 159.447 145.132 162.409C144.44 162.285 143.728 162.22 143 162.22C140.809 162.22 138.756 162.807 136.988 163.832C135.363 160.509 131.949 158.22 128 158.22C124.271 158.22 121.018 160.261 119.299 163.287C118.279 161.987 116.865 161.01 115.237 160.537C115.732 159.021 116 157.401 116 155.72C116 147.159 109.06 140.22 100.5 140.22C91.9396 140.22 85 147.159 85 155.72C85 164.28 91.9396 171.22 100.5 171.22ZM188 153.22C188 157.638 184.418 161.22 180 161.22C179.111 161.22 178.255 161.075 177.456 160.807C176.293 163.975 173.393 166.22 170 166.22C165.582 166.22 162 162.414 162 157.72C162 153.025 165.582 149.22 170 149.22C170.981 149.22 171.921 149.407 172.789 149.751C174.081 147.07 176.825 145.22 180 145.22C184.418 145.22 188 148.802 188 153.22Z"
        fill="hsl(var(--secondary))"
      />
      <path
        d="M30.0014 117.996L31.0013 118.009L31.0167 116.74L29.7799 117.021L30.0014 117.996ZM35.8959 104.897L35.0191 105.378L35.6295 106.491L36.5685 105.637L35.8959 104.897ZM105.317 170.457L106.277 170.178L105.989 169.185L105.006 169.506L105.317 170.457ZM119.299 173.152L120.169 172.658L119.432 171.362L118.512 172.535L119.299 173.152ZM131.482 177.597L132.441 177.316L132.14 176.286L131.134 176.66L131.482 177.597ZM154.109 169.675L153.708 168.759L152.814 169.151L153.184 170.054L154.109 169.675ZM145.132 162.409L144.956 163.393L145.916 163.565L146.112 162.609L145.132 162.409ZM136.988 163.832L136.09 164.271L136.562 165.235L137.49 164.697L136.988 163.832ZM119.299 163.287L118.512 163.905L119.432 165.078L120.169 163.781L119.299 163.287ZM115.237 160.537L114.286 160.226L113.965 161.209L114.958 161.497L115.237 160.537ZM177.456 160.807L177.774 159.859L176.852 159.55L176.517 160.462L177.456 160.807ZM172.789 149.751L172.422 150.681L173.286 151.022L173.69 150.185L172.789 149.751ZM29.7799 117.021C29.2084 117.151 28.6129 117.22 28 117.22V119.22C28.7629 119.22 29.507 119.134 30.2228 118.972L29.7799 117.021ZM31 118.22C31 118.149 31.0004 118.079 31.0013 118.009L29.0014 117.984C29.0005 118.063 29 118.141 29 118.22H31ZM48 135.22C38.6112 135.22 31 127.609 31 118.22H29C29 128.713 37.5066 137.22 48 137.22V135.22ZM65 118.22C65 127.609 57.3888 135.22 48 135.22V137.22C58.4934 137.22 67 128.713 67 118.22H65ZM48 101.22C57.3888 101.22 65 108.831 65 118.22H67C67 107.726 58.4934 99.2198 48 99.2198V101.22ZM36.5685 105.637C39.5884 102.892 43.5978 101.22 48 101.22V99.2198C43.0811 99.2198 38.5968 101.09 35.2232 104.157L36.5685 105.637ZM28 101.22C31.0244 101.22 33.6583 102.898 35.0191 105.378L36.7726 104.416C35.0747 101.321 31.7835 99.2198 28 99.2198V101.22ZM20 109.22C20 104.802 23.5817 101.22 28 101.22V99.2198C22.4772 99.2198 18 103.697 18 109.22H20ZM28 117.22C23.5817 117.22 20 113.638 20 109.22H18C18 114.743 22.4772 119.22 28 119.22V117.22ZM105.006 169.506C103.589 169.969 102.075 170.22 100.5 170.22V172.22C102.288 172.22 104.012 171.935 105.627 171.407L105.006 169.506ZM113 175.22C109.815 175.22 107.124 173.092 106.277 170.178L104.357 170.736C105.445 174.481 108.901 177.22 113 177.22V175.22ZM118.512 172.535C117.229 174.171 115.237 175.22 113 175.22V177.22C115.878 177.22 118.44 175.868 120.086 173.769L118.512 172.535ZM128 177.22C124.645 177.22 121.717 175.384 120.169 172.658L118.43 173.646C120.319 176.972 123.897 179.22 128 179.22V177.22ZM131.134 176.66C130.159 177.022 129.104 177.22 128 177.22V179.22C129.345 179.22 130.636 178.978 131.83 178.534L131.134 176.66ZM143 185.22C138.001 185.22 133.779 181.885 132.441 177.316L130.522 177.878C132.102 183.276 137.089 187.22 143 187.22V185.22ZM154 174.22C154 180.295 149.075 185.22 143 185.22V187.22C150.18 187.22 156 181.399 156 174.22H154ZM153.184 170.054C153.71 171.337 154 172.743 154 174.22H156C156 172.479 155.657 170.816 155.035 169.296L153.184 170.054ZM154.511 170.591C157.152 169.432 159 166.793 159 163.72H157C157 165.971 155.648 167.908 153.708 168.759L154.511 170.591ZM159 163.72C159 159.578 155.642 156.22 151.5 156.22V158.22C154.538 158.22 157 160.682 157 163.72H159ZM151.5 156.22C147.875 156.22 144.853 158.791 144.153 162.208L146.112 162.609C146.625 160.104 148.844 158.22 151.5 158.22V156.22ZM143 163.22C143.668 163.22 144.322 163.279 144.956 163.393L145.309 161.424C144.559 161.29 143.787 161.22 143 161.22V163.22ZM137.49 164.697C139.109 163.758 140.99 163.22 143 163.22V161.22C140.629 161.22 138.403 161.856 136.487 162.967L137.49 164.697ZM128 159.22C131.552 159.22 134.626 161.278 136.09 164.271L137.887 163.393C136.1 159.739 132.345 157.22 128 157.22V159.22ZM120.169 163.781C121.717 161.055 124.645 159.22 128 159.22V157.22C123.897 157.22 120.319 159.467 118.43 162.794L120.169 163.781ZM114.958 161.497C116.381 161.911 117.619 162.765 118.512 163.905L120.086 162.67C118.94 161.209 117.35 160.109 115.516 159.576L114.958 161.497ZM115 155.72C115 157.295 114.749 158.809 114.286 160.226L116.187 160.847C116.715 159.232 117 157.508 117 155.72H115ZM100.5 141.22C108.508 141.22 115 147.712 115 155.72H117C117 146.607 109.613 139.22 100.5 139.22V141.22ZM86 155.72C86 147.712 92.4919 141.22 100.5 141.22V139.22C91.3873 139.22 84 146.607 84 155.72H86ZM100.5 170.22C92.4919 170.22 86 163.728 86 155.72H84C84 164.832 91.3873 172.22 100.5 172.22V170.22ZM180 162.22C184.971 162.22 189 158.19 189 153.22H187C187 157.086 183.866 160.22 180 160.22V162.22ZM177.138 161.755C178.039 162.057 179.001 162.22 180 162.22V160.22C179.22 160.22 178.472 160.093 177.774 159.859L177.138 161.755ZM170 167.22C173.856 167.22 177.103 164.671 178.395 161.151L176.517 160.462C175.483 163.279 172.931 165.22 170 165.22V167.22ZM161 157.72C161 162.909 164.973 167.22 170 167.22V165.22C166.19 165.22 163 161.92 163 157.72H161ZM170 148.22C164.973 148.22 161 152.531 161 157.72H163C163 153.52 166.19 150.22 170 150.22V148.22ZM173.157 148.821C172.174 148.432 171.11 148.22 170 148.22V150.22C170.852 150.22 171.667 150.383 172.422 150.681L173.157 148.821ZM180 144.22C176.426 144.22 173.341 146.303 171.888 149.317L173.69 150.185C174.822 147.837 177.223 146.22 180 146.22V144.22ZM189 153.22C189 148.249 184.971 144.22 180 144.22V146.22C183.866 146.22 187 149.354 187 153.22H189Z"
        fill="#41464C"
        mask="url(#path-19-inside-1)"
      />
      <path
        d="M22 108.72L16 102.72L11 118.22L37 138.72L68 134.22V112.72L55.5 118.22L22 108.72Z"
        fill="hsl(var(--secondary))"
      />
      <path
        d="M94 153.72L71.5 135.22V163.22L114 188.72L143.5 187.72L150 184.22L156 178.72L159 174.22L180 168.72L188.5 162.22L193.5 147.72L161 156.22L159 160.22L143.5 165.72L127.5 172.72L94 153.72Z"
        fill="hsl(var(--secondary))"
      />
      <path
        d="M44.8693 105.934L86.4828 126.413L60.2835 143.476L18.67 122.997L44.8693 105.934Z"
        fill="hsl(var(--primary))"
      />
      <path
        d="M19.7766 122.808L33.8677 90.8503L76.5429 109.572L60.5077 142.853L19.7766 122.808Z"
        fill="white"
        stroke="#41464C"
      />
      <circle cx={46.6718} cy={116.34} r={4.37976} fill="#E6E8EA" />
      <circle cx={52.1318} cy={115.26} r={1.08003} fill="#E6E8EA" />
    </svg>
  );
}
