import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action, set } from '@ember/object';

const postsUrl = 'https://retoolapi.dev/lfaPzW/dogs';

export default class MainPageComponent extends Component {
  @tracked posts;
  @tracked showOnlyFavorites = false;

  constructor(owner, args) {
    super(owner, args);
    this.fetchPosts();
  }

  async fetchPosts() {
    const postsResponse = await fetch(postsUrl);
    const posts = await postsResponse.json();
    this.posts = posts;
  }

  @action
  favoriteClicked(post) {
    set(post, 'isFavorite', !post.isFavorite);
  }

  @action
  toggleShowOnlyFavorites() {
    this.showOnlyFavorites = !this.showOnlyFavorites;
  }
}
