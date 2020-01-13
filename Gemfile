source "https://rubygems.org"

# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# This will help ensure the proper Jekyll version is running.
# Happy Jekylling!
gem "jekyll", "~> 3.8.3"

gem "rake", "~> 12.3.1"

gem "nokogiri", "~> 1.10"

# This is the default theme for new Jekyll sites. You may change this to anything you like.
gem "minima", "~> 2.0"

gem "htmlentities", "~> 4.3.4"

# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
# gem "github-pages", group: :jekyll_plugins

# If you have any plugins, put them here!
gem 'sprockets', '=4.0.0.beta8'
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.6"
  gem 'jekyll-assets', :git => 'https://github.com/jekyll/jekyll-assets.git'
  gem 'jekyll-sitemap'
  gem "image_optim"
  gem "image_optim_pack" # Optional
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.0" if Gem.win_platform?

group :dev do
   gem 'listen', '~> 3.0' # NOTE: for TCP functionality, use '~> 2.10' for now
end
