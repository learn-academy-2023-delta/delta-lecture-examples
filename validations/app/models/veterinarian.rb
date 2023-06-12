class Veterinarian < ApplicationRecord
  validates :name, :patients, presence: true
  validates :name, length: { in: 2..20 }
end
