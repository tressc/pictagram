# json.id image.id
# json.author_id image.author_id
json.image_url asset_path(image.image.url)
json.extract! image, :id, :author_id, :created_at, :updated_at
