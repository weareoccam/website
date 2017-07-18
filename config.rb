activate :autoprefixer do |config|
  config.browsers = ['last 4 versions']
end
activate :directory_indexes

require "lib/image_helpers"
helpers ImageHelpers

set :css_dir, 'styles'
set :js_dir, 'scripts'
set :images_dir, 'images'

activate :external_pipeline,
  name: :webpack,
  command: build? ? "./node_modules/webpack/bin/webpack.js --bail --color -p" : "./node_modules/webpack/bin/webpack.js --watch -d --progress --color",
  source: ".tmp/dist",
  latency: 1

configure :development do
  activate :livereload
end

configure :build do
  activate :minify_css
  activate :asset_hash
end

after_build do |builder|
  html_paths = sitemap.resources.select{ |r| r.ext == '.html' }.map{ |r| r.destination_path }
  header_file_contents = html_paths.map{ |html_path|
    page = Nokogiri::HTML(open("#{config[:build_dir]}/#{html_path}"))
    js_paths = page.css('script[src$=js]:not([src^=http])').map{ |s| s.attributes['src'].value }.uniq
    css_paths = page.css('link[href$=css]:not([href^=http])').map{ |s| s.attributes['href'].value }.uniq
    image_paths = page.css('img[src]:not([src^=http])').map{ |s| s.attributes['src'].value }.uniq

    js_headers = js_paths.map{ |p| "<#{p}>; rel=preload; as=script" }
    css_headers = css_paths.map{ |p| "<#{p}>; rel=preload; as=stylesheet" }
    image_headers = image_paths.map{ |p| "<#{p}>; rel=preload; as=image" }

    all_headers = js_headers + css_headers + image_headers
    header_path = html_path.gsub(/index\.html/, '')

    "/#{header_path}\n  Link: #{all_headers.join(',')}"
  }.join("\n")

  File.write("#{config[:build_dir]}/_headers", header_file_contents)
end

# Netlify needs the 404 page to exist as a file in the root directory
page '/404.html', directory_index: false