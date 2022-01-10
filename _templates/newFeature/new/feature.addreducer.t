---
to: src/store/reducer.ts
inject: true
skip_if: ./<%= role %>/<%= h.changeCase.camel(name) %>
before: HYGEN-ADD-REDUCER
---
    <%= h.changeCase.camel(role) %><%= h.changeCase.pascal(name) %>: <%= h.changeCase.pascal(role) %><%= h.changeCase.pascal(name) %>,