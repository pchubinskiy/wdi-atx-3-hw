class MovieEntriesController < ApplicationController
  before_action :set_movie_entry, only: [:show, :edit, :update, :destroy]

  # GET /movie_entries
  # GET /movie_entries.json
  def index
    @movie_entries = MovieEntry.all
  end

  # GET /movie_entries/1
  # GET /movie_entries/1.json
  def show
  end

  # GET /movie_entries/new
  def new
    @movie_entry = MovieEntry.new
  end

  # GET /movie_entries/1/edit
  def edit
  end

  # POST /movie_entries
  # POST /movie_entries.json
  def create
    @movie_entry = MovieEntry.new(movie_entry_params)

    respond_to do |format|
      if @movie_entry.save
        format.html { redirect_to @movie_entry, notice: 'Movie entry was successfully created.' }
        format.json { render :show, status: :created, location: @movie_entry }
      else
        format.html { render :new }
        format.json { render json: @movie_entry.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /movie_entries/1
  # PATCH/PUT /movie_entries/1.json
  def update
    respond_to do |format|
      if @movie_entry.update(movie_entry_params)
        format.html { redirect_to @movie_entry, notice: 'Movie entry was successfully updated.' }
        format.json { render :show, status: :ok, location: @movie_entry }
      else
        format.html { render :edit }
        format.json { render json: @movie_entry.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /movie_entries/1
  # DELETE /movie_entries/1.json
  def destroy
    @movie_entry.destroy
    respond_to do |format|
      format.html { redirect_to movie_entries_url, notice: 'Movie entry was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_movie_entry
      @movie_entry = MovieEntry.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def movie_entry_params
      params[:movie_entry]
    end
end
