// export default function Root(props) {
//   return <section><h1>Hello Penguin</h1></section>;
// }


import React, { useState, useEffect } from 'react'
import Editor from "./components/Editor"
import useLocalStorage from "./hooks/useLocalStorage"


function Root() {
  const [html, setHtml] = useLocalStorage('html', '')
  const [css, setCss] = useLocalStorage('css', '')
  const [javascript, setJavascript] = useLocalStorage('javascript', '')
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${javascript}</script>
        </html>
      `)
    }, 250)
    // console.log(srcDoc)
    return () => clearTimeout(timeout)
  }, [html, css, javascript])

  return (
    // <div className="app">
    //   <div className="pane top-pane">
    //     <Editor
    //       launguage="xml"
    //       label="HTML"
    //       value={html}
    //       onChange={setHtml}
    //     />
    //     {/* <Editor
    //       launguage="css"
    //       label="CSS"
    //       value={css}
    //       onChange={setCss}
    //     />
    //     <Editor
    //       launguage="javascript"
    //       label="JavaScript"
    //       value={javascript}
    //       onChange={setJavascript}
    //     /> */}
    //   </div>
    // </div>
    <Editor
          launguage="xml"
          label="HTML"
          value={html}
          onChange={setHtml}
        />
  );
}

export default Root;
