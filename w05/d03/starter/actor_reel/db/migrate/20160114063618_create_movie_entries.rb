class CreateMovieEntries < ActiveRecord::Migration
  def change
    create_table :movie_entries do |t|
      t.string :title, null: false, index: true
      t.string :year, null: false, index: true
      t.string :poster_url
    end
  end
end
