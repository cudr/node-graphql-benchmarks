const queries = [
  `
      query AlbumsTracksGenreAll {
        Album(limit: 10) {
          AlbumId
          Title
          Tracks(limit: 5) {
            TrackId
            Name
            Genre {
              Name
            }
          }
        }
      }
    `,
  `
      query AlbumsTracksGenreSome {
        Album (where: { ArtistId: { _eq: 127 } }) {
          AlbumId
          Title
          Tracks {
            TrackId
            Name
            Genre {
              Name
            }
          }
        }
      }
    `,
  `
      query TracksMediaAll {
        Track(limit: 10) {
          TrackId
          Name
          MediaType {
            Name
          }
        }
      }
    `,
  `
      query TracksMediaSome {
        Track (where: { Composer: { _eq: "Kurt Cobain" } }){
          TrackId
          Name
          Album {
            AlbumId
            Title
          }
          MediaType {
            Name
          }
        }
      }
    `,
  `
    query ArtistsCollaboration {
        Artist(
          where: {
              Albums: {
              Tracks: {
                Composer: {
                  _eq:"Ludwig van Beethoven"
                }
              }
            }
          }
        ) {
          ArtistId
          Name
        }
      }
    `,
  `
      query ArtistsByArticleId {
        Artist(where: { ArtistId: { _eq: 3 } }) {
          ArtistId
          Name
        }
      }
    `,
]

module.exports.params = {
  url: 'http://localhost:8080/v1/graphql',
  requests: queries.map(query => ({ body: JSON.stringify({ query }) })),
}
