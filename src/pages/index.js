import React from 'react'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>About us</h1>
    <p>
      Wirehead is a Chrome extension designed and built by{' '}
      <a href="https://github.com/cboetto">Calvin Boetto</a>,{' '}
      <a href="https://github.com/kevingislason">Kevin Gislason</a>,{' '}
      <a href="https://github.com/dustinheestand">Dustin Heestand</a>, and{' '}
      <a href="https://github.com/parigu2">Minkyu Yang</a>.
    </p>
    <p>
      We're hoping to help you (and us!) kick (y)our addiction to distraction.
      Your data remains local to your machine. Once you use Wirehead for a
      couple of days, we hope you'll find it informative and useful!{' '}
      <a href="https://chrome.google.com/webstore/detail/wirehead/olbnlfcplijajgbkfgpjamlddfbpbebl/">
        Download it
      </a>{' '}
      from the Chrome store.
    </p>
    <p>
      Wirehead is open source, free to use, and free to copy. If you want to
      contribute, you can use it by loading it into Chrome in Deloper Mode.
      Check out our README in{' '}
      <a href="https://github.com/wirehead-extension/wirehead">
        the source code
      </a>{' '}
      for more details!
    </p>
  </Layout>
)

export default IndexPage
