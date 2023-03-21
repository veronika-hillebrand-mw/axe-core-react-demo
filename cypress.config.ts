import { defineConfig } from "cypress";
import { type ConfigData } from "html-validate";
import htmlvalidate from "cypress-html-validate/plugin";

const htmlValidateConfig: ConfigData = {
  rules: {
    "require-sri": "off"
  }
}

export default defineConfig({
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      htmlvalidate.install(on, htmlValidateConfig);
      on('task', {
        log(message) {
          console.log(message)
    
          return null
        },
        table(message) {
          console.table(message)
    
          return null
        }
      })
    },
  },
});
