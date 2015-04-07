json.array!(@states) do |state|
  json.extract! state, :id, :name, :data
  json.url state_url(state, format: :json)
end
