require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  def setup
    @user = User.new(name: "mintchkin", email: "mintchkin@server.test",
        password: "password", password_confirmation: "password")
  end

  test "should be valid user" do
    assert @user.valid?
  end

  test "name should be present" do
    @user.name = "    "
    assert_not @user.valid?
  end

  test "name should not be too long" do
    @user.name = "a" * 101
    assert_not @user.valid?
  end

  test "email should be present" do
    @user.email = "     "
    assert_not @user.valid?
  end

  test "email should be well formed" do
    @user.email = "abcdefg"
    assert_not @user.valid?
  end

  test "email should not be too long" do
    @user.email = @user.email.rjust(256, "a")
    assert_not @user.valid?
  end

  test "email should be unique" do
    duplicate_entry = @user.dup
    duplicate_entry.email.swapcase!
    @user.save
    assert_not duplicate_entry.valid?
  end

  test "password should validate password_confirmation" do
    @user.password_confirmation += "x"
    assert @user.invalid?
  end

  test "password should be at least 8 characters" do
    @user.password = "a" * 7
    @user.password_confirmation = "a" * 7
    assert @user.invalid?
  end

  test "password should be present" do
    @user.password = " " * 8
    @user.password = " " * 8
    assert @user.invalid?
  end
end
