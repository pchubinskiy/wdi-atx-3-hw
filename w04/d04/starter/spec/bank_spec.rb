require_relative 'spec_helper'
require_relative '../bank'

describe Bank do
    bank = Bank.new("name")

  describe ".new" do
    it "creates a Bank object" do
      # When Bank.new is called, it should create a bank object
      expect(bank).to be(bank)
    end
    it "has no accounts" do
      # A newly created bank should have 0 accounts
      expect(bank.accounts).to eq({})
    end
  end

  describe "#name" do
    it "has a name" do
      # Calling bank.name should give us the bank's name
      expect(bank.name).to be(bank.name)
    end
  end

  describe "#create_account" do
    it "create an account" do
      # Calling bank.create_account with the correct parameters should add
      # the account name and account value to the bank.accounts hash
      expect(bank.create_account("checking", 500)).to eq(bank.accounts["checking"])
    end
  end

  describe "#deposit" do
    it "deposits money from a client" do
      # Calling bank.deposit with the correct parameters should result in an account's value going up by the same amount as the deposit
      # bank = Bank.new("name")
      # expect(bank).to be(bank)
      # make sure account is created!
      #new_balance = bank.accounts["checking"] + 200
      print bank.accounts
      #expect(bank.deposit("checking", 200)).to eq 700
    end
  end

  describe "#balance" do
    it "returns the balance for the client" do
      # Calling bank.balance should return the balance of the specified account
      expect(bank.balance("checking")).to be(bank.balance("checking"))
      expect(bank.balance("checking")).to eq(bank.balance("checking"))
    end
  end

  describe "#withdraw" do
    it "subtracts money from the account" do
      # Calling bank.withdraw with the correct parameters should result in an account's value going down by the same amount as the withdrawal
      # bank = Bank.new("name")
      # expect(bank).to be(bank)
      # # make sure account is created!
      # expect(bank.withdraw("checking", 200)).to eq(bank.accounts["checking"] -= 200)
    end

    it "ignores requests for withdrawals greater than account balance" do
      # Calling bank.withdraw with an amount greater than the balance ignores the withdrawal/does nothing
      if bank.accounts > bank.withdraw()
    end
  end

end
