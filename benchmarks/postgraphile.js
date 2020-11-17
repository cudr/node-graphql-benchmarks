const queries = [
  `
      query AlbumsTracksGenreAll {
        albums(first: 10) {
          nodes {
            albumId
            title
            tracks(first: 5) {
              nodes {
                trackId
                name
                genre {
                  name
                }
              }
            }
          }
        }
      }
    `,
  `
      query AlbumsTracksGenreSome {
        albums(condition: {artistId: 127}) {
          nodes {
            albumId
            title
            tracks {
              nodes {
                trackId
                name
                genre {
                  name
                }
              }
            }
          }
        }
      }
    `,
  `
      query TracksMediaAll {
        tracks(first: 10) {
          nodes {
            trackId
            name
            mediaType {
              name
            }
          }
        }
      }
    `,
  `
      query TracksMediaAll {
        tracks(condition: {composer: "Kurt Cobain"}) {
          nodes {
            trackId
            name
            mediaType {
              name
            }
            album {
              albumId
              title
            }
          }
        }
      }    
    `,
  `
      query ArtistsCollaboration {
        artists(filter: {albums: {some: {tracks: {some: {composer: {equalTo: "Ludwig van Beethoven"}}}}}}) {
          nodes {
            artistId
            name
          }
        }
      }    
    `,
  `
      query ArtistsByArticleId {
        artist(artistId: 3) {
          name
          artistId
        }
      }
    `,
]

module.exports.params = {
  url: 'http://localhost:8090/graphql',
  requests: queries.map(query => ({ body: JSON.stringify({ query }) })),
}
