class User < ApplicationRecord
  has_many :jobs, dependent: :destroy

  validates :name, presence: true,
      length: {maximum: 100, too_long: "The maximum allowed length is %{count}"}
  validates :email, presence: true,
      length: {maximum: 255, too_long: "The maximum allowed length is %{count}"},
      format: {with: /\A\S+@\S+\.\S+\Z/, message: "Must be a valid email"},
      uniqueness: {case_sensitive: false}

  has_secure_password
  validates :password, presence: true, length: {minimum: 8, too_short: "The minimum allowed length is %{count}"}
end
