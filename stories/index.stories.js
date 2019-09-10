import { storiesOf } from '@storybook/vue';
// import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Welcome from './Welcome';
import HomeDetails from '../src/components/HomeDetails.vue';

storiesOf('Welcome', module).add('to Storybook', () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo('Button') },
}));

storiesOf('Hello', module)
  .add('Home Details (without JSX)', () => ({
    components: { HomeDetails },
    template: '<HomeDetails msg="Welcome to a Vue.js + TypeScript App" />',
  }))
  .add('Home Details (with JSX)', () => ({
    components: { HomeDetails },
    render(h) {
      return (
        <HomeDetails msg="Welcome to a Vue.js + TypeScript App (using JSX)" />
      );
    },
  }));
