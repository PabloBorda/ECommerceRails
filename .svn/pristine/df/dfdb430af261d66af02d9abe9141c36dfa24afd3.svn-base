class ProductfamiliesController < ApplicationController
  # GET /productfamilies
  # GET /productfamilies.xml
  def index
    @productfamilies = Productfamily.find(:all)

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @productfamilies }
    end
  end

  # GET /productfamilies/1
  # GET /productfamilies/1.xml
  def show
    @productfamily = Productfamily.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @productfamily }
    end
  end

  # GET /productfamilies/new
  # GET /productfamilies/new.xml
  def new
    @productfamily = Productfamily.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @productfamily }
    end
  end

  # GET /productfamilies/1/edit
  def edit
    @productfamily = Productfamily.find(params[:id])
  end

  # POST /productfamilies
  # POST /productfamilies.xml
  def create
    @productfamily = Productfamily.new(params[:productfamily])

    respond_to do |format|
      if @productfamily.save
        flash[:notice] = 'Productfamily was successfully created.'
        format.html { redirect_to(@productfamily) }
        format.xml  { render :xml => @productfamily, :status => :created, :location => @productfamily }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @productfamily.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /productfamilies/1
  # PUT /productfamilies/1.xml
  def update
    @productfamily = Productfamily.find(params[:id])

    respond_to do |format|
      if @productfamily.update_attributes(params[:productfamily])
        flash[:notice] = 'Productfamily was successfully updated.'
        format.html { redirect_to(@productfamily) }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @productfamily.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /productfamilies/1
  # DELETE /productfamilies/1.xml
  def destroy
    @productfamily = Productfamily.find(params[:id])
    @productfamily.destroy

    respond_to do |format|
      format.html { redirect_to(productfamilies_url) }
      format.xml  { head :ok }
    end
  end
end
