class Bank

  attr_accessor :name
  attr_reader :accounts

  def initialize(name)
    @name = name
    @accounts = {}
  end

  def create_account(account, deposit)
    accounts[account] = deposit
  end

  def deposit(account, amount)
    accounts[account] += amount
  end

  def withdraw(account, amount)
    accounts[account] -= amount if amount <= accounts[account]
  end

  def balance(account)
    accounts[account]
  end

  # def list_accounts
  #
  # end

  # def compute_interest
  #
  # end

end

bank = Bank.new("Paul")
print bank.create_account("checking", 500)
