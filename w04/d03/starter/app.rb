require 'sinatra'
#require 'sinatra/reloader'

get '/' do
  erb :index
end

# Coin toss
get '/coin_toss' do
  random_num = Random.rand
  @coin
  if random_num > 0.5
    @coin = "Heads"
  else
    @coin = "Tails"
  end
end

# Dice roll
get '/dice_roll' do
  random_num = Random.rand(6)
  @die = random_num.to_s
end

# Magic 8 ball
get '/magic8ball/:question' do
  @question = params[:question]
  eightball = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it yes",
    "Most likely",
    "Outlook good",
    "Yes", "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
  ]
  random_num = Random.rand(20)
  @magicball = eightball[random_num]

end






  random_num = Random.rand
  if random_num > 0.5
    print "Heads"
  else
    print "Tails"
  end

  random_num = Random.rand(6)
  @die = random_num.to_s
  print @die

  eightball = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it yes",
    "Most likely",
    "Outlook good",
    "Yes", "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
  ]
  random_num = Random.rand(20)
  @magicball = eightball[random_num]
  print @magicball
