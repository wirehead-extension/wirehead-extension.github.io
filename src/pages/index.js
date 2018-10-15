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
      Download our extension to your desktop, open your extensions tab in Chrome
      (chrome://extensions) and drag the file onto the page. Once you use
      Wirehead for a couple of days, we hope you'll find it informative and
      useful!
    </p>
    <p>
      Wirehead is open source, free to use, and free to copy. Your data remains
      local to your machine. Check out{' '}
      <a href="https://github.com/wirehead-extension/wirehead">
        the source code
      </a>{' '}
      for more details!
    </p>
    <form
      method="get"
      action="https://dl.dropboxusercontent.com/s/si74hd13mqy12ee/wirehead.crx"
    >
      <button type="submit" className="btn btn-dark">
        Download Wirehead!
      </button>
    </form>
  </Layout>
)

export default IndexPage
