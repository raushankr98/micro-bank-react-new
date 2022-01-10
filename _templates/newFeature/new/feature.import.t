---
to: src/store/reducer.ts
inject: true
skip_if: ./<%= role %>/<%= h.changeCase.camel(name) %>
before: HYGEN-IMPORT
---
import <%= h.changeCase.pascal(role) %><%= h.changeCase.pascal(name) %> from '../features/<%= role %>/<%= h.changeCase.camel(name) %>/store/reducers';