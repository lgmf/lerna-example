import { firstLetterUppercase } from '@my-org/core/utils';
 
import './App.css';

export default {
  name: 'App',
  filters: {
    firstLetterUppercase
  },
  data() {
    return {
      message: 'hello from lerna'
    }
  }
};
