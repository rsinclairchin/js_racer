get '/' do
  # leaderboard, BRING IT button, jqueried sign up form
  @games = Game.all
  erb :index
end

get '/new' do
  erb :_seal_your_fate
end

post '/' do
  @game = Game.create(p1:params[:p1], p2:params[:p2])
  redirect "/racetrack/#{@game.id}"
end

get '/racetrack/:id' do
  @game = Game.find(params[:id])
  erb :game
end

put '/:id' do
  p request
  @game = Game.find(params[:id])
  if params[:winner] == "p1"
    @game.update(winner: @game.p1)
  else
    @game.update(winner: @game.p2)
  end
  redirect '/'
end
