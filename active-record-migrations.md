# Active Record Migrations 6/8/2023
Migrations: allows us to make a change to our schema

`$ rails new learn_band -d postgresql -T`
`$ cd learn_band`
`$ rails db:create`

## Create a model
`$ rails g model BandMember name:string instrument:string`
`$ rails db:migrate`

## Add content to DB
Enter console: `$ rails c`
```ruby
BandMember.create name:"Elyse", instrument:"Keyboard"
BandMember.create name:"Jacob", instrument:"Kazoo"
BandMember.create name:"Jesus", instrument:"Drums"
BandMember.create name:"Padge", instrument:"Cowbell"
BandMember.create name:"Miguel", instrument:"Vocals"
BandMember.create name:"Paul", instrument:"Bass"
```

## Add a column
`$ rails g migration add_column_pay_to_band_member`

```ruby
class AddColumnPayToBandMember < ActiveRecord::Migration[7.0]
  def change
    add_column :band_members, :pay, :integer
  end
end
```

`$ rails db:migrate`

## Change column name
`$ rails g migration change_name_of_pay_to_hourly_pay`

```ruby
class ChangeNameOfPayToHourlyPay < ActiveRecord::Migration[7.0]
  def change
    rename_column :band_members, :pay, :hourly_pay
  end
end
```

`$ rails db:migrate`

# Change data type of column
`$ rails g migration change_data_type_of_pay_to_float`

```ruby
class ChangeDataTypeOfPayToFloat < ActiveRecord::Migration[7.0]
  def change
    change_column :band_members, :hourly_pay, :float
  end
end
```

IMPORTANT:  Do NOT modify your migration files after you have migrated them into your schema!  This can cause some really crazy errors and can become very difficult to fix.  Do not delete migration files either.  Your application requires each of those files to know how to build your database.

