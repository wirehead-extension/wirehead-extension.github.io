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
      Once you use Wirehead for a couple of days, we hope you'll find it
      informative and useful!
    </p>
    <p>
      Wirehead is open source, free to use, and free to copy. It's currently in
      the process of being made available in the Chrome store, but for now you
      can use it by loading it into Chrome in Deloper Mode. Your data remains
      local to your machine. Check out our README in{' '}
      <a href="https://github.com/wirehead-extension/wirehead">
        the source code
      </a>{' '}
      for more details!
    </p>
  </Layout>
)

export default IndexPage
