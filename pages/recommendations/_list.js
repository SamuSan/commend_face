import Recommendation from './_recommendation.js'

function List({ Component, pageProps }) {
  const thing = [
    { title: 'ting', link: 'tong', description: 'I am a describe' },
    { title: 'tang', link: 'tong', description: 'I am a describe' },
    { title: 'teng', link: 'tong', description: 'I am a describe' },
    { title: 'tiug', link: 'tong', description: 'I am a describe' },
  ]

  const cards = () => {
    return thing.map((x) => {
      return <Recommendation recommendation={x} />
    });
  }

  return cards()
}

export default List
