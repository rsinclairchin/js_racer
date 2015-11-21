get '/' do
  # leaderboard, BRING IT button, jqueried sign up form
  erb :index
end

get '/new' do
  erb :_seal_your_fate
end

post '/' do
  @game = Game.new(params)
  redirect '/racetrack'
end

get '/racetrack' do
  erb :game
end

put '/:id' do
  @game = Game.find(params[:id])
  @game.update(params[:winner])
  redirect '/'
end
