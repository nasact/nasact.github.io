const searchClient = algoliasearch(
  '7CQPGKE1IR',
  '030785ac665c56451e7a6cba1c17d7d1'
);

autocomplete({
  container: '#aa-search-input',
  placeholder: 'Search for',
  getSources({ query }) {
    return [
      {
        sourceId: 'pages',
        getItems() {
          return searchClient.initIndex('site_index').search(query);
        },
        templates: {
          item({ item, components }) {
            return `
              <a href="${item.url}" class="aa-ItemLink">
                <div class="aa-ItemContent">
                  <div class="aa-ItemTitle">
                    ${components.Highlight({
                      hit: item,
                      attribute: 'title',
                    })}
                  </div>
                  <div class="aa-ItemExcerpt">
                    ${components.Snippet({
                      hit: item,
                      attribute: 'content',
                    })}
                  </div>
                </div>
              </a>
            `;
          },
        },
      },
    ];
  },
});
