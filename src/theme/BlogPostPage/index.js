import { ReactCusdis } from 'react-cusdis'
import { useColorMode } from '@docusaurus/theme-common';


function App() {
  return (
    <div>
      <ReactCusdis
        attrs={{
          host: 'https://dfff-nijxcc7sb-ssangyongsports.vercel.app',
          appId: '583956c6-98dd-40e3-9d48-7ee4480f3d28',
          pageId: 'PAGE_ID',
          pageTitle: 'PAGE_TITLE',
          pageUrl: 'PAGE_URL'
        }}
      />

    </div>
  )
}
