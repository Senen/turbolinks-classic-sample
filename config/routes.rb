Rails.application.routes.draw do
  root 'application#home', format: :html
  get 'ajax', to: 'application#ajax', format: :js
end