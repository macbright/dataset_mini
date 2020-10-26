class Api::V1::DatasetsController < ApplicationController

  def create
    @dataset = Dataset.new dataset_params
    if @dataset.save
      render json: {
        messages: "dataset Successfully",
        is_success: true,
        data: {user: @dataset}
      }, status: :ok
    else
      render json: {
        messages: @dataset.errors,
        is_success: false,
        data: {}
      }, status: :unprocessable_entity
    end
  end

  

  def update
    @dataset = Dataset.find_by(id: params[:id])
    if @dataset.update(dataset_params)
      render json: {
        messages: "Info Successfully Updated",
        is_success: true,
        data: {user: @dataset}
      }, status: :ok
    else
      render json: {
        messages: "Updating Failded",
        is_success: false,
        data: {}
      }, status: :unprocessable_entity
    end
  end

  def show 
    @dataset = Dataset.find_by(id: params[:id])
    render json: @dataset
  end
   def index 
    @dataset = Dataset.all
    render json: @dataset
  end

  def destroy
    @dataset = Dataset.find_by(id: params[:id])
    head :no_content
  end


  private
  def dataset_params
    params.permit(:id, :name, :timestamp, :header_1, :header_2, :header_3, :header_4)
  end

end