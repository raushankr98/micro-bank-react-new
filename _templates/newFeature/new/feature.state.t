---
to: src/shared/utilities/interfaces.ts
inject: true
skip_if: <%= h.changeCase.camel(role) %><%= h.changeCase.pascal(name) %>
before: HYGEN-UPDATE
---
  <%= h.changeCase.camel(role) %><%= h.changeCase.pascal(name) %>: any;