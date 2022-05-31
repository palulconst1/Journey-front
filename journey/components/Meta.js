import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Journey Travel',
  keywords: 'travel, tikets',
  description: 'Get your tikets fast, cheap and safe!',
}

export default Meta
